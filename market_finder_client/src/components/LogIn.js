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
            body: JSON.stringify(this.state) 
        }

        fetch('http://localhost:3000/login', configObj)
        .then(response => response.json())
        .then(user => {
            console.log(user)
            this.props.handleLogin(user);
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