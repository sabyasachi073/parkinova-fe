import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
function Services() {
  return (
    <>
      <Header />
      <div style={{ height: "60px" }}></div>

      <div className="about-section">
        <h1>Services</h1>
        <div className="about-section-content">
          <p>
            Welcome to Parkinova! We are dedicated to providing cutting-edge
            services for the detection of Parkinson's disease from handwritten
            samples. Our advanced machine learning algorithms, coupled with the
            power of Flask and React technologies, allow us to offer accurate
            and efficient diagnosis capabilities.
          </p>
          <p>
            <div className="privacy-header">Handwritten Sample Analysis</div>We
            utilize state-of-the-art machine learning models to analyze
            handwritten samples and detect potential signs of Parkinson's
            disease. Our algorithms can assess various handwriting
            characteristics, such as tremors, slowness, and micrographia, to
            provide insightful results.
          </p>
          <p>
            <div className="privacy-header">Access to Results</div>Once the
            analysis is complete, you can conveniently access the results
            directly from the Dashboard. Our intuitive presentation format
            ensures that you can interpret and understand the findings
            effortlessly.
          </p>
          <p>
            <div className="privacy-header">Sample History</div>The Dashboard
            keeps a record of all your past sample submissions, creating a
            comprehensive history of your analyses. This feature allows you to
            review your results over time and track any potential changes or
            trends.
          </p>
          <p>
            <div className="privacy-header">Aggregate Analysis</div>Our advanced
            algorithms analyze all the submissions you have made and identify
            patterns and markers associated with Parkinson's disease. This
            comprehensive analysis takes into account all the relevant data you
            have provided.
          </p>
          <p>
            <div className="privacy-header">User-Friendly Interface</div>Our
            platform offers a user-friendly interface that allows you to
            conveniently upload your handwritten samples for analysis. The
            intuitive design ensures a seamless experience, guiding you through
            the process and presenting the results in a clear and understandable
            format.
          </p>
          <p>
            <div className="privacy-header">Confidentiality and Privacy</div>We
            prioritize the privacy and security of our users' data. Rest assured
            that all information provided for analysis is treated with the
            utmost confidentiality, and strict measures are in place to
            safeguard your personal information.
          </p>
          <p>
            <div className="privacy-header">Continual Improvement</div>We are
            committed to ongoing research and development to enhance the
            accuracy and efficiency of our detection models. As advancements in
            machine learning and data analysis emerge, we strive to incorporate
            the latest techniques and methodologies into our services.
          </p>

          <p>
            At Parkinova, our goal is to empower individuals and healthcare
            professionals with an accessible and reliable tool for early
            Parkinson's disease detection. Join us in our mission to make a
            positive impact on the lives of those affected by this condition.
          </p>
        </div>
      </div>
      <div className="about-footer">
        <Footer />
      </div>
    </>
  );
}

export default Services;
