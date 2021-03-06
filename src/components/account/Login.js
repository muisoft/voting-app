import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Card, FontIcon, Divider } from 'react-md';

import { Link, Redirect } from 'react-router-dom';
import { push } from 'react-router-redux';
import { withMainComponent } from '../hoc';

const Login = ({ onSignin, partialState, gotoTwitter, user, handleChange, location, history }) => {
    const styles = {
        submitButton: {
            marginTop: 15
        },
        divider: {
            width: 150
        },
        signin: {
            width: 400
        },
        optionSignin: {
            paddingRight: 5
        },
        input: {
            fontSize: 16
        }
    }
    const login_twitter_url = process.env.NODE_ENV === "production" ?
        "/auth/twitter" : "http://localhost:5005/auth/twitter";
    return (
        <form className="login-form" onSubmit={onSignin}>
            <div className="login-form">
                <div className="actions">
                    <Button
                        key="twitter"
                        raised
                        className="twitter-button">
                        <div className="small-device btn">
                            <FontIcon iconClassName="fa fa-twitter" className="social-icon" />
                            <a rel="noopener noreferrer" href={login_twitter_url}>Login with Twitter</a>
                        </div>
                    </Button>
                </div>
                <div className="line-divider">
                    <Divider style={styles.divider} /><span>OR</span><Divider style={styles.divider} />
                </div>
                <div className="signin" style={styles.signin}>
                    <div>
                        <TextField
                            id="username"
                            name="username"
                            placeholder="Username"
                            block paddedBlock
                            inputStyle={styles.input}
                            onChange={handleChange} />
                        <Divider />
                        <TextField
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            block paddedBlock
                            inputStyle={styles.input}
                            onChange={handleChange} />
                        <Divider />
                    </div>
                    <Button raised primary style={styles.submitButton} type="submit">Login</Button>
                </div>

                <div className="option-signin" style={{ marginTop: 10 }}>
                    <span style={styles.optionSign}>You don't have an account? </span><Button flat href="/account/signup" primary> Get one</Button>
                </div>
            </div>
        </form>
    )
}

Login.PropTypes = {
    onSignin: PropTypes.func.isRequired,
    partialState: PropTypes.object,
    user: PropTypes.object,
    handleChange: PropTypes.func.isRequired,
}

export default withMainComponent(Login);
