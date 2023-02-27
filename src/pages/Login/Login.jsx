import React, { useEffect, useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/common/Loading";

const Login = () => {
  const { user, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    user && navigate("/");
  }, [user,navigate]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  return (
    <div className={"container"}>      
      {loading && <Loading />}
      <form className={"form"} onSubmit={handleSubmit}>
        <div className={"row"}>
          <label htmlFor="username">Useranme</label>
          <input
            id="useranme"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className={"row"}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="error">{error}</div>
        <div className={"row"}>
          <input type="submit" disabled={loading} value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
