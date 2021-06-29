import React, { Component } from 'react';

class LogIn extends Component {
    state = {
        username: '',
        password: '',
    }

    onChange = (e) => {
        let name = e.target.name
        this.setState({ [name]: e.target.value })
    }

    onClick = (e) => {
        e.preventDefault();

        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            credentials: "include", //sends cross-origin cookie
            body: JSON.stringify(this.state)
        }

        fetch('http://localhost:3000/login', configObj)
            .then(response => response.json())
            .then(userData => {
                //lifting state up tp parent (App) 
                //once user signs in we want to make a fetch request to logged_in to set current_user 
                this.props.handleLogin(userData);
            });
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <input placeholder="Username" type="text" value={this.state.username} onChange={this.onChange} name="username" />
                    </div>

                    <div>
                        <input placeholder="Password" type="text" value={this.state.password} onChange={this.onChange} name="password" />
                    </div>

                    <button onClick={(event) => this.onClick(event)}> Submit </button>
                </form>
            </div>
        );
    }
}

export default LogIn;