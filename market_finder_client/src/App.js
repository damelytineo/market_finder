// import React, { Component } from 'react';
// import LogIn from './components/LogIn';
// import Home from './components/Home';
// import Container from 'react-bootstrap/Container';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             displayLogIn: true,
//             current_user: ''
//         };
//     }

//     componentDidMount() {
//         this.handleLogin();
//     }

//     handleLogin = () => {
//         fetch('http://localhost:3000/logged_in', {
//             credentials: 'include'
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.logged_in) {
//                     //hide login form and set current_user else keep showing form 
//                     this.setState({ displayLogIn: false, current_user: data.user.id });
//                 }
//             });
//     }

//     render() {
//         return (
//             <Container>
//                 {this.state.displayLogIn
//                     ? <LogIn handleLogin={this.handleLogin} /> : <Home current_user={this.state.current_user} />}
//             </Container>
//         );
//     }
// }

// export default App;


import React, { useState, useEffect } from 'react';
import LogIn from './components/LogIn';
import Home from './components/Home';
import Container from 'react-bootstrap/Container';

const App = () => {
    const [displayLogIn, setDisplayLogIn] = useState(true);
    const [currentUser, setCurrentUser] = useState('');

    useEffect(() => { handleLogin() }, [])

    const handleLogin = () => {
        fetch('http://localhost:3000/logged_in', {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                if (data.logged_in) {
                    //hide login form and set current_user else keep showing form 
                    setDisplayLogIn(false);
                    setCurrentUser(data.user.id);
                }
            });
    }

    return (
        <Container>
            {displayLogIn
                ? <LogIn handleLogin={handleLogin} /> : <Home currentUser={currentUser} />}
        </Container>
    );
};

export default App;
