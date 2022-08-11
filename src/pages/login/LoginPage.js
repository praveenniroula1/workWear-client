import React from "react";
import { Container } from "react-bootstrap";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/Header.js/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <Container className="page-main">
        <Form className="form m-auto mt-5 p-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h1>Login Here.</h1>
            <hr />
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default LoginPage;
