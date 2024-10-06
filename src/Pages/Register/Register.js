import React from 'react';
import { Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import useFirebase from '../../Hooks/useFirebase';
import './Register.css';

const Register = () => {
    const {setEmail,setPass,signUsingGoogle} = useAuth();
    const HandleSubmit = e => {
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
            <h2 className="text-center">Please <span className="register-text">Register</span></h2>
        <Form onSubmit={HandleSubmit}>
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
                <Link to="/login" className="allready-register">Already Register?</Link>
            </Form.Group>
            <Button variant="primary" type="submit" className="register-btn">
               Sign In
            </Button>
            <br />
            <h4 className="google mt-4">Or use one of these options</h4>
         </Form>
         <Button onClick={signUsingGoogle} variant="primary" type="submit" className="register-btn mx-auto mt-2">
                    Google Sign In
            </Button>
        </div>
    );
};

export default Register;