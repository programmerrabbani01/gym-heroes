import React from 'react';
import { Form,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
// import useFirebase from '../../../Hooks/useFirebase';
const Login = () => {
    const {setEmail,setPass} = useAuth();
    const HandleSubmitLog = e => {
        e.preventDefault();
    }
    const handleEmailChange  = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPass(e.target.value);
    }
   
    return (
        <div className="register w-50 mx-auto py-5">
            <h2 className="text-center">Please <span className="register-text">Log In</span></h2>
        <Form onSubmit={HandleSubmitLog}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePasswordChange} type="password"  placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                 <Link to="/register" className="allready-register">Register</Link>
            </Form.Group>
            <Button variant="primary" type="submit" className="register-btn">
              Log In
            </Button>
         </Form>
        </div>
    );
};

export default Login;