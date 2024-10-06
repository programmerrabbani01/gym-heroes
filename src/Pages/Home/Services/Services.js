import React, { useEffect, useState } from 'react';
import { Container, Row} from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=> res.json())
        .then(data => setService(data));
    },[]);
    const services =  service.slice(0,9);
    return (
        <div className="services py-5">
            <Container>
                 <h2 className="text-center service-heading pb-5"> <span className="explore"></span> CLASSES</h2>
                 <Row xs={1} md={3} className="g-4">
                     {services.map(service => <Service service={service} key={service.id}></Service> )}
                </Row>
            </Container>   
        </div>
    );
};

export default Services;