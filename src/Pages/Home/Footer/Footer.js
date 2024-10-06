import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer py-5">
            <Container>
                  <div className="footer-conter">
                       <div className="footer-text">
                       <p class="company-about fadeIn">© Copyright Gym Heroes 2021. All Right Reserved</p>
                       </div>
                  </div>
            </Container>
        </div>
    );
};

export default Footer;