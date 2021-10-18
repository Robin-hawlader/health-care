import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from './Service';

const Services = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch("./healthCare.json")
            .then(result => result.json())
            .then(data => setCard(data))
    }, [])
    const services = card.slice(0, 7);
    return (
        <div className='container my-5'>
            <h1 className='text-center my-5'><span className='border-bottom border-4 border-danger'>Our Supper Services</span></h1>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
            <Container className='my-5'>
                <Row>
                    <Col sm={12}>
                        <img className='img-fluid' src="https://www.devsnews.com/wp/medidove/wp-content/uploads/2019/05/about-img.jpg" alt="" />
                    </Col>
                    <Col sm={12}>
                        <div className='ms-md-3 w-100'>
                            <p>About Us</p>
                            <h1 className='fs-1 fw-bold'>Short Story About MediDove Clinic.</h1>
                            <p style={{ lineHeight: '2.8' }}>I woke up to the pungent smell of hospital disinfect, invading my nostrils. The room was silent apart from my heavy breathing and the beep beep sound you often hear in hospitals that indicates you're alive. I slowly opened my eyes, squinting in attempt to sharpen the blurred images before me. I glanced around and took in the deserted, blue and white colour schemed hospital bedroom. How long have I been here? I shut my eyes, trying to remember what had exactly happened. Then it all hits me with a bang. The memory of it all starts to occupy my thoughts.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Services;