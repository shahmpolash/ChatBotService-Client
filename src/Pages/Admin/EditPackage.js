import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import axios from "axios";
import BackToAdminDashboard from "./BackToAdminDashboard";

const EditPackage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [p, setPackage] = useState([]);
  const [user] = useAuthState(auth);
  const [imgUrl, setImgUrl] = useState(p.img || "");
  const [imageFile, setImageFile] = useState(null);

  const handleImageUpload = async (event) => {
    const formData = new FormData();
    formData.append("image", event.target.files[0]);

    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=10264a0f98f874dc2ba381be1fe2e76d",
        formData
      );
      setImgUrl(response.data.data.url);
    } catch (error) {
      console.error("Image upload failed: ", error);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/package/${id}`)
      .then((res) => res.json())
      .then((info) => setPackage(info));
    setImgUrl(p.img || "");
  }, []);

  let rowNumber = 1;

  const handlePackages = (event) => {
    event.preventDefault();
    const packageName = event.target.packageName.value;
    const price = event.target.price.value;
    
    const PointOne = event.target.PointOne.value;
    const PointTwo = event.target.PointTwo.value;
    const PointThree = event.target.PointThree.value;
    const PointFour = event.target.PointFour.value;
    const PointFive = event.target.PointFive.value;
    

    const edit = {
      packageName,
      price,
      PointOne,
      PointTwo,
      PointThree,
      PointFour,
      PointFive

    };

    const url = `http://localhost:5000/edit-package/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(edit),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/packages/");
      });
  };

  return (
    <div>
      <BackToAdminDashboard></BackToAdminDashboard>

      <div className="box-messages">
        <div className="themesflat-container">
          <div className="row justify-center">
            <div className="col-12">
              <div className="heading-section  fadeInUp style-2 text-center">
                <div className="main-title">Edit Packages</div>
              </div>
            </div>
            <div className="col-12">
              <div className="widget-reply  fadeInUp">
                <form className="comment-form" onSubmit={handlePackages}>
                  <div className="columns  gap20">
                    <fieldset className="name ">
                      <label className="mb-2">Package Name</label>
                      <input
                        type="text"
                        placeholder="Package Name"
                        className="mb-20"
                        name="packageName"
                        defaultValue={p.packageName}
                      />
                    </fieldset>
                    <fieldset className="email">
                      <label className="mb-2">Price</label>
                      <input
                        type="text"
                        id="email"
                        placeholder="price"
                        className="mb-20"
                        name="price"
                        defaultValue={p.price}
                      />
                    </fieldset>

                    <fieldset className="email">
                      <label className="mb-2">Point One</label>
                      <input
                        type="text"
                        id="email"
                        placeholder="Point One"
                        className="mb-20"
                        name="PointOne"
                        defaultValue={p.PointOne}
                      />
                    </fieldset>

                    <fieldset className="email">
                      <label className="mb-2">Point Two</label>
                      <input
                        type="text"
                        id="email"
                        placeholder="Point Two"
                        className="mb-20"
                        name="PointTwo"
                        defaultValue={p.PointTwo}
                      />
                    </fieldset>

                    <fieldset className="email">
                      <label className="mb-2">Point Three</label>
                      <input
                        type="text"
                        id="email"
                        placeholder="Point Three"
                        className="mb-20"
                        name="PointThree"
                        defaultValue={p.PointThree}
                      />
                    </fieldset>
                    <fieldset className="email">
                      <label className="mb-2">Point Four</label>
                      <input
                        type="text"
                        id="email"
                        placeholder="Point Four"
                        className="mb-20"
                        name="PointFour"
                        defaultValue={p.PointFour}
                      />
                    </fieldset>
                    <fieldset className="email">
                      <label className="mb-2">Point Five</label>
                      <input
                        type="text"
                        id="email"
                        placeholder="Point Five"
                        className="mb-20"
                        name="PointFive"
                        defaultValue={p.PointFive}
                      />
                    </fieldset>
                   
                  </div>

                  <div className="text-center">
                    <button className="" type="submit">
                      Update Package
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPackage;
