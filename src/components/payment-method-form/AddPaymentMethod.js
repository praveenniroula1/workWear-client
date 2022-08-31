import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CustomInputFeild } from "../../customInputFeild/CustomInputFeild";
import { CustomModal } from "../model/Model";
import { postPmsAction } from "../payment-method-table/pmAction";

const initialState = {
  status: "",
  name: "",
  description: "",
};
export const AddPaymentMethod = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;

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
    console.log(form);
    dispatch(postPmsAction(form));
  };

  const inputFeild = [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "Enter category name",
    },
    {
      name: "description",
      label: "Description",
      as: "textarea",
      type: "text",
      required: true,
      placeholder: "Enter some info about method",
    },
  ];
  return (
    <CustomModal title="Add New Payment Method">
      <Form onSubmit={handleOnSubmit}>
        <Form.Group>
          <Form.Check
            type="switch"
            name="status"
            label="Status"
            onChange={handleOnChange}
          />
        </Form.Group>
        {inputFeild.map((item, i) => (
          <CustomInputFeild key={i} {...item} onChange={handleOnChange} />
        ))}
        <Form.Group>
          <Button variant="success" type="submit">
            {" "}
            Add Payment Method
          </Button>
        </Form.Group>
      </Form>
    </CustomModal>
  );
};
