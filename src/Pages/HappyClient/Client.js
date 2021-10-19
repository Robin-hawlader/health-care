import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col } from 'react-bootstrap';

const star = <FontAwesomeIcon icon={faStar} />

const Client = (props) => {
    const { thumbnail, _name, comment } = props.user;
    return (
        <div>
            <Col className='d-flex justify-content-center mt-5'>
                <div className='doctor-card'>
                    <img src={thumbnail} alt="" />
                    <div className='text-center mt-5'>
                        <h2 >{_name}</h2>
                        <p className='text-danger fw-bold'>{comment}</p>
                        <span className='text-warning'>{star}{star}{star}{star}{star}</span>
                    </div>
                </div>
            </Col>
        </div>
    );
};

export default Client;