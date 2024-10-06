import React from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Notfound.css';
const Notfound = () => {
    return (
        <div className="not-found py-5">
             <Container>
                 <Row>
                     <Col>
                        <div className="not-found">
                           <h2>404</h2>
                           <p> Page Not Found</p>
                            <NavLink to="/">
                                <Button variant="primary">GO BACK HOME</Button>
                            </NavLink>
                        </div>
                     </Col>
                 </Row>
             </Container>
        </div>
    );
};

export default Notfound;