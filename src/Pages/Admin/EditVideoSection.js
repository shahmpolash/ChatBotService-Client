import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";

const EditVideoSection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/video-section/`)
      .then((res) => res.json())
      .then((info) => setVideo(info[0]));
  }, [id]);

  const handleTitle = (event) => {
    event.preventDefault();
    const image = event.target.image.value;
    const youtube = event.target.youtube.value;

    const EditTitle = {
      image,
      youtube,
    };

    const url = `http://localhost:5000/edit-video-section/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(EditTitle),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage/");
      });
  };

  return (
    <>
      <BackToAdminDashboard></BackToAdminDashboard>
      <div class="col-12 mt-5 mb-5">
        <h5 class="card-title text-center">Edit Video Section</h5>
      </div>
      <div className="container"></div>
      <form class="form" onSubmit={handleTitle}>
        <div class="container">
          <div class="justify-content-center align-items-baseline">
            <div class="row footer-gradient-bg py-5 rounded-lg mt-3">
              <div class="col-12">
                <h5 class="card-title text-center">Video Section</h5>
              </div>
              <div class="col-sm-12">
                <div class="card bg-light rounded-lg">
                  <div class="card-body">
                    <h5 class="card-title">Image URL</h5>
                    <div class="form-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Image URL"
                        name="image"
                        defaultValue={video.image}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 mt-5">
                <div class="card bg-light">
                  <div class="card-body">
                    <h5 class="card-title">Enter Youtube URL</h5>
                    <div class="form-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Youtube URL"
                        name="youtube"
                        defaultValue={video.youtube}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm mt-5">
              <button type="submit" class="main-btn">
                <span>Update</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditVideoSection;
