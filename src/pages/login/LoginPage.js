import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/Header.js/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInputFeild } from "../../customInputFeild/CustomInputFeild";
import { useDispatch, useSelector } from "react-redux";
import { loginAdminUser, loginUserAction } from "./userAction";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const { user } = useSelector((state) => state.admin);
  useEffect(() => {
    user._id && navigate("/dashboard");
  }, [user, navigate]);

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
    dispatch(loginUserAction(form));
  };
  return (
    <div>
      <Header />
      <Container className="page-main">
        <Form className="form mt-5 p-5" onSubmit={handleOnSubmit}>
          <h1>Welcome Back!!!</h1>
          <CustomInputFeild
            onChange={handleOnChange}
            label="Email"
            name="email"
            type="email"
            required={true}
            placeholder="a@a.com"
          />
          <CustomInputFeild
            onChange={handleOnChange}
            label="Password"
            name="password"
            required={true}
            type="password"
            placeholder="*********"
          />
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default LoginPage;
