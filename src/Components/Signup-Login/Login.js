import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies, Cookies } from "react-cookie";
import axios from "axios";
import "./Login.css";


export default function Login() {
  const [loginDetails, setLoginDetails] = useState({});
  const [dataSent, setDataSent] = useState(false);
  const [cookies, setCookie] = useCookies([]);
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginDetails({
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    });
    setDataSent(true);
  };

  useEffect(() => {
    const cookies = new Cookies();
    console.log("Token in login => " + cookies.get("jwt"));

    const userLogin = () => {
      axios({
        method: "post",
        url:  "https://real-estate-backend-2uzv.onrender.com/signin" ,
        data: loginDetails,
      })
        .then((response) => {
          let token = response.data.authToken;
          console.log(token);
          setCookie("jwt", token, {
            path: "/",
            expires: new Date(Date.now() + 900000),
          });

          navigate("/property");
        })
        .catch((err) => {
          console.log(err);
            window.alert("User doesn't exists!");
        });
    };

    if (dataSent) {
      userLogin();
      setDataSent(false);
    }

  }, [loginDetails, dataSent, navigate, cookies, setCookie]);

  return (
    <>
      <div className="L-container">
        <div className="L-formDiv">
          <h1>Realestate</h1>
          <p>Enter your credentials to access your account</p>
          <form action="/signin" method="POST" onSubmit={handleLogin}>
            <input
              id="L-userid"
              type="email"
              required={true}
              name="email"
              placeholder="USER Email"
            />
            <input
              id="L-password"
              name="password"
              required={true}
              type="password"
              placeholder="PASSWORD"
            />
            <button type="submit" id="L-signin">
              Sign In
            </button>
          </form>
          <Link className="L-signup" to="/signup">
            Signup
          </Link>
        </div>

        <h3 id="L-afterForm">
          Don't have an account?{" "}
          <Link className="signup" to="/signup">
            Signup
          </Link>
        </h3>
      </div>
    </>
  );
}
