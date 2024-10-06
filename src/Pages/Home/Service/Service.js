
import React from 'react';
import { Card, Col,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {classes,price,img,teacher,id} = props.service;
    return (
        <Col className=" d-flex align-items-stretch ">
            <Card>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                <Card.Title className="service">{classes}</Card.Title>
                <Card.Text className="text-center">
                    <h6 className="price">Price: ${price}</h6>
                    <h6 className="teacher">Teacher: {teacher}</h6>
                    <Link to={`/booking/${id}`}>
                        <Button variant="primary text-center mt-2" className="register-btn">Admission Now</Button>
                    </Link>
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>  
    );
};

export default Service;