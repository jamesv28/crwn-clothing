import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component'; 
import CustomButton from '../button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            });
        }
        catch(err) {
            console.log(err);
        }    
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
                            type="button"
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