import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileUploader } from "react-drag-drop-files";
import { toast } from "react-toastify";

import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import "react-toastify/dist/ReactToastify.css";
import "./Upload.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { uploadImg } from "../../services";

function Upload() {
  const token = localStorage.getItem("access_token");
  if (!token) {
    window.location.href = "/signin";
    return;
  }

  const fileTypes = ["jpg", "png"];
  const [file, setFile] = useState([]);
  const [numFiles, setNumFiles] = useState(0);

  const navigate = useNavigate();

  const handleChange = (_file) => {
    setNumFiles(numFiles + _file.length);
    setFile((prev) => [...prev, ...Array.from(_file)]);
  };

  const handleDelete = (index) => {
    const newFiles = [...file];
    newFiles.splice(index, 1);
    setNumFiles(numFiles - 1);
    setFile(newFiles);
  };

  async function handleUpload() {
    if (numFiles < 3) {
      toast.error("Minimum 3 files should be uploaded.");
    } else {
      const formData = new FormData();
      file.forEach((image) => {
        formData.append("image", image);
      });
      try {
        const result = await uploadImg(formData);
        toast.success("Images uploaded successfully!");
        setFile((prev) => []);
        setNumFiles((prev) => 0);
      } catch (error) {
        console.log(error);
      }
    }
  }

  // useEffect(() => {
  //   console.log(file, numFiles);
  // }, [file]);

  return (
    <>
      <Header />
      <div style={{ height: "60px" }}></div>
      <div className="upload-container">
        <div className="sub-container">
          <div className="heading">
            <h1>Upload your images</h1>
            <p>
              PNG, JPG files are only allowed. Please upload minimum 3 files.
            </p>
          </div>

          <div className="imageUploader">
            <FileUploader
              handleChange={handleChange}
              name="file"
              types={fileTypes}
              multiple={true}
              maxSize={10485760}
            />

            <div style={{ width: "100%" }}>
              {Array.from(file).map((file_item, index) => (
                <div className="card" key={index}>
                  <div className="cardImage">
                    <img src={URL.createObjectURL(file_item)} alt="" />
                  </div>
                  <div className="cardDetails">
                    <div className="imageName">{file_item.name}</div>
                    <div className="imageSize">
                      {(file_item.size / 1024).toFixed(2)} KB
                    </div>
                  </div>
                  <div className="cardStatus">
                    <i
                      className="fa-solid fa-xmark"
                      onClick={() => handleDelete(index)}
                    ></i>
                    <i className="fa-solid loader hideLoder"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="upload-button-container">
          <Button
            variant="outlined"
            startIcon={<CloudUploadIcon />}
            onClick={handleUpload}
          >
            Upload
          </Button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Upload;
