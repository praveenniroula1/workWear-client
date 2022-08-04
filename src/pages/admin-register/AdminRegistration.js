import React, { useState } from "react";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/Header.js/Header";
import { Container, Placeholder } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInputFeild } from "../../customInputFeild/CustomInputFeild";

const AdminRegistration = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const fields = [
    {
      label: "First Name",
      name: "fname",
      type: "text",
      placeholder: "sam",
      required: true,
    },
    {
      label: "Last Name",
      name: "Lname",
      type: "text",
      placeholder: "Smith",
      required: true,
    },
    {
      label: "Email Address",
      name: "Email",
      type: "email",
      placeholder: "a@a.com",
      required: true,
    },
    {
      label: "Date Of Birth",
      name: "Date",
      type: "date",
      required: true,
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "1 George Road Sydney 2000",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "********",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirm password",
      type: "password",
      placeholder: "********",
      required: true,
    },
  ];
  return (
    <div>
      <Header />
      <Container className="page-main">
        <div className="form">
          <Form onSubmit={handleOnSubmit}>
            <h1>Register New Admin</h1>
            <hr />
            {fields.map((item, index) => (
              <CustomInputFeild
                key={index}
                {...item}
                onChange={handleOnChange}
              />
            ))}
            ;
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default AdminRegistration;
