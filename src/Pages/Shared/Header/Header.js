import React from 'react';
import { Button, Container, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../context/UseAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Genius</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end link-decorate">
                        <Link to="/home">Home</Link>
                        <Link to="/service">Services</Link>
                        <Link to="/doctor">Doctors</Link>
                        <Link to="/about">About us</Link>
                        {
                            user?.email ?
                                <Button variant='danger' className='mx-2' onClick={logOut}>Logout</Button>
                                :
                                <Link to='/login'>Login</Link>
                        }
                        <Navbar.Text className='ms-3'>
                            Signed in as: <Link to='login'>{user?.displayName}</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;