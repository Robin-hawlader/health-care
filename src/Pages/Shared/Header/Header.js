import { faHospitalSymbol, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../context/UseAuth';
import './Header.css'


const hospital = <FontAwesomeIcon icon={faHospitalSymbol} />
const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='d-flex justify-content-center align-items-center'><span className='fs-2 me-3'>{hospital}</span> MediDove</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto link-decorate">
                            <Link to="/home">Home</Link>
                            <Link to="/service">Services</Link>
                            <Link to="/doctor">Doctors</Link>
                            <Link to="/client">Client Says</Link>
                            {
                                user?.email ?
                                    <Button variant='danger' className='mx-2' onClick={logOut}>Logout</Button>
                                    :
                                    <Link to='/login'>Login</Link>
                            }
                        </Nav>
                        <Navbar.Text className='ms-3'>
                            Signed in as: <Link to='login' className='text-decoration-none'>{user?.displayName}</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;