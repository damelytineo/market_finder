import React, { Component } from 'react';
import LogIn from './LogIn';
import Router from './Router';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { displayLogIn: true };        
    }

    componentDidMount() {
        this.handleLogin();
    }

    handleLogin = () => {
        fetch('http://localhost:3000/logged_in', {
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
            if (data.logged_in) {
                this.setState({displayLogIn: false});
            }
        });
    }

    render() {
        return (
            <div>
                {this.state.displayLogIn
                    ? <LogIn handleLogin={this.handleLogin} /> : <Router />} {/* send callback method to login pg, send response back up */}
            </div>
        );
    }
}

export default App;
