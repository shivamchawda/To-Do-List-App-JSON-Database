import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    date: "",
    todo: "",
    time: "",  
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A To Do</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter the date"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your To Do"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="time"
              className="form-control form-control-lg"
              placeholder="Enter the time to complete"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Task</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AddUser;
