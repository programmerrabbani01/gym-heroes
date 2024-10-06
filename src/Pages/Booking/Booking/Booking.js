import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () => {
    let {servicesId} = useParams();
    const [booking, setBooking] = useState([]);
    const [bookDetails, setBookDetails] = useState({});
    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res=> res.json())
        .then(data => setBooking(data));
    },[]);
    console.log(booking);
     useEffect(()=>{
         const book = booking.find(book=> book.id === servicesId);
         setBookDetails(book);
     },[booking,servicesId]);
     console.log(bookDetails?.classes);
    return (
        <Container>
        <Card className="w-50 mx-auto mt-5">
            <Card.Img variant="top" src={bookDetails?.img} />
            <Card.Body>
                <Card.Title> Class: {bookDetails?.classes}</Card.Title>
                <Card.Text>
                Ready to change your physique, but can't work out in the gym?
                <h4> Teacher:{bookDetails?.teacher}</h4>
                </Card.Text>
            </Card.Body>
            </Card>
        </Container>
        
    );
};

export default Booking;