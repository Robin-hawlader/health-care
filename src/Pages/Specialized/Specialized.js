import React from 'react';
import { Col } from 'react-bootstrap';
import './Specialized.css'

const Specialized = (props) => {
    const { _name, dignity, thumbnail } = props.doctor;
    return (
        <Col className='d-flex justify-content-center mt-5'>
            <div className='doctor-card'>
                <img src={thumbnail} alt="" />
                <div className='text-center mt-5'>
                    <h2 >{_name}</h2>
                    <p className='text-danger fw-bold'>{dignity}</p>
                </div>
            </div>
        </Col>

    );
};

export default Specialized;