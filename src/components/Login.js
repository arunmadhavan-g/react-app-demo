import React from "react";
import "../styles/Login.css";
import axios from "axios";

const callBackend = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    alert(res.data.title);
};

const Login = () => (
  <div>
    <h1>Login</h1>
    <div className="inputFieldContainer">
      <div className="inputFieldLabel">User Name</div>
      <div className="inputFieldComponent">
        <input type="text" />
      </div>
    </div>
    <div className="inputFieldContainer">
      <div className="inputFieldLabel">Password</div>
      <div className="inputFieldComponent">
        <input type="password" />
      </div>
    </div>
    <div className="inputFieldContainer">
      <div className="inputFieldComponent">
          <button onClick={callBackend}>Login</button>
      </div>
    </div>
  </div>
);

export default Login;
