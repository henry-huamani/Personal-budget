import React from "react";
import Footer from "./Footer";

import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

const About = () => {
    return(
        <React.Fragment>
            <Container className="p-1">
                <Card>
                    <Card.Header as='h5'>Record all your monetary operations to be in control of your finances</Card.Header>
                    <Card.Body>
                        <Carousel className="bg-primary">
                            <Carousel.Item>
                                <img className="mx-auto d-block" src="/assets/first.jpg" alt="First slide" style={{width: '20rem', height: '20rem'}}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="mx-auto d-block" src="/assets/second.jpg" alt="Second slide" style={{width: '20rem', height: '20rem'}}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="mx-auto d-block" src="/assets/third.jpg" alt="Third slide" style={{width: '20rem', height: '20rem'}}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="mx-auto d-block" src="/assets/fourth.png" alt="Fourth slide" style={{width: '20rem', height: '20rem'}}/>
                            </Carousel.Item>
                        </Carousel>
                        <Card.Text className="mt-4">
                            This web app allows you to keep track of the expenses and income of money that you or your family is having.<br/><br/>
                            Record with exact date the expenses or income of money to then visualize the result of all of them or also visualize them filtering them by the type of operation.<br/><br/>
                            Also edit or delete operations if you made a mistake when registering them or because they are no longer relevant.<br/><br/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>

            <Footer/>
        </React.Fragment>
    )
}

export default About;