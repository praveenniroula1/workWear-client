import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategoryAction,
  getCategoryAction,
} from "../../pages/categories/CategoryAction";
import { Table, Row, Button } from "react-bootstrap";
import { AdminLayout } from "../layout/AdminLayout";
import { EditCatForm } from "../cat-Form/EditCatForm";
import { setModalShow } from "../../pages/system-state/SystemSlice";

export const CategoryTable = () => {
  const dispatch = useDispatch();
  const [selectedCat, setselectedCat] = useState({});

  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryAction());
  }, []);
  const handleOnEdit = (cat) => {
    setselectedCat(cat);
    dispatch(setModalShow());
  };
  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure youu want to delete?")) {
      dispatch(deleteCategoryAction(_id));
    }
  };
  const parentCats = categories.filter(({ parentId }) => !parentId);
  const childCats = categories.filter(({ parentId }) => parentId);
  console.log(parentCats, childCats);
  return (
    <Row>
      <EditCatForm selectedCat={selectedCat} />
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
                  <td
                    className={
                      item.status === "active" ? "text-success" : "text-danger"
                    }
                  >
                    {item.status}
                  </td>
                  <td>{item.name}</td>
                  <td>{item.parentId ? "children" : "Parent"}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleOnDelete(item._id)}
                    >
                      Delete
                    </Button>{" "}
                    <Button
                      variant="primary"
                      onClick={() => handleOnEdit(item)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
                {childCats.map(
                  (cat) =>
                    cat.parentId === item._id && (
                      <tr className="" key={cat._id}>
                        <td
                          className={
                            cat.status === "active"
                              ? "text-success"
                              : "text-danger"
                          }
                        >
                          {cat.status}
                        </td>
                        <td>{cat.name}</td>
                        <td>{cat.parentId ? "children" : "Parent"}</td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => handleOnDelete(cat._id)}
                          >
                            Delete
                          </Button>{" "}
                          <Button
                            variant="primary"
                            onClick={() => handleOnEdit(cat)}
                          >
                            Edit
                          </Button>
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
