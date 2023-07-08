import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-primary mb-3">
            <div className="card-header bg-primary text-white text-uppercase text-center">
              <h2>User ID: {user.id}</h2>
            </div>
            <div className="card-body text-center">
              <h4 className="card-title">{user.name}</h4>
              <p className="card-text">
                <b>Username:</b> {user.username}
              </p>
              <p className="card-text">
                <b>Email:</b> {user.email}
              </p>
              <Link className="btn btn-outline-primary btn-block" to={"/"}>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
