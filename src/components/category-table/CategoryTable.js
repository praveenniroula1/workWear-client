import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAction } from "../../pages/categories/CategoryAction";
import { Table, Row, Button } from "react-bootstrap";
import { AdminLayout } from "../layout/AdminLayout";

export const CategoryTable = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryAction());
  }, []);
  const parentCats = categories.filter(({ parentId }) => !parentId);
  const childCats = categories.filter(({ parentId }) => parentId);
  console.log(parentCats, childCats);
  return (
    <Row>
      <Table striped hover bordered>
        <thead>
          <tr>
            <th>Status</th>
            <th>Name</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {parentCats.length > 0 &&
            parentCats.map((item, index) => (
              <>
                <tr key={item._id} className="bg-warning">
                  <td>{item.status}</td>
                  <td>{item.name}</td>
                  <td>{item.parentId ? "children" : "Parent"}</td>
                  <td>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
                {childCats.map(
                  (cat) =>
                    cat.parentId === item._id && (
                      <tr className="bg-secondary" key={cat._id}>
                        <td>{cat.status}</td>
                        <td>{cat.name}</td>
                        <td>{cat.parentId ? "children" : "Parent"}</td>
                        <td>
                          <Button variant="danger">Delete</Button>
                        </td>
                      </tr>
                    )
                )}
              </>
            ))}
        </tbody>
      </Table>
    </Row>
  );
};
