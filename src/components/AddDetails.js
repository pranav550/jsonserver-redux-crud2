import React, { useState, useEffect } from "react";
import "../App";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { PostApiAction } from "../redux/Action/action";
import { useNavigate } from "react-router-dom";

function AddDetails() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const isResponse = useSelector((state) => state.reducer.isResponse);
  console.log(isResponse);
  let navigate = useNavigate();

  const AddHandler = (e) => {
    e.preventDefault();
    const Obj = {
      name: name,
      email: email,
    };
    console.log(Obj);
    dispatch(PostApiAction(Obj));
  };

  if (isResponse) {
    navigate("/");
  }

  return (
    <div>
      <h3 className="App">Add Details</h3>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => AddHandler(e)}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AddDetails;
