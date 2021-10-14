import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component'; 
import CustomButton from '../button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
    }

    handleChange = e => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        const {email, password} = this.state;

        return (
            <div className="sign-in">
                <h2>Sign In</h2>
                <span>Sign In with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email"
                        type="email"
                        value={email}
                        label='Email'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        name="password"
                        type="password"
                        value={password}
                        label="Password"
                        handleChange={this.handleChange}
                        required
                    />
                    <div className="buttons">
                        <CustomButton 
                            type="submit" 
                        >
                            Sign In
                        </CustomButton>
                        <CustomButton 
                            onClick={signInWithGoogle}
                            isGoogleSignIn
                        >
                            Google Sign In
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;