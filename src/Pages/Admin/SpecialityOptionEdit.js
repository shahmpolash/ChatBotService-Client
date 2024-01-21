import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";

const SpecialityOptionEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [speciality, SetSpeciality] = useState([]);

  const handleEditSpeciality = (event) => {
    event.preventDefault();
    const titleTop = event.target.titleTop.value;
    const title = event.target.title.value;
    const description = event.target.description.value;
    const imageOne = event.target.imageOne.value;
    const imageTwo = event.target.imageTwo.value;
    const itemOne = event.target.itemOne.value;
    const itemTwo = event.target.itemTwo.value;
    const itemThree = event.target.itemThree.value;
    const itemFour = event.target.itemFour.value;

    const updateSpeciality = {
      titleTop,
      title,
      description,
      imageOne,
      imageTwo,
      itemOne,
      itemTwo,
      itemThree,
      itemFour,
    };

    const url = `http://localhost:5000/edit-speciality/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateSpeciality),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage");
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/speciality/${id}`)
      .then((res) => res.json())
      .then((info) => SetSpeciality(info));
  }, [id]);

  return (
    <div>
      <BackToAdminDashboard></BackToAdminDashboard>

      <div className="mt-5 mb-5">
        <div className="themesflat-container">
          <div className="row justify-center">
            <div className="col-12">
              <div className="heading-section  fadeInUp style-2 text-center">
                <div className="main-title">Edit</div>
              </div>
            </div>
            <div className="col-12">
              <div className="widget-reply  fadeInUp">
                <form className="comment-form" onSubmit={handleEditSpeciality}>
                  <div className="columns  gap20">
                    <fieldset className="name ">
                      <label className="mb-2">Title Top Text</label>
                      <input
                        type="text"
                        placeholder="Title Top Text"
                        className="mb-20"
                        name="titleTop"
                        defaultValue={speciality.titleTop}
                      />
                    </fieldset>
                    <fieldset className="email">
                      <label className="mb-2">Title Text</label>
                      <input
                        type="text"
                        placeholder="Enter Title"
                        className="mb-20"
                        name="title"
                        defaultValue={speciality.title}
                      />
                    </fieldset>
                  </div>
                  <div className="columns ">
                    <fieldset className="website">
                      <label className="mb-2">Enter Description</label>
                      <textarea
                        name="description"
                        rows={4}
                        placeholder="Enter Description"
                        className="mb-20"
                        defaultValue={speciality.description}
                      />
                    </fieldset>
                  </div>
                  <fieldset className="email">
                    <label className="mb-2">Image One URL</label>
                    <input
                      type="text"
                      placeholder="Enter URL"
                      className="mb-20"
                      name="imageOne"
                      defaultValue={speciality.imageOne}
                    />
                  </fieldset>

                  <fieldset className="email">
                    <label className="mb-2">Image Two URL</label>
                    <input
                      type="text"
                      placeholder="Enter URL"
                      className="mb-20"
                      name="imageTwo"
                      defaultValue={speciality.imageTwo}
                    />
                  </fieldset>

                  <div className="card-deck mt-5">
                    <div className="card">
                      <div className="card-body m-5">
                        <h5 className="card-title">Enter List Item</h5>
                        <div className="row">
                          <div className="col-12 col-md-6 col-lg-3">
                            <label className="mt-1">Item One</label> <hr></hr>
                            <input
                              type="text"
                              name="itemOne"
                              defaultValue={speciality.itemOne}
                              className="form-control"
                              placeholder=" Item One"
                            />
                          </div>
                          <div className="col-12 col-md-6 col-lg-3">
                            <label className="mt-1">Item Two</label> <hr></hr>
                            <input
                              type="text"
                              name="itemTwo"
                              defaultValue={speciality.itemTwo}
                              className="form-control"
                              placeholder="Item Two"
                            />
                          </div>
                          <div className="col-12 col-md-6 col-lg-3">
                            <label className="mt-1">Item Three</label> <hr></hr>
                            <input
                              type="text"
                              name="itemThree"
                              defaultValue={speciality.itemThree}
                              className="form-control"
                              placeholder=" Item Three"
                            />
                          </div>
                          <div className="col-12 col-md-6 col-lg-3">
                            <label className="mt-1">Item Four</label> <hr></hr>
                            <input
                              type="text"
                              name="itemFour"
                              defaultValue={speciality.itemFour}
                              className="form-control"
                              placeholder="Item Four"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-40">
                    <button className="" type="submit">
                      Update
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

export default SpecialityOptionEdit;
