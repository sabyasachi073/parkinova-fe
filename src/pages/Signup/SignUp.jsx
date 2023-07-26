import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { signUp } from "../../services";
import "../../components/Form/Form.css";

function Signup() {
  const token = localStorage.getItem("access_token");
  if (token) {
    window.location.href = "/dashboard";
    return;
  }

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signUp(fullName, email, password);

      if (response.status === 200) {
        toast.success("Signup successful");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
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
              <h1>Create an Account</h1>
              <p>Get started for free!</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="fields delete">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  placeholder="First and Last name"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                />
              </div>
              <div className="fields">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="fields">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <input className="signup-btn" type="submit" value="SIGN UP" />
            </form>
            <p>
              Already have an account? <Link to="/signin">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
