import React, { Component } from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-siign-up.page';
import AboutPage from './pages/about/about.component';
import CheckoutPage from './pages/checkout/checkout.component';
import NotFound from './pages/not-found/not-found.page';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';

import './App.css';

class App extends Component{

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop"  component={ShopPage} />
            <Route exact path="/signin" render={() => this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
