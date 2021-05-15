import React, { Component } from 'react';
import LogIn from './components/LogIn';
import Router from './components/Router';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayLogIn: true,
            current_user: ''
        };
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
                    this.setState({ displayLogIn: false, current_user: data.user.id});
                }
            });

    }

    render() {
        return (
            <div>
                {this.state.displayLogIn
                    ? <LogIn handleLogin={this.handleLogin} /> : <Router current_user={this.state.current_user}/>} {/* send callback method to login pg, send response back up */}
            </div>
        );
    }
}

export default App;
