import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";

const EditCounterSectionTilte = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/counter-section-title/${id}`)
      .then((res) => res.json())
      .then((info) => setTitle(info[0]));
  }, [id]);

  const handleTitle = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;

    const testimonialTitle = {
      title,
      description,
    };

    const url = `http://localhost:5000/edit-counter-section-title/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(testimonialTitle),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage/");
      });
  };

  return (
    <div
      className="payment-setting"
      data-aos="fade-up"
      data-aos-duration={2000}
    >
      <BackToAdminDashboard></BackToAdminDashboard>
      <form class="form" onSubmit={handleTitle}>
        <div class="container">
          <div class="justify-content-center align-items-baseline">
            <div class="row footer-gradient-bg py-5 rounded-lg mt-3">
              <div class="col-12">
                <h5 class="card-title text-center">
                  Edit Counter Section Tilte
                </h5>
              </div>
              <div class="col-sm-12">
                <div class="card bg-light rounded-lg">
                  <div class="card-body">
                    <h5 class="card-title">Title Text</h5>
                    <div class="form-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Title Text"
                        name="title"
                        defaultValue={title.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 mt-5">
                <div class="card bg-light">
                  <div class="card-body">
                    <h5 class="card-title">Short Description</h5>
                    <div class="form-group mb-3">
                      <textarea
                        type="text"
                        class="form-control"
                        placeholder="Enter Description"
                        name="description"
                        defaultValue={title.description}
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
    </div>
  );
};

export default EditCounterSectionTilte;
