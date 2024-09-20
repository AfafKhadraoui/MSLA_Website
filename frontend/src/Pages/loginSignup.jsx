import React, { useState } from "react";
import axios from "axios";
import CONFIG from "../config.json";
import "./CSS/loginSignup.css";
import signupPhoto from "../components/Assets/images/login.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CSS/CustomTooast.css";

const LoginSignup = () => {
  const [state, setState] = useState("Log In");
  const isSignup = state === "Sign Up";
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    passwrd: "",
    error: null,
  });

  const CustomCloseButton = ({ closeToast }) => (
    <button
      onClick={(e) => {
        e.stopPropagation();
        closeToast();
      }}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        width: "1px",
      }}
    >
      <i
        className="fa fa-times"
        style={{ color: "transparent", fontSize: "16px" }}
      ></i>
    </button>
  );

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Signup function
  const signup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${CONFIG.api_server}/api/user/addUser`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.success) {
        setFormData({ user: response.data.users, error: null });
        localStorage.setItem("auth-token", response.data.token);
        toast.success("Account Created Successfully");
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message);
    }
  };

  // Login function
  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${CONFIG.api_server}/api/user/login`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.success) {
        localStorage.setItem("auth-token", response.data.token);
        toast.success("Logged in Successfully!");
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "An error occurred");
    }
  };

  const handleSubmit = (e) => {
    if (isSignup) {
      signup(e);
    } else {
      login(e);
    }
  };

  return (
    <div className="LoginSignup-container">
      <h1>{state}</h1>
      <div className="loginSignup">
        <div className="imgContainer">
          <img src={signupPhoto} alt="Signup" />
        </div>
        <div className="loginSignup-fields">
          <form
            onSubmit={handleSubmit}
            className="loginSignup-fields-items"
            method="post"
          >
            <div className="loginSignup-fields-Text">
              {isSignup ? <h2>Create New Account</h2> : <h2>User Login</h2>}
              <p>Please enter your details</p>
            </div>

            {isSignup && (
              <>
                <div className="field">
                  <label htmlFor="fname">First Name *</label>
                  <input
                    type="text"
                    id="fname"
                    name="first_name"
                    required
                    placeholder="Enter your first name"
                    onChange={onChangeHandler}
                  />
                </div>

                <div className="field">
                  <label htmlFor="lname">Last Name *</label>
                  <input
                    type="text"
                    id="lname"
                    name="last_name"
                    required
                    placeholder="Enter your last name"
                    onChange={onChangeHandler}
                  />
                </div>
              </>
            )}

            <div className="field">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email address"
                onChange={onChangeHandler}
              />
            </div>

            <div className="field">
              <label htmlFor="passwd">Password *</label>
              <input
                type="password"
                id="passwd"
                name="passwrd"
                required
                placeholder="Enter your password"
                onChange={onChangeHandler}
              />
            </div>

            {isSignup ? (
              <p>
                Already have an account?{" "}
                <span onClick={() => setState("Log In")}>Log in</span>
              </p>
            ) : (
              <p>
                Create an account?{" "}
                <span onClick={() => setState("Sign Up")}>Click here</span>
              </p>
            )}

            <div className="field-checkbox">
              <input type="checkbox" id="check" required />
              <label htmlFor="check">
                I agree to the <a href="/">Terms & Conditions</a>
              </label>
            </div>

            <button className="field-checkbox-button" type="submit">
              {isSignup ? "Signup" : "Login"}
            </button>

            <ToastContainer
              autoClose={2000}
              hideProgressBar={false}
              closeButton={<CustomCloseButton />}
              newestOnTop={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
