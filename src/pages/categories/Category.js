import React from "react";
import { AddCatForm } from "../../components/cat-Form/AddCatForm";
import { CategoryTable } from "../../components/category-table/CategoryTable";
import { AdminLayout } from "../../components/layout/AdminLayout";

const Category = () => {
  return (
    <AdminLayout>
      {" "}
      <h2>Categories Management</h2>
      {/* Form */}
      <AddCatForm />
      {/* table */}
      <CategoryTable />
    </AdminLayout>
  );
};

export default Category;
