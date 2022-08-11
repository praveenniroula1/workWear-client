import React, { useState } from "react";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/Header.js/Header";
import { Alert, Container, Placeholder } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInputFeild } from "../../customInputFeild/CustomInputFeild";
import { postUser } from "../../helpers/axiosHelper";

const AdminRegistration = () => {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return alert("Password do not match");
    }
    const result = await postUser(rest);
    setResponse(result);
    // console.log(form);
  };

  const fields = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "sam",
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      placeholder: "Smith",
      required: true,
    },
    {
      label: "Email Address",
      name: "email",
      type: "email",
      placeholder: "a@a.com",
      required: true,
    },
    {
      label: "Phone",
      name: "phone",
      type: "phone",
      placeholder: "04125845545",
      required: true,
    },
    {
      label: "Date Of Birth",
      name: "dob",
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
      name: "confirmPassword",
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
            {response.message && (
              <Alert
                variant={response.status === "success" ? "success" : "danger"}
              >
                {response.message}
              </Alert>
            )}
            <hr className="hr" />
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
