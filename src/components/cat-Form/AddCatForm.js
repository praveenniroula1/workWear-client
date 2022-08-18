import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postCategory } from "../../helpers/axiosHelper";
import {
  getCategoryAction,
  postCategoryAction,
} from "../../pages/categories/CategoryAction";

const initialState = {
  status: "inactive",
  name: "",
  parentId: null,
};

export const AddCatForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const { categories } = useSelector((state) => state.category);
  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;
    console.log(checked);
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(postCategoryAction(form));
  };
  return (
    <Form className="py-4 mb-5 shadow-lg rounded" onSubmit={handleOnSubmit}>
      <h4 className="mb-3">Add new Category</h4>
      <Row className="d-flex justify content-center">
        <Col md="2 g-3">
          <Form.Group>
            <Form.Check
              name="status"
              label="status"
              type="switch"
              onChange={handleOnChange}
            />
          </Form.Group>
        </Col>
        <Col md="2 g-3">
          <Form.Group>
            <Form.Select name="parentId" onChange={handleOnChange}>
              <option value="">Select Category</option>
              {categories.length > 0 &&
                categories.map(
                  (item) =>
                    !item.parentId && (
                      <option value={item._id}>{item.name}</option>
                    )
                )}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md="4 g-3">
          <Form.Group>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              placeholder="Categroy Name"
              required
              name="name"
            />
          </Form.Group>
        </Col>
        <Col md="2 g-3">
          <Button variant="primary " type="submit">
            Add Category
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
