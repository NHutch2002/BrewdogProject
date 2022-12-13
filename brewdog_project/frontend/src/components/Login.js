import React, { Component } from 'react';
import { Menu, Container } from '@material-ui/core';

export class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }

    style = theme => ({
        toolbar: theme.mixins.toolbar,
    });

    render() {
        return (
            <div style={{marginTop: "125px"}}>
                <div className={this.style.toolbar} />
                {/* <Menu>
                    <Container>
                        <h1>Login</h1>
                    </Container>
                </Menu> */}
                <Container>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <label>Username</label>
                            <input
                                type='text'
                                name='username'
                                onChange={this.onChange}
                                value={this.state.username}
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type='password'
                                name='password'
                                onChange={this.onChange}
                                value={this.state.password}
                            />
                        </div>
                        <div>
                            <input type='submit' value='Login' />
                        </div>
                    </form>
                </Container>
            </div>
        )
    }
}
export default Login;
