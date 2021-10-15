import React, {Component} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/custom-button.component';
import {createUserProfileDocument, auth} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        const {displayName, email, password, confirmPassword} = this.state;
        e.preventDefault();

        if(password !== confirmPassword) {
            alert('Password and confirm password does not match');
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '' 
            })
        } catch(err) {
            console.error(err);
        }
    }


    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                     />
                     <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                     />
                     <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                  />
                  <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
} 

export default SignUp;