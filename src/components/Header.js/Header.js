import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { adminLogout } from "../../pages/login/userAction";
import { setShowSideMenu } from "../../pages/system-state/SystemSlice";
import logo from "./../../img/logo.png";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.admin);
  const handleShow = () => dispatch(setShowSideMenu(true));
  const handleOnLogout = () => {
    dispatch(adminLogout());
    navigate("/");
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        text=""
        bg="dark"
        expand="md"
        className="opacity-75"
      >
        <Container>
          <Navbar.Brand href="#home">
            <div>
              {" "}
              {user._id && (
                <>
                  <i
                    class="fa-solid fa-bars text-light"
                    onClick={handleShow}
                  ></i>
                  <a href="/">
                    <img className="logo1" src={logo} width="170" height="50" />
                  </a>
                </>
              )}
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            className="bg-light"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {user._id ? (
                <Link
                  onClick={handleOnLogout}
                  className="nav-link text-light"
                  to="/"
                >
                  Logout
                </Link>
              ) : (
                <>
                  <Link className="nav-link text-light" to="/">
                    Login
                  </Link>
                  <Link className="nav-link text-light" to="/register">
                    Register
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
