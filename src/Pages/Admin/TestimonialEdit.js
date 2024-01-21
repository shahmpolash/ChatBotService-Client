import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const TestimonialEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [testimonial, setTestimonial] = useState([]);
  const [user] = useAuthState(auth);

  const [imageFile, setImageFile] = useState(null); // To store the selected image file
  const [imagePreview, setImagePreview] = useState(""); // To display a preview of the uploaded or existing image

  useEffect(() => {
    fetch(`http://localhost:5000/testimonial/${id}`)
      .then((res) => res.json())
      .then((info) => setTestimonial(info));
  }, [id]);

  useEffect(() => {
    if (testimonial.personImg) {
      setImagePreview(testimonial.personImg);
    }
  }, [testimonial.personImg]);

  const handleTestimonial = (event) => {
    event.preventDefault();
    const personName = event.target.personName.value;
    const personTitle = event.target.personTitle.value;
    const desc = event.target.desc.value;
    const personImg = event.target.personImg.value;

    const testimonialData = {
      personName,
      personTitle,
      personImg,
      desc,
    };

    const url = `http://localhost:5000/testimonial/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(testimonialData),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage");
      });
  };

  return (
    <div
      className="payment-setting"
      data-aos="fade-up"
      data-aos-duration={2000}
    >
      <form className="form" onSubmit={handleTestimonial}>
        <div className="container">
          <div className="justify-content-center align-items-baseline">
            <div className="col-sm">
              <label className="mt-1">Enter Person Name</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Person Name"
                  name="personName"
                  defaultValue={testimonial.personName}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Enter Person Title</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Person Title"
                  name="personTitle"
                  defaultValue={testimonial.personTitle}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Upload Person Image</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="personImg"
                  placeholder="person Img URL"
                  defaultValue={testimonial.personImg}
                />
                {imageFile && (
                  <img
                    src={URL.createObjectURL(imageFile)}
                    alt="Preview"
                    style={{ maxWidth: "100px" }}
                  />
                )}
                {imagePreview && !imageFile && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{ maxWidth: "100px" }}
                  />
                )}
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Testimonial Description</label>
              <div className="form-group mb-3">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Type Testimonial Description"
                  name="desc"
                  defaultValue={testimonial.desc}
                />
              </div>
            </div>

            <div className="col-sm">
              <button type="submit" className="tf-button get-start h45">
                <span>Update Testimonial</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TestimonialEdit;
