import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

const TestimonialTitle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonial-title/${id}`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, [id]);

  const handleTitle = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;

    const testimonialTitle = {
      title,
      description,
    };

    const url = `http://localhost:5000/testimonial-title/${id}`;
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
      <form class="form" onSubmit={handleTitle}>
        <div class="container">
          <div class="justify-content-center align-items-baseline">
            <div class="col-sm">
              <label className="mt-1">Title Text</label>
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

            <div class="col-sm">
              <label className="mt-1">Enter description</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter description"
                  name="description"
                  defaultValue={title.description}
                />
              </div>
            </div>

            <div class="col-sm">
              <button type="submit" class="main-btn">
                <span>Update Title</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TestimonialTitle;
