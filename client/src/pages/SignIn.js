import React, { Component } from "react";
import API from "../utils/API";

class SignIn extends Component {

    state = {
        email: "",
        password: ""
    };

    handleSignIn = event => {
        event.preventDefault();
        API.login({
            email: this.state.username,
            password: this.state.loginPassword
        }).then((res) => {
            console.log('idk')
            let data = res.data;
            if (data && data.token) {
                document.cookie = 'movieListUser=' + data.token + '; Path=/;'
                localStorage.setItem('movieListUserId', data.id + '');
                this.props.history.push('/movies');
            }
        })
    };



    render() {
        return (

        <form className="col s12" onSubmit={this.handleSignIn}>
            <div className="row">
    
                <div className="input-field col s4 offset-s2">
                    <input className="validate" type="email" name="username" value={this.state.username} onChange={this.handleInputChange} />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s4">
                    <input className="validate" type="password" name="loginPassword" value={this.state.loginPassword} onChange={this.handleInputChange} />
                    <label htmlFor="password">password</label>
                </div>
                <input className="waves-effect waves-light indigo lighten-3 indigo-text btn" style={{ top: '20px' }} id="signiInButton" type="submit" />
            </div>
        </form>
        )
    }
}

export default SignIn;