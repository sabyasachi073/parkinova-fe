import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../components/Form/Form.css";

import { signIn } from "../../services";

function Signin() {
  const token = localStorage.getItem("access_token");
  if (token) {
    window.location.href = "/dashboard";
    return;
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn(email, password);

      if (res.access_token) {
        localStorage.setItem("access_token", res.access_token);
        toast.success("Signin successful!");
          navigate("/dashboard");

      }
    } catch (error) {
      console.log(error);
      let msg = error.response.data.message;
      let toastMsg = msg.charAt(0).toUpperCase() + msg.slice(1) + "!";
      toast.error(toastMsg);
    }
  };

  return (
    <>
      <Header />
      <div style={{ height: "60px" }}></div>
      <div className="signup-container">
        <div className="signup-form">
          <div>
            <div className="header">
              <h1>Welcome Back</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="fields">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="fields">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input className="signup-btn" type="submit" value="SIGNIN" />
            </form>
            <p>
              New to Parkinova? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signin;
