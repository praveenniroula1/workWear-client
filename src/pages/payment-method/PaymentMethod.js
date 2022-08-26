import React from "react";
import { Button } from "react-bootstrap";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { PaymentMethodTable } from "../../components/payment-method-table/PaymentMethodTable";

export const PaymentMethod = () => {
  return (
    <AdminLayout>
      <h3 className="py-4">Payment Method Management</h3>
      <hr />
      <div className="text-end py-3">
        <Button variant="primary">
          <i class="fa-solid fa-plus"> </i>Add New Payment Method
        </Button>
      </div>
      <PaymentMethodTable />
    </AdminLayout>
  );
};
