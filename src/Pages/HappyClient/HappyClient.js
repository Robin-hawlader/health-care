import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Client from './Client';

const HappyClient = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('./fakeClientData.json')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    return (
        <div>
            <h1 className='text-center my-5'><span className='border-bottom border-4 border-danger'>Our Client Expression</span></h1>
            <Container>
                <Row md={2}>
                    {
                        user.map(user => <Client key={user.id} user={user}></Client>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default HappyClient;