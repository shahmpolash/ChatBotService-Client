import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "../../Pages/Admin/BackToAdminDashboard";

const SpecialityOptionEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [about, setAbout] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [storedImage, setStoredImage] = useState("");

  const handleEditAbout = async (event) => {
    event.preventDefault();
    const imgOne = event.target.imgOne.value;
    const imgTwo = event.target.imgTwo.value;
    const titleTop = event.target.titleTop.value;
    const title = event.target.title.value;
    const subText = event.target.subText.value;
    const btnText = event.target.btnText.value;
    const btnUrl = event.target.btnUrl.value;
    const pointOne = event.target.pointOne.value;
    const pointTwo = event.target.pointTwo.value;
    const pointThree = event.target.pointThree.value;

    const updateAbout = {
      imgOne,
      imgTwo,
      titleTop,
      title,
      subText,
      btnText,
      btnUrl,
      pointOne,
      pointTwo,
      pointThree,
    };

    const url = `http://localhost:5000/edit-about/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateAbout),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage");
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/about/${id}`)
      .then((res) => res.json())
      .then((info) => {
        const storedImg = info[0].img;
        setAbout(info);
        setStoredImage(storedImg);
      });
  }, [id]);

  return (
    <div
      className="payment-setting"
      data-aos="fade-up"
      data-aos-duration={2000}
    >
      <BackToAdminDashboard></BackToAdminDashboard>
      <form onSubmit={handleEditAbout}>
        {about.map((e) => (
          <div class="container">
            <div class="justify-content-center align-items-baseline">
              <div class="col-sm">
                <label className="mt-1">Banner Image URL One</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    name="imgOne"
                    class="form-control"
                    placeholder="Enter The About Image URL"
                    defaultValue={e.imgOne}
                  />
                </div>
              </div>

              <div class="col-sm">
                <label className="mt-1">Banner Image URL Two</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    name="imgTwo"
                    class="form-control"
                    placeholder="Enter The About Image URL"
                    defaultValue={e.imgTwo}
                  />
                </div>
              </div>
              <div class="col-sm">
                <label className="mt-1">Banner Title Top Text</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Banner Title Top Text"
                    name="titleTop"
                    defaultValue={e.titleTop}
                  />
                </div>
              </div>

              <div class="col-sm">
                <label className="mt-1">Banner Title</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Banner Title"
                    name="title"
                    defaultValue={e.title}
                  />
                </div>
              </div>

              <div class="col-sm">
                <label className="mt-1">Banner About Text</label>
                <div class="form-group mb-3">
                  <textarea
                    type="text"
                    class="form-control"
                    placeholder="Your Sub Text"
                    name="subText"
                    defaultValue={e.subText}
                    style={{ fontSize: "16px" }}
                  />
                </div>
              </div>

              <div class="col-sm">
                <label className="mt-1">Banner Button Text</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Button Text"
                    name="btnText"
                    defaultValue={e.btnText}
                  />
                </div>
              </div>
              <div class="col-sm">
                <label className="mt-1">Banner Button URL</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Button URL"
                    name="btnUrl"
                    defaultValue={e.btnUrl}
                  />
                </div>
              </div>

              <div className="card-deck mt-5 mb-5">
                <div className="card">
                  <div className="card-body m-5">
                    <h5 className="card-title">About Points</h5>
                    <div className="row">
                      <div className="col-4">
                        <label className="mt-1">Point One</label> <hr></hr>
                        <input
                          type="text"
                          name="pointOne"
                          defaultValue={e.pointOne}
                          className="form-control"
                          placeholder="Point One"
                        />
                      </div>
                      <div className="col-4">
                        <label className="mt-1">Point Two</label> <hr></hr>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=" Point Two"
                          name="pointTwo"
                          defaultValue={e.pointTwo}
                        />
                      </div>
                      <div className="col-4">
                        <label className="mt-1">Point Three</label> <hr></hr>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Box Banner Image"
                          name="pointThree"
                          defaultValue={e.pointThree}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm mb-50">
                <button type="submit" className="tf-button get-start h45">
                  <span>Update About</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default SpecialityOptionEdit;
