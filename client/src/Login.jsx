import { useState } from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import Welcome_Back from "./assets/Welcome_Back.png";
import DialogBox from './DialogBox'; // Import your DialogBox component

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State to store error message
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
    .then(result => { 
      console.log(result);
      if (result.data.success) {
          navigate('/home', { state: { name: result.data.name } }); // Pass username to Home component
      } else {
          setErrorMessage(result.data.message); // Set error message if login is unsuccessful
      }
      setIsRegistered(true); // Set the state to true when successfully registered
    })
    .catch(err => console.log(err))
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-150 p-3"
      style={{
        background:
          "linear-gradient(45deg,#000000, #272D38 , #ED176F)" /* Adjust colors as needed */,
      }}
    >
      <div
        className="bg-white p-3 rounded w-25"
        style={{
          background:
            "linear-gradient(135deg,#ff69b4,#77dd77, #272D38  )" /* Adjust colors as needed */,
        }}
      >
      <div className="welcome_image">
            <img src={Welcome_Back} className="Welcome" alt="" />
      </div>
        
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
              type="submit" 
              className={`btn ${isRegistered ? "btn-dark" : "btn-success"} w-100 round-0`}
              style={{
                background:
                  isRegistered ? "linear-gradient(45deg,#000000, #272D38 , #ED176F)" : "linear-gradient(90deg, #ED176F, #F7817F)" /* Adjust colors as needed */,
              }}
            >
            Login  
            </button>
          </form>
          {errorMessage && <DialogBox message={errorMessage} />} {/* Display error message if present */}
          <p>Already Have an Account</p>
          <Link
            to="/register"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Sign Up
          </Link>
        </div>
      </div>
        
    );

}
export default Login;

