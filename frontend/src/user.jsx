import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const User = ({ url, setToken }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const toggleForm = () => setIsLogin(!isLogin);
    
  const formHandle = async (e) => {
    e.preventDefault();
    const endPoint = isLogin ? "/login" : "/register";

    try {
      const res = await axios.post(`${url}/user/${endPoint}`, {
        email,
        password,
      });

      const data = res.data;
      localStorage.setItem("token", data.token);
      setToken(data.token);
      toast.success(data.message);
      navigate("/");
    } catch (err) {
      const errorMessage = err.response?.data?.error || "Something went wrong";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card p-4 shadow"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h3 className="text-center mb-4">{isLogin ? "Login" : "Register"}</h3>

        <form onSubmit={formHandle}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-2">
            {isLogin ? "Login" : "Register"}
          </button>

          <div className="text-center">
            <small>
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <span
                className="text-primary"
                style={{ cursor: "pointer" }}
                onClick={toggleForm}
              >
                {isLogin ? "Register" : "Login"}
              </span>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User;
