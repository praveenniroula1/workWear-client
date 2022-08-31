import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { AddPaymentMethod } from "../../components/payment-method-form/AddPaymentMethod";
import { PaymentMethodTable } from "../../components/payment-method-table/PaymentMethodTable";
import { setModalShow } from "../system-state/SystemSlice";

export const PaymentMethod = () => {
  const dispatch = useDispatch();
  const handleOnAddPM = () => {
    dispatch(setModalShow());
  };
  return (
    <AdminLayout>
      <h3 className="py-4">Payment Method Management</h3>
      <hr />
      <AddPaymentMethod />
      <div className="text-end py-3">
        <Button variant="primary" onClick={handleOnAddPM}>
          <i class="fa-solid fa-plus"> </i>Add New Payment Method
        </Button>
      </div>
      <PaymentMethodTable />
    </AdminLayout>
  );
};
