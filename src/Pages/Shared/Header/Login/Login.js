import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import useAuth from '../../../../context/UseAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGooggle, handleRegistration, handleEmailChange, handlePasswordChange, isLogin, toggleLogin, resetPassword } = useAuth();

    return (
        <div className='d-flex justify-content-center'>
            <div className='mx-5 w-50  my-5'>
                <Form onSubmit={handleRegistration} className='background p-5'>
                    <h3>Please {isLogin ? 'Login' : 'Register'}</h3>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check onChange={toggleLogin} label="Already Regestered?" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit" variant='danger'>{isLogin ? 'Login' : 'Register'}</Button>
                            <Button onClick={resetPassword} variant='danger' className='mx-3'>Reset Password</Button>
                        </Col>
                    </Form.Group>
                </Form>
                <div className='text-center my-5'>
                    <div>----------------or----------------</div>
                    <Button onClick={signInUsingGooggle} variant='danger'>Google Sign in</Button>
                </div>
            </div>

        </div>
    );
};

export default Login;