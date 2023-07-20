import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap'

const ContactPage = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const handleEmailClick = () => {
    const mail = 'arunachalam3342@gmail.com';
    const sub=subject
    const sender=email
    const mailtoLink = `mailto:${mail}?subject=${encodeURIComponent(sub)}&cc=${encodeURIComponent(sender)}`;
    window.open(mailtoLink,'_blank');
  };
  
  /*
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Subject:', subject);
    console.log('Email:', email);
    setName('');
    setSubject('');
    setEmail('');
  };*/



  return (
    <div className="contactbackground">
      <h2 className="contacthead" style={{ textDecorationLine: "underline" }}>Get in Touch</h2>
      <Container className="aboutdetails">
        <div className='row'>
          <Col md={6} style={{ boxShadow: "6px 6px 6px 6px #888888" }}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label className="mt-1" style={{ fontSize: "larger", fontWeight: "bold", textDecorationLine: "underline" }}>Name</Form.Label>
                <Form.Control className="mt-1 "
                  
                  type="text"
                  placeholder="Name"
                  value={name}
                  style={{ maxWidth: '600px' }}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formSubject">
                <Form.Label className="mt-1" style={{ fontSize: "larger", fontWeight: "bold", textDecorationLine: "underline" }}>Subject</Form.Label>
                <Form.Control className="mt-1 "
                  
                  type="text"
                  placeholder="Subject for mail"
                  value={subject}
                  style={{ maxWidth: '600px' }}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label className="mt-1" style={{ fontSize: "larger", fontWeight: "bold", textDecorationLine: "underline" }}>Email</Form.Label>
                <Form.Control className="mt-1 "
                  
                  type="email"
                  placeholder="Email"
                  value={email}
                  style={{ maxWidth: '600px' }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <div className='d-flex justify-content-center mt-1 mb-3 '>
                <Button variant="primary" type="submit" className='contactbtn' onClick={handleEmailClick}>
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
          <Col md={6} style={{ fontFamily: "Ariel" }}>
            <Container>
              <div className='aboutmetext mt-3'>
                Contact Details
              </div>
              <ul className="ms-4 container-fluid" style={{ fontSize: "20px", listStyle: "none", fontStyle: "italic", textAlign: "justify" }}>
                <li><i class="fa-solid fa-envelope"></i><b>MailID: </b>arunachalam3342@gmail.com</li>
                <li><i class="fa-solid fa-mobile"></i><b>Mobile: </b>9361758270</li>
              </ul>
            </Container>
          </Col>
        </div>
        <br />
      </Container>
      

    </div>
  );
};

export default ContactPage;
