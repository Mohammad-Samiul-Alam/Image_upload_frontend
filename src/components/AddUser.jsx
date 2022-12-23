import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");

  const formdata = new FormData();
  formdata.append("name", name);
  formdata.append("email", email);
  formdata.append("age", age);
  formdata.append("image", image);

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
        const submitData = await axios.post("/users", formdata)
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group className="mb-3">
          <Form.Label>Email Name</Form.Label>
          <Form.Control
            type="name"
            name="name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={age}
            onChange={(e) =>
              setAge(e.target.value)
            }
            placeholder="Age"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddUser;
