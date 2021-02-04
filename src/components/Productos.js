import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import React from "react";

const Productos = () => {
  // eslint-disable-next-line
  const [produc, setproduct] = React.useState([]);

  React.useEffect(() => {
    DatosApi();
  }, []);

  const DatosApi = async () => {
    const data = await fetch(
      "https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products"
    );
    const products = await data.json();

    setproduct(products);
    console.log(products);
  };

  return (
    <Container className="my-5">
        <h2 className="font-weight-bold"> Mais Vendidos</h2>
      {produc.map((item) => (
        <Row  sm="2" md="4">
          <Col xs="6" sm="4">
            <Card>
              <CardImg top width="100%" src={item.img} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">{item.product}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  {item.price}
                </CardSubtitle>
                <CardText>{item.description}</CardText>
                <Button>Comprar</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Productos;
