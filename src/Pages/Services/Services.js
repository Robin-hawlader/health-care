import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from './Service';

const Services = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch("./healthCare.json")
            .then(result => result.json())
            .then(data => setCard(data))
    }, [])
    // const services = card.slice(0, 3);
    return (
        <div className='container my-5'>
            <Row xs={1} md={3} className="g-4">
                {
                    card.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;