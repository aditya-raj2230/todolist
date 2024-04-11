'use client'
import { useState } from "react";



const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here, e.g., sending data to a server
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn" type="submit">Login</button>
      </form>
     
      <style jsx>{`
        .login-container {
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          background-color: #333333;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        h2 {
          text-align: center;
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        .form-control {
          width: 100%;
          padding: 10px;
          border: 1px solid #ffffff;
          border-radius: 4px;
          box-sizing: border-box;
          background-color: #444444;
          color: #ffffff;
        }

        .btn {
          width: 100%;
          padding: 10px;
          background-color: #007bff;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .btn:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Loginpage;
