import React from 'react'
import '../../Pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from './Text'
import { AiFillGithub, AiFillInstagram, } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
    return (
        <div className='homepagebackground'>
            <Container>
                <Row>
                    <Col md={6}>
                        <h2 className='headtext'>Hi </h2>
                        <h2 className='nametext'>I'm Arunachalam.V</h2>
                        <span></span>
                        <Text />
                        <button onClick={() => {
                            window.open("https://github.com/arunachalam3342");
                        }}
                            className='socailmediabtn'><AiFillGithub className='icon' /></button>
                        <button onClick={() => {
                            window.open("https://www.linkedin.com/in/arunachalam-v-6b572a1b9");
                        }}
                            className='socailmediabtn'><FaLinkedinIn className='icon' /></button>

                        {/*
                        <button onClick={() => {
                            window.open("https://www.instagram.com/arun.v.214/");
                        }}
                            className='socailmediabtn'><AiFillInstagram className='icon' /></button>
                        */}
                    </Col>

                    <Col md={5}>
                        <div className="imagedeveloper">
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home