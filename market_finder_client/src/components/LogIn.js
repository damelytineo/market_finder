// import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


// class LogIn extends Component {
//     state = {
//         username: '',
//         password: '',
//     }

//     onChange = (e) => {
//         let name = e.target.name
//         this.setState({ [name]: e.target.value })
//     }

//     onClick = (e) => {
//         e.preventDefault();

//         let configObj = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             credentials: "include", //sends cross-origin cookie
//             body: JSON.stringify(this.state)
//         }

//         fetch('http://localhost:3000/login', configObj)
//             .then(response => response.json())
//             .then(userData => {
//                 //lifting state up tp parent (App) 
//                 //once user signs in we want to make a fetch request to logged_in to set current_user 
//                 this.props.handleLogin(userData);
//             });
//     }

//     render() {
//         return (
//             <div>
//                 <Form>
//                     <Row>
//                         <Col xs={3}>
//                             <Form.Control type="text" placeholder="Username" value={this.state.username} onChange={this.onChange} name="username" />
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col xs={3} >
//                             <Form.Control type="text" placeholder="Password" value={this.state.password} onChange={this.onChange} name="password" />
//                             <Button variant="success" onClick={(event) => this.onClick(event)}> Submit </Button>
//                         </Col>
//                     </Row>
//                 </Form>
//             </div>
//         );
//     }
// }

// export default LogIn;


import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const LogIn = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onClick = (e) => {
        console.log(username);
        console.log(password)
        e.preventDefault();
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            credentials: "include", //sends cross-origin cookie
            body: JSON.stringify({ username, password })
        }
        fetch('http://localhost:3000/login', configObj)
            .then(response => response.json())
            .then(userData => {
                //lifting state up tp parent (App) 
                //once user signs in we want to make a fetch request to logged_in to set current_user 
                props.handleLogin(userData);
            });
    }

    return (
        <div>
            <Form>
                <Row>
                    <Col xs={3}>
                        <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} name="username" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={3} >
                        <Form.Control type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" />
                        <Button variant="success" onClick={(event) => onClick(event)}> Submit </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};
export default LogIn;