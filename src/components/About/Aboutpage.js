import React from 'react'
import "../../Pages/style.css"

import { Container, Row, Col } from "react-bootstrap"

function Aboutpage() {
    return (
        <div className="aboutpagebackground">
            <Container>
                <Row className="textbackground">
                    <Col md={7}>
                        <h2 className="aboutmetext"> About ME</h2>
                        <p className="aboutdetails">I am a dedicated programmer with a passion for problem-solving and computing. As a Developer, I flourish on the challenges that programming presents and take pleasure in developing scalable and efficient solutions. I am committed to honing my programming skills and remaining abreast of the most recent industry trends, as I have a firm comprehension of software development principles and a voracious appetite for lifelong learning.</p>
                        <ul className="skilllist" style={{ fontSize: "larger" }}>
                            <Row>
                                <h2 style={{ textDecorationLine: "underline", textAlign: "center" }}>Skills</h2>
                                <Col md={12} style={{textAlign:'center'}}>
                                    <li>Python</li>
                                    <li>Java</li>
                                    <li>Flask and Streamlit</li>
                                    <li>HTML5</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>Bootstrap</li>
                                    <li>ReactJS</li>
                                    <li>ExpressJS</li>
                                    <li>NodeJS</li>
                                    <li>MongoDB</li>
                                    <li>C/CPP</li>
                                    <li>R</li>
                                    <li>XML</li>
                                    <li>SQL</li>
                                    <li>Git/Github</li>
                                    <li>UIPath</li>

                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>


            </Container>

        </div>

    )
}

export default Aboutpage;