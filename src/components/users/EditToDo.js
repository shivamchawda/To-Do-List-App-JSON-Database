import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    website: ""
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container py-4">
    <Link className="btn btn-primary" to="/">
      back to Home
    </Link>
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Task</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter The Date"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your New To Do"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="time"
              className="form-control form-control-lg"
              placeholder="Enter The Time Of Completion"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update Task</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default EditUser;
