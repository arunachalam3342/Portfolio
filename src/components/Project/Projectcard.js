import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
      <Card.Title style={{textAlign:"center",fontWeight:"bold",textDecorationLine:"underline",fontSize:"30px"}}>{props.title}</Card.Title>
      <Button className="viewbtn" variant="primary" href={props.ghLink} target="_blank">
          View
        </Button>
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />        
        
        {"\n"}
        {"\n"}


        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "8px" }}
          >

            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;