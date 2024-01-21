import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackToAdminDashboard from "./BackToAdminDashboard";

const EditFeature = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [feature, setFeature] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/feature/${id}`)
      .then((res) => res.json())
      .then((info) => setFeature(info));
  }, [id]);

  const handleFeature = async (event) => {
    event.preventDefault();

    const featureDesc = event.target.featureDesc.value;
    const featureTitle = event.target.featureTitle.value;
    const featureImg = event.target.featureImg.value;

    const updatedFeature = {
      featureImg,
      featureDesc,
      featureTitle,
    };

    const url = `http://localhost:5000/feature/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedFeature),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting");
      });
  };

  return (
    <div>
      <BackToAdminDashboard></BackToAdminDashboard>
      <form className="form mb-15" onSubmit={handleFeature}>
        <div className="container">
          <div className="justify-content-center align-items-baseline">
            <h4 className="sub-heading">
              <span>Edit Features</span>
            </h4>

            <div className="col-sm">
              <label className="mt-1">Enter Feature Title</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Feature Title"
                  name="featureTitle"
                  defaultValue={feature.featureTitle}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Enter Feature Short Description</label>
              <div className="form-group mb-3">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Enter Feature Short Description"
                  name="featureDesc"
                  defaultValue={feature.featureDesc}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Feature Image URL</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="featureImg"
                  className="form-control"
                  placeholder="Feature Image URL"
                  defaultValue={feature.featureImg}
                />
              </div>
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Images"
                  style={{ maxWidth: "100px" }}
                />
              )}
              {!imageFile && !imagePreview && feature.featureImg && (
                <img
                  src={feature.featureImg}
                  alt="Stored Images"
                  style={{ maxWidth: "100px" }}
                />
              )}
              {!imageFile && !imagePreview && !feature.featureImg && (
                <img
                  src="default-image-url-here"
                  alt="Default Image"
                  style={{ maxWidth: "100px" }}
                />
              )}
            </div>
            <div className="col-sm mt-10">
              <button type="submit" className="tf-button get-start h45">
                <span>Update Feature</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditFeature;
