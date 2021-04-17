import React, { Component } from 'react';
import LogIn from './LogIn';
import Router from './Router';

class App extends Component {        
    constructor(props) {
        super(props);
        this.state = {displayLogIn: true};
    }

    handleLogin = (user) => {
        console.log(user);
        this.setState({displayLogIn: false})
    }

    render() {
        return (
            <div>
                {this.state.displayLogIn 
                ? <LogIn handleLogin={this.handleLogin}/> : <Router />} {/* send callback method to login pg, send response back up */}
            </div>
        );
    }
}

export default App;
