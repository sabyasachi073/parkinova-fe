import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div style={{ height: "60px" }}></div>

      <div className="about-section">
        <h1>Privacy Policy</h1>
        <div className="about-section-content">
          <p>
            At Parkinova, we are committed to protecting your privacy and
            ensuring the confidentiality of any personal information that you
            provide to us. This Privacy Policy outlines how we collect, use,
            disclose, and protect your personal information when you visit our
            website and use our services.
          </p>
          <p>
            <div className="privacy-header">Information Collection and Use</div>{" "}
            We may collect certain personal information from you, including but
            not limited to your name, email address, and demographic
            information, when you interact with our website or use our services.
            We use this information solely for the purpose of providing and
            improving our services, as well as for communicating with you
            regarding updates, news, and other relevant information.
          </p>
          <p>
            <div className="privacy-header">Data Security</div> We take the
            security of your personal information seriously and implement
            appropriate measures to protect it against unauthorized access,
            disclosure, alteration, or destruction. However, please be aware
            that no method of transmission over the internet or electronic
            storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          <p>
            <div className="privacy-header">
              Cookies and Tracking Technologies
            </div>{" "}
            We may use cookies and similar tracking technologies to enhance your
            browsing experience on our website. These technologies collect
            information about your usage patterns, such as the pages you visit
            and the links you click, and may store that information on your
            computer or device. You can manage your cookie preferences through
            your browser settings.
          </p>
          <p>
            <div className="privacy-header">Third-Party Services</div> We may
            use third-party services and analytics tools that collect, monitor,
            and analyze information to improve our services and user experience.
            These third-party services have their own privacy policies and terms
            of use, and we encourage you to review them.
          </p>
          <p>
            <div className="privacy-header">Data Sharing</div> We do not sell,
            trade, or otherwise transfer your personal information to third
            parties without your consent, except as required by law or as
            necessary to provide our services. We may share aggregated,
            non-personally identifiable information with third parties for
            research, marketing, or other purposes.
          </p>
          <p>
            <div className="privacy-header">Data Retention</div> We retain your
            personal information for as long as necessary to fulfill the
            purposes outlined in this Privacy Policy, unless a longer retention
            period is required or permitted by law.
          </p>
          <p>
            <div className="privacy-header">Changes to the Privacy Policy</div>{" "}
            We reserve the right to modify or update this Privacy Policy from
            time to time. Any changes will be effective immediately upon posting
            on this page. We encourage you to review this Privacy Policy
            periodically for any updates.
          </p>
          <p>
            <div className="privacy-header">Contact Us</div> If you have any
            questions or concerns regarding this Privacy Policy or our data
            practices, please contact us at [email protected]
          </p>
          <p>
            By using the Parkinova website and services, you acknowledge that
            you have read, understood, and agreed to the terms and conditions of
            this Privacy Policy.
          </p>
        </div>
      </div>
      <div className="about-footer">
        <Footer />
      </div>
    </>
  );
}

export default PrivacyPolicy;
