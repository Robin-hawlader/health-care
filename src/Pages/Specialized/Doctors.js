import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Specialized from './Specialized';


const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('./fakedoctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <div className='container my-5 text-center text-md-start'>
                <span className='color-gray'>Our Team</span>
                <h1 className='fw-bold'>A Professional & <br /> <span className='border-bottom border-4 border-danger'>Care Provider</span></h1>
            </div>
            <Container>
                <Row md={3}>
                    {
                        doctors.map(doctor => <Specialized key={doctor.id} doctor={doctor}></Specialized>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Doctors;