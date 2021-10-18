import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faAngleRight, faClock, faHospitalSymbol } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const clock = <FontAwesomeIcon icon={faClock} />
const hospital = <FontAwesomeIcon icon={faHospitalSymbol} />
const angleRight = <FontAwesomeIcon icon={faAngleRight} />

const Footer = () => {
    return (
        <div className='bg-dark footer'>
            <Container>
                <Row>
                    <Col className='text-light'>
                        <div>
                            <h2>{hospital} A good hospital Objective</h2>
                            <p>The best hospitals always prioritize the patient’s comfort and convenience at each stage of their journey. A good hospital should focus on making the patient’s experience as seamless as possible, right from appointment booking to discharge.</p>
                        </div>
                    </Col>
                    <Col>
                        <nav className='link-decorate text-light'>
                            <h3>Main Links</h3>
                            <Link to="/home">{angleRight} Home</Link> <br />
                            <Link to="/service">{angleRight} Service</Link> <br />
                            <Link to="/doctor">{angleRight} Doctors</Link><br />
                            <Link to="/about">{angleRight} About us</Link><br />
                            <Link to="/login">{angleRight} Login</Link>

                        </nav>

                    </Col>
                    <Col className='text-light'>
                        <div className='opening'>
                            <h3>Opening Hours</h3>
                            <p>{clock} 24/7 hours Open <br /><span className='text-danger'><b>Friday Open</b></span></p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Footer;