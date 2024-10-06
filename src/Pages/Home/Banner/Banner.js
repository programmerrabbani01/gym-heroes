import React from 'react';
import banner from '../../../images/boyman.jpg';
import './Banner.css';
import students from '../../../images/women.png';
import { Container,Row,Col,Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${banner})` }}> 
            <div className="blur">
                <Container className="h-100">
                    <Row className="h-100">
                        <Col lg={6}>
                            <div className="banner-content d-flex align-items-center">
                                <div className="banner-cont">
                                <h1 className="build">Build  <span className="build-span">Your </span> Body <span className="build-span">Strong</span> </h1>
                                <p>Ready to change your physique, but can't work out in the gym?</p>
                                <Button variant="primary" className="register-btn">Classes</Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="d-flex align-items-center">
                            <div className="img-content ">
                                <img className="img-fluid" src={students} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Banner;