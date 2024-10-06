import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import about from '../../images/being-builder.png';

const About = () => {
    return (
        <div className="about-us py-5">
          <Container>
              <Row>
                  <Col lg={12} className="text-center">
                      <div className="about-us">
                         <h4 className="about-title">BEING BODY BUILDERS</h4>
                         <h2 className="about-heading">All ABOUT FITNESS</h2>
                         <p className="about-descrition">Yoga, is a meditative means of discovering dysfunctional perception and cognition, as well as overcoming it for release from suffering, inner peace and salvation</p>
                      </div>
                  </Col>
                  <Col lg={12}>
                      <div className="about-image tex-center">
                          <img className="img-fluid mt-2" src={about} alt="" />
                      </div>
                  </Col>
              </Row>
          </Container>
        </div>
    );
};

export default About;