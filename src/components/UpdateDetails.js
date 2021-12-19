import React, { useState, useEffect } from "react";
import "../App";
import { Form, Button, Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetApiAction, UpdateApiAction } from "../redux/Action/action";
import getDetailByHooks from "../hooks/getDetailByHooks";
function UpdateDetails() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  let navigate = useNavigate();

  console.log(id);

  const [detailsById] = getDetailByHooks(id);
  console.log(detailsById);

  const isUpdateResponse = useSelector(
    (state) => state.reducer.isUpdateResponse
  );
  console.log(isUpdateResponse);

  useEffect(() => {
    const data = () => {
      if (detailsById) {
        setName(detailsById.name);
        setEmail(detailsById.email);
      }
    };
    data();
  }, [detailsById]);

  const UpdateHandler = (e) => {
    e.preventDefault();
    const Obj = {
      name,
      email,
    };
    console.log(Obj);
    dispatch(UpdateApiAction(Obj, id));
  };

  if (isUpdateResponse) {
    navigate("/");
  }

  return (
    <div>
      <h3 className="App">Update Details</h3>
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
            onClick={(e) => UpdateHandler(e)}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default UpdateDetails;
