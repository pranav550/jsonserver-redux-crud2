import React, { useState, useEffect } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeleteApiAction, GetApiAction } from "../redux/Action/action";

function Home() {
  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.reducer.details);
  console.log(responseData);
  const isDeleteResponse = useSelector(
    (state) => state.reducer.isDeleteResponse
  );
  useEffect(() => {
    getDetails();
  }, [dispatch]);

  const getDetails = () => {
    dispatch(GetApiAction());
  };

  const deleteDetails = (id) => {
    console.log(id);
    dispatch(DeleteApiAction(id));
  };

  if (isDeleteResponse) {
    getDetails();
  }

  const result = responseData
    ? responseData.map((data) => {
        return (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>
              <Link to={`/editDetails/${data.id}`}>
                <Button variant="warning">Edit</Button>
              </Link>{" "}
              <Button variant="danger" onClick={() => deleteDetails(data.id)}>
                Delete
              </Button>
            </td>
          </tr>
        );
      })
    : null;

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </Table>
    </Container>
  );
}

export default Home;
