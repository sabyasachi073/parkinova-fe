import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Faq() {
  return (
    <>
      <Header />
      <div style={{ height: "60px" }}></div>

      <div className="about-section">
        <h1>Frequently Asked Questions(FAQs)</h1>
        <div className="about-section-content">
          <p>
            <div className="privacy-header">What is Parkinova?</div> Parkinova
            is a website dedicated to the detection of Parkinson's disease using
            machine learning algorithms. We analyze handwritten samples provided
            by users to assess the likelihood of Parkinson's disease presence.
          </p>
          <p>
            <div className="privacy-header">How does Parkinova work?</div>
            Parkinova utilizes advanced machine learning techniques to analyze
            handwritten samples and extract relevant features. These features
            are then processed and compared against a trained model to determine
            the probability of Parkinson's disease. The website guides users
            through the process of submitting their handwritten samples and
            provides results based on the analysis.
          </p>
          <p>
            <div className="privacy-header">
              What kind of handwritten samples should I provide?
            </div>{" "}
            To assess the likelihood of Parkinson's disease, you can provide
            handwritten samples of simple tasks such as writing a sentence,
            drawing shapes, or copying a given text. The website will guide you
            through the process and explain the required steps for sample
            submission.
          </p>
          <p>
            <div className="privacy-header">
              Is Parkinova's analysis accurate?
            </div>{" "}
            While Parkinova employs advanced machine learning algorithms, it is
            important to note that our platform provides an initial assessment
            and should not be considered a definitive diagnosis. The accuracy of
            the analysis may vary, and we strongly recommend consulting with a
            medical professional for a comprehensive evaluation.
          </p>
          <p>
            <div className="privacy-header">
              Is my personal information secure?
            </div>{" "}
            At Parkinova, we prioritize the security and confidentiality of your
            personal information. We implement strict measures to protect your
            data against unauthorized access, disclosure, alteration, or
            destruction. We do not share your personal information with third
            parties without your consent, except as required by law.
          </p>
          <p>
            <div className="privacy-header">
              Can Parkinova replace a visit to the doctor?
            </div>
            No, Parkinova is not intended to replace professional medical advice
            or diagnosis. Our platform provides an initial assessment based on
            machine learning analysis. We encourage users to consult with
            medical professionals for a thorough evaluation and appropriate
            medical guidance.
          </p>
          <p>
            <div className="privacy-header">
              How long does it take to receive results?
            </div>{" "}
            The time taken to receive results may vary depending on various
            factors, including the volume of sample submissions. Typically, you
            can expect to receive results within a reasonable timeframe. We
            strive to provide timely and accurate results to our users.
          </p>
          <p>
            <div className="privacy-header">
              Can I contribute my samples to help improve Parkinova's accuracy?
            </div>{" "}
            Yes, we greatly value data contributions from users to enhance the
            accuracy of our machine learning models. With your consent, you may
            have the option to contribute your de-identified handwritten samples
            for research purposes. We ensure that all data used for research is
            anonymized and treated with the highest level of privacy and
            security.
          </p>
          <p>
            <div className="privacy-header">
              How can I contact Parkinova for further assistance?
            </div>{" "}
            If you have any questions, concerns, or need further assistance, you
            can reach out to our support team at [email protected] We are here
            to help and provide the necessary guidance.
          </p>
          <p>
            Please remember that Parkinova's analysis is not a substitute for
            professional medical advice. Always consult with a qualified
            healthcare provider for an accurate diagnosis and appropriate
            treatment.
          </p>
        </div>
      </div>
      <div className="about-footer">
        <Footer />
      </div>
    </>
  );
}

export default Faq;
