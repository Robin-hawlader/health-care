import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from './Service';

const AllServices = () => {
    const [services, setservices] = useState([])
    useEffect(() => {
        fetch('./healthCare.json')
            .then(res => res.json())
            .then(data => setservices(data))
    }, [])
    return (
        <div className='container my-5'>
            <h1 className='text-center my-5'><span className='border-bottom border-4 border-danger'>Our All Services</span></h1>
            <Row xs={1} md={3} className="g-4">

                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }

            </Row>
        </div>
    );
};

export default AllServices;