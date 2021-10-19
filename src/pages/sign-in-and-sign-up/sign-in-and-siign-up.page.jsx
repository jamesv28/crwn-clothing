import React, {Component} from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/signup.component';

import './sign-in-and-sign-up.styles.scss';

class SignInAndSignUpPage extends Component {
    componentDidMount() {
        document.title = "Crown Clothes | Sign in and sign up";
    }

    render() {
        return (
            <div className="sign-in-and-sign-up">
                <SignIn />
                <SignUp />
            </div>
        )
    }
}

export default SignInAndSignUpPage;