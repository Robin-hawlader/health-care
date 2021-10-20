import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Service = (props) => {
    const { id, Service_name, description, thumbnail } = props.service;
    const history = useHistory();
    const detailHandle = () => {
        history.push(`/service/${id}`)
    }
    return (
        <div>
            <Col>
                <Card className='h-100'>
                    <Card.Img variant="top" src={thumbnail} />
                    <Card.Body>
                        <Card.Title>{Service_name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={detailHandle} variant='danger'>More Details</Button>
                </Card>
            </Col>
        </div>
    );
};

export default Service;