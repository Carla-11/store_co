import React from "react";
import {Button, Row, Col, Container} from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="">
         <Row>
             <Col> localizacion</Col>
             <Col>
              <Button>contactar</Button>
             <Button>contactar</Button>
             </Col>
             
             <Col></Col>
         </Row>
      </Container>

  </footer>
  );
};

export default Footer;
