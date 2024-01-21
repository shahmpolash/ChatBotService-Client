import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import BackToAdminDashboard from "./BackToAdminDashboard";

const EditBanner = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/banner/`)
      .then((res) => res.json())
      .then((info) => setBanner(info));
  }, [id]);

  const [user] = useAuthState(auth);

  const handleBanner = (event) => {
    event.preventDefault();
    const bannerTitle = event.target.bannerTitle.value;
    const bannerPara = event.target.bannerPara.value;
    const bannerText = event.target.bannerText.value;
    const bannerUrl = event.target.bannerUrl.value;

    const bannerBottomLink = event.target.bannerBottomLink.value;
    const bannerBottomLinkText = event.target.bannerBottomLinkText.value;

    const TitleBoxOne = event.target.TitleBoxOne.value;
    const ParaBoxOne = event.target.ParaBoxOne.value;
    const ImageBoxOne = event.target.ImageBoxOne.value;

    const TitleBoxTwo = event.target.TitleBoxTwo.value;
    const ParaBoxTwo = event.target.ParaBoxTwo.value;
    const ImageBoxTwo = event.target.ImageBoxTwo.value;

    const TitleBoxThree = event.target.TitleBoxThree.value;
    const ParaBoxThree = event.target.ParaBoxThree.value;
    const ImageBoxThree = event.target.ImageBoxThree.value;

    const updateBanner = {
      bannerTitle,
      bannerPara,
      bannerText,
      bannerUrl,
      bannerBottomLink,
      bannerBottomLinkText,
      TitleBoxOne,
      ParaBoxOne,
      ImageBoxOne,
      TitleBoxTwo,
      ParaBoxTwo,
      ImageBoxTwo,
      TitleBoxThree,
      ParaBoxThree,
      ImageBoxThree,
    };

    const url = `http://localhost:5000/edit-banner/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateBanner),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage/");
      });
  };

  return (
    <div>
      <BackToAdminDashboard></BackToAdminDashboard>
      <form class=" mb-15 comment-form" onSubmit={handleBanner}>
        {banner.map((e) => (
          <div class="container">
            <div class="justify-content-center align-items-baseline">
              <div class="col-sm">
                <label className="mt-1">Banner Heading Title</label> <hr></hr>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Banner Heading Title"
                    name="bannerTitle"
                    defaultValue={e.bannerTitle}
                  />
                </div>
              </div>
              <div class="col-sm">
                <label className="mt-1">Enter Banner Paragraph</label> <hr></hr>
                <div class="form-group mb-3">
                  <fieldset>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Banner Paragraph"
                      name="bannerPara"
                      defaultValue={e.bannerPara}
                    />
                  </fieldset>
                </div>
              </div>
              <div class="col-sm">
                <label className="mt-1">Enter Banner Button Text</label>{" "}
                <hr></hr>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Banner Button Text"
                    name="bannerText"
                    defaultValue={e.bannerText}
                  />
                </div>
              </div>
              <div class="col-sm">
                <label className="mt-1">Enter Banner Button URL</label>{" "}
                <hr></hr>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Banner Button URL"
                    name="bannerUrl"
                    defaultValue={e.bannerUrl}
                  />
                </div>
              </div>

              <div className="card-deck mt-5">
                <div className="card">
                  <div className="card-body m-5">
                    <h5 className="card-title">Banner Bottom LinK</h5>
                    <div className="row">
                      <div className="col-6">
                        <label className="mt-1">Banner Bottom LinK</label>{" "}
                        <hr></hr>
                        <input
                          type="text"
                          name="bannerBottomLink"
                          defaultValue={e.bannerBottomLink}
                          className="form-control"
                          placeholder="Banner Bottom LinK"
                        />
                      </div>
                      <div className="col-6">
                        <label className="mt-1">Banner Bottom LinK Text</label>{" "}
                        <hr></hr>
                        <input
                          type="text"
                          name="bannerBottomLinkText"
                          defaultValue={e.bannerBottomLinkText}
                          className="form-control"
                          placeholder="Banner Bottom LinK Text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-deck mt-5">
                <div className="card">
                  <div className="card-body m-5">
                    <h5 className="card-title">Card One</h5>
                    <div className="row">
                      <div className="col-4">
                        <label className="mt-1">Enter Box Banner Title</label>{" "}
                        <hr></hr>
                        <input
                          type="text"
                          name="TitleBoxOne"
                          defaultValue={e.TitleBoxOne}
                          className="form-control"
                          placeholder="Enter Banner Title"
                        />
                      </div>
                      <div className="col-4">
                        <label className="mt-1">
                          Enter Box Banner Paragraph
                        </label>{" "}
                        <hr></hr>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Box Banner Paragraph"
                          name="ParaBoxOne"
                          defaultValue={e.ParaBoxOne}
                        />
                      </div>
                      <div className="col-4">
                        <label className="mt-1">Enter Box Banner Image</label>{" "}
                        <hr></hr>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Box Banner Image"
                          name="ImageBoxOne"
                          defaultValue={e.ImageBoxOne}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-deck mt-5">
                <div className="card">
                  <div className="card-body m-5">
                    <h5 className="card-title">Card Two</h5>
                    <div className="row">
                      <div className="col-4">
                        <label className="mt-1">Enter Box Banner Title</label>{" "}
                        <hr></hr>
                        <input
                          type="text"
                          name="TitleBoxTwo"
                          defaultValue={e.TitleBoxTwo}
                          className="form-control"
                          placeholder="Enter Banner Title"
                        />
                      </div>
                      <div className="col-4">
                        <label className="mt-1">
                          Enter Box Banner Paragraph
                        </label>{" "}
                        <hr></hr>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Box Banner Paragraph"
                          name="ParaBoxTwo"
                          defaultValue={e.ParaBoxTwo}
                        />
                      </div>
                      <div className="col-4">
                        <label className="mt-1">Enter Box Banner Image</label>{" "}
                        <hr></hr>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Box Banner Image"
                          name="ImageBoxTwo"
                          defaultValue={e.ImageBoxTwo}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-deck mt-5">
                <div className="card">
                  <div className="card-body m-5">
                    <h5 className="card-title">Card Three</h5>
                    <div className="row">
                      <div className="col-4">
                        <label className="mt-1">Enter Box Banner Title</label>{" "}
                        <hr></hr>
                        <input
                          type="text"
                          name="TitleBoxThree"
                          defaultValue={e.TitleBoxThree}
                          className="form-control"
                          placeholder="Enter Banner Title"
                        />
                      </div>
                      <div className="col-4">
                        <label className="mt-1">
                          Enter Box Banner Paragraph
                        </label>{" "}
                        <hr></hr>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Box Banner Paragraph"
                          name="ParaBoxThree"
                          defaultValue={e.ParaBoxThree}
                        />
                      </div>
                      <div className="col-4">
                        <label className="mt-1">Enter Box Banner Image</label>{" "}
                        <hr></hr>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Box Banner Image"
                          name="ImageBoxThree"
                          defaultValue={e.ImageBoxThree}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm mt-5">
                <button type="submit" class="main-btn arrow-btn">
                  <span>Update Bannner</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default EditBanner;
