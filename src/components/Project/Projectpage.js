import React from 'react';
import "../../Pages/style.css";
import ProjectCard from "./Projectcard";
import { Container, Row, Col } from 'react-bootstrap';
import img01 from "../../Assets/task01.png";
import img02 from "../../Assets/task02.png";
import img03 from "../../Assets/task03.png";
import img05 from "../../Assets/task05.png";
import img06 from "../../Assets/task06.png";
import Real_Estate from "../../Assets/Real_Estate.png";
import To_Do_List from "../../Assets/To-Do-List.png";
import youtube from "../../Assets/Youtube.png";

function Projectpage() {
    return (
        <div className="projectbackground">
            <Container fluid className="project-section">
                <Container className='h-auto'>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={4} className="project-card">
                            <ProjectCard imgPath={Real_Estate} title="REAL ESTATE PRICE PREDICTION" ghLink="https://arunachalam3342-fundamentalsofdataanalyt-real-estate-app-i0wgpi.streamlit.app/" />
                        </Col>
                        <Col md={4} className="project-card">
                            <ProjectCard imgPath={youtube} title="YOUTUBE CLONE" ghLink="https://arunachalam3342.github.io/Youtube-Clone/" />
                        </Col>
                        <Col md={4} className="project-card">
                            <ProjectCard imgPath={To_Do_List} title="To-Do-List" ghLink="https://arunachalam3342.github.io/To-Do-List/" />
                        </Col>
                        <Col md={4} className="project-card">
                            <ProjectCard imgPath={img01} title="RESPONSIVE WORD COUNTER" ghLink="https://arunachalam3342.github.io/React-Task01/" />
                        </Col>
                        <Col md={4} className="project-card">
                            <ProjectCard imgPath={img02} title="CALCULATOR" ghLink="https://arunachalam3342.github.io/React-Task02/" />
                        </Col>
                        <Col md={4} className="project-card">
                            <ProjectCard imgPath={img03} title="COLOR PICKER" ghLink="https://arunachalam3342.github.io/React-Task03/" />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCard imgPath={img05} title="AGE CALCULATOR" ghLink="https://arunachalam3342.github.io/React-Task05/" />
                        </Col>
                        <Col md={4} className="project-card">
                            <ProjectCard imgPath={img06} title="TICTACTOE" ghLink="https://arunachalam3342.github.io/React-TicTacToe/" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}
export default Projectpage