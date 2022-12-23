import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";

const User = () => {
    const [users, setUsers] = useState("");

    useEffect(() => {
      const getAllUsers = async() => {
        const getAllData = await axios.get("/users");
        setUsers(getAllData.data);
        console.log(getAllData)
      }
      getAllUsers();
    }, [])
    
  return (
    <>
      <Container className="mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Pic</th>
            </tr>
          </thead>
          <tbody>
            {
                users && users.map((user)=> {
                    return (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td><img className="img img-fluid" width="50" src={`${axios.defaults.baseURL}/${user.image}`} alt="" /></td>
                        </tr>
                    )
                })
            }
            
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default User;
