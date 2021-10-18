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
            <Row xs={1} md={3} className="g-4">

                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }

            </Row>
        </div>
    );
};

export default AllServices;