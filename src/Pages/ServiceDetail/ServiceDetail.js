import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const ServiceDetail = () => {
    const { detailId } = useParams();
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/healthCare.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // console.log(services)
    const userDetails = services.filter(detail => detail.id === parseInt(detailId))
    const history = useHistory();
    const gohomeHandler = () => {
        history.push('/service')
    }
    return (
        <div className='d-flex justify-content-center'>
            <div>
                <div>
                    <h1>Service details : {detailId}</h1>
                    <Card className='text-center' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={userDetails[0]?.thumbnail} />
                        <Card.Body>
                            <Card.Title>{userDetails[0]?.Service_name}</Card.Title>
                            <Card.Text>
                                {userDetails[0]?.description}
                            </Card.Text>

                        </Card.Body>
                        <Button onClick={gohomeHandler} variant="danger">Back to Service</Button>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;