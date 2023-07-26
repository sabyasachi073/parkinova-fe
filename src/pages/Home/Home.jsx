import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />
      <div style={{ height: "60px" }}></div>
      <section className="landing-showcase">
        <div className="landing-showcase-container">
          <h1>Parkinova: Revolutionizing Parkinson's Detection</h1>
          <p>Empowering early detection with Machine Learning</p>
          <Link to="/signup">
            <div id="first" className="buttonBox">
              <button>Get Started</button>
              <div className="border"></div>
              <div className="border"></div>
            </div>
          </Link>
        </div>
      </section>
      <section className="landing-about">
        <div className="landing-about-container">
          <div className="landing-about-container-content">
            <p>
              Parkinova is a revolutionary platform utilizing machine learning
              algorithms to detect Parkinson's disease through handwritten
              samples. Our mission is to enable early detection and improve the
              lives of individuals affected by this condition. With a
              user-friendly interface and cutting-edge technology, Parkinova
              provides accurate results and comprehensive reports for both
              patients and healthcare professionals. Join us in transforming the
              way Parkinson's disease is detected and managed, and make a
              positive impact on the lives of millions worldwide.
            </p>
          </div>
          <div className="landing-about-container-content-image">
            <img
              src="https://media.istockphoto.com/id/1218464621/photo/parkinson-disease-patient-alzheimer-elderly-senior-arthritis-person-hand-in-support-of.jpg?s=612x612&w=0&k=20&c=9Qr5qB0cKI6Blj_FYZIdbsYOsgWiaWxlV3_qA3Uq83I="
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="landing-signup-section">
        <h3>
          Don't wait until it's too late. Find out if you're at risk for
          Parkinson's disease.
        </h3>
        <Link to="/signup">
          <div id="second" className="buttonBox">
            <button>Signup Now</button>
          </div>
        </Link>
      </section>
      <div className="home-footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
