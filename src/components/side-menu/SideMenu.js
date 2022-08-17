import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { setShowSideMenu } from "../../pages/system-state/SystemSlice";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

export const SideMenu = () => {
  const dispatch = useDispatch();
  const { showSideMenu } = useSelector((state) => state.system);
  const handleClose = () => dispatch(setShowSideMenu(false));

  return (
    <div>
      <Offcanvas className="bg-light" show={showSideMenu} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CMS ADMIN PANEL</Offcanvas.Title>
        </Offcanvas.Header>
        <hr />
        <Offcanvas.Body className="bg-light">
          <ListGroup variant="flush" className="fs-4 ">
            <ListGroup.Item>
              <Link onClick={handleClose} to="/dashboard" className="nav-link">
                {" "}
                <i class="fa-solid fa-gauge "></i> Dashboard
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="" className="nav-link">
                {" "}
                <i class="fa-solid fa-list"></i> Categories{" "}
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="/Product" className="nav-link">
                <i class="fa-brands fa-product-hunt"></i> Products
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="" className="nav-link">
                {" "}
                <i class="fa-solid fa-credit-card"></i> Payment Method{" "}
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="" className="nav-link">
                <i class="fa-solid fa-users"></i> Users
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="" className="nav-link">
                <i class="fa-solid fa-table"></i> Orders
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="" className="nav-link">
                <i class="fa-solid fa-star"></i> Reviews
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="" className="nav-link">
                <i class="fa-solid fa-gear"></i> Setting
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
