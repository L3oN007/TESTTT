import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthContext";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { isLogin, login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://65e9efbec9bf92ae3d3aac67.mockapi.io/login/login/1', { email, password });

      if (response.data.email && response.data.password && response.data.id) {
        localStorage.setItem('userRole', response.data.role);
        login();
        navigate("/staff");
      } else {
        setError('Đăng nhập thất bại. Vui lòng kiểm tra thông tin đăng nhập.');
      }
    } catch (error) {
      setError('Đăng nhập thất bại. Vui lòng kiểm tra thông tin đăng nhập.');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Fetch existing user data
      const { data: existingUsers } = await axios.get('https://65e9efbec9bf92ae3d3aac67.mockapi.io/login/login');

      // Check if the email already exists
      const emailExists = existingUsers.some(user => user.email === email);

      if (emailExists) {
        alert('Email đã được dùng, vui lòng đổi email khác.');
        return;
      }

      // If email is not duplicate, proceed with registration
      const response = await axios.post('https://65e9efbec9bf92ae3d3aac67.mockapi.io/login/login', { username, email, password });

      if (response.data.username && response.data.email && response.data.password) {
        alert('Đăng ký thành công!, vui lòng đăng nhập lại');
        navigate("/Đăng_nhập");
      } else {
        setError('Đăng ký thất bại. Vui lòng kiểm tra thông tin đăng ký.');
      }
    } catch (error) {
      setError('Đăng ký thất bại. Vui lòng kiểm tra thông tin đăng ký.');
    }
  };

  return (
    <div className="LoginContainer">
      <div className="Loginmain">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={handleSignup}>
            <label htmlFor="chk" aria-hidden="true">
              Đăng kí
            </label>
            <input
              type="text"
              name="username"
              placeholder="User name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required=""
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required=""
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required=""
            />
            <button className="Hoverbutton" type="submit">
              Đăng kí
            </button>
          </form>
        </div>

        <div className="login">
          <form onSubmit={handleLogin}>
            <label htmlFor="chk" aria-hidden="true">
              Đăng nhập
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required=""
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required=""
            />
            <button className="Hoverbutton" type="submit">
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
