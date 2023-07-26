import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import CircularProgress from "@mui/material/CircularProgress";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import Card from "../../components/Card/Card";
import "./Dashboard.css";
import LatestImageCard from "../../components/LatestImageCard/LatestImageCard";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import {
  fetchUserData,
  fetchUserLatestImages,
  fetchUserImages,
} from "../../services";

function Dashboard() {
  const token = localStorage.getItem("access_token");
  if (!token) {
    window.location.href = "/signin";
    return;
  }

  const navigate = useNavigate();
  const [userData, setUserData] = useState({ full_name: "" }); // Contains the current signed in user details
  const [activeButton, setActiveButton] = useState("dashboard");
  const [latestImages, setLatestImages] = useState([]);
  const [otherImages, setOtherImages] = useState([]);
  const [latestImageLoading, setLatestImageLoading] = useState(true);
  const [otherImageloading, setOtherImageLoading] = useState(true);
  const [result, setResult] = useState(0);

  const dashboardRef = useRef(null);
  const latestSubmissionRef = useRef(null);
  const otherSubmissionRef = useRef(null);

  useEffect(() => {
    // FETCHING CURRENT LOGGED IN USER DATA

    // -- Fetching User name
    const handleFetchUserData = async () => {
      try {
        const response = await fetchUserData();
        setUserData(response);
      } catch (error) {
        console.error("Error fetching user data:", error.response);
      }
    };

    handleFetchUserData();

    // -- Fetching User latest images
    const handleFetchUserLatestImages = async () => {
      try {
        const response = await fetchUserLatestImages();

        let sum = 0;
        const images = response.map((imageData) => {
          // Retrieve image data from JSON object
          const { created_at, data, id, result } = imageData;
          // Convert base64 image to a web viewable format
          const image = `data:image/png;base64,${data}`;

          sum += result;

          // Return an object containing image id and web viewable URL
          return {
            id,
            created_at,
            image,
            result,
          };
        });

        setLatestImages((prev) => [...images]);
        setResult((prev) => sum / 3);
        setLatestImageLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error.response);
        setLatestImageLoading(false);
      }
    };

    handleFetchUserLatestImages();

    // -- Fetching User other images
    const handleFetchUserImages = async () => {
      try {
        const response = await fetchUserImages();
        const images = response.map((imageData) => {
          // Retrieve image data from JSON object
          const { created_at, data, id, result } = imageData;
          // Convert base64 image to a web viewable format
          const image = `data:image/png;base64,${data}`;
          // Return an object containing image id and web viewable URL
          return {
            id,
            created_at,
            image,
            result,
          };
        });
        setOtherImages((prev) => [...images]);
        setOtherImageLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error.response);
        setOtherImageLoading(false);
      }
    };

    handleFetchUserImages();

    // SETTING CURRENT ACTIVE BUTTON IN SIDE MENU
    const handleButtonActive = (button) => {
      setActiveButton(button);
    };

    const handleScroll = () => {
      const dashboardSection = dashboardRef.current.offsetTop - 200;

      const latestSubmissionSection =
        latestSubmissionRef.current.offsetTop - 200;
      const otherSubmissionSection = otherSubmissionRef.current.offsetTop - 200;
      const scrollPosition = window.scrollY;
      if (
        scrollPosition >= dashboardSection &&
        scrollPosition < latestSubmissionSection
      ) {
        handleButtonActive("dashboard");
      } else if (
        scrollPosition >= latestSubmissionSection &&
        scrollPosition < otherSubmissionSection
      ) {
        handleButtonActive("latest-submission");
      } else if (scrollPosition >= otherSubmissionSection) {
        handleButtonActive("other-submission");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <div id="content1" style={{ height: "60px" }}></div>

      <div className="dashboard-container">
        <div className="side-content">
          <SideMenu
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            userDetails={userData}
          />
        </div>
        <div className="main-container">
          <div className="main-content">
            <div ref={dashboardRef}>
              <div className="dashboard-welcome dashboard-header">
                <h3>Welcome,</h3>
                <h1 className="welcome-name">
                  {userData.full_name.split(" ")[0]}
                </h1>
              </div>
              <div className="dashboard-result">
                <div className="overallResult">
                  <div className="big-pie">
                    <ProgressBar
                      percentage={(result * 100).toFixed(0)}
                      val={1.5}
                    />
                  </div>
                </div>
                <div className="numberoftest">
                  <p>
                    Total Samples Uploaded: &ensp;
                    <span className="test-number">
                      {otherImages.length + latestImages.length}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                borderTop: "2px solid #000 ",
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 20,
                opacity: 0.05,
                position: "relative",
              }}
            >
              <div
                id="content2"
                style={{ position: "absolute", top: "-60px" }}
              ></div>
            </div>
            <h1 className="dashboard-header">Latest Submissions</h1>
            <div className="latestResultCards">
              <div ref={latestSubmissionRef}>
                {latestImageLoading ? (
                  <div className="loading-message">
                    {" "}
                    <CircularProgress style={{ color: "#0c5c64" }} />
                  </div>
                ) : (
                  <>
                    {latestImages && latestImages.length > 0 ? (
                      <>
                        {latestImages.map((image) => (
                          <LatestImageCard image={image} key={image.id} />
                        ))}
                      </>
                    ) : (
                      <div className="dashboard-noimage">
                        <p>No latest submissions found!</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            <div
              style={{
                borderTop: "2px solid #000 ",
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 20,
                opacity: 0.05,
                position: "relative",
              }}
            >
              <div
                id="content3"
                style={{ position: "absolute", top: "-60px" }}
              ></div>
            </div>
            <div ref={otherSubmissionRef}>
              <h1 className="dashboard-header">Other Submissions</h1>
              {otherImageloading ? (
                <div className="loading-message other-images-loading-message">
                  {" "}
                  <CircularProgress style={{ color: "#0c5c64" }} />
                </div>
              ) : (
                <>
                  {otherImages && otherImages.length > 0 ? (
                    <div className="resultCards">
                      {otherImages.map((image) => (
                        <Card image={image} key={image.id} />
                      ))}
                    </div>
                  ) : (
                    <div className="dashboard-noimage">
                      <p>No images were found!</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="dashboard-footer">
      <Footer />
    </div> */}
    </>
  );
}

export default Dashboard;
