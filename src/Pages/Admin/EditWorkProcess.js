import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";

const EditWorkProcess = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [road, SetSpeciality] = useState([]);

  const handleEdit = (event) => {
    event.preventDefault();
    const titleTop = event.target.titleTop.value;
    const title = event.target.title.value;
    const cardTitleOne = event.target.cardTitleOne.value;
    const descriptionOne = event.target.descriptionOne.value;
    const cardTitleTwo = event.target.cardTitleTwo.value;
    const descriptionTwo = event.target.descriptionOne.value;
    const cardTitleThree = event.target.cardTitleThree.value;
    const descriptionThree = event.target.descriptionThree.value;
    const cardTitleFour = event.target.cardTitleFour.value;
    const descriptionFour = event.target.descriptionFour.value;

    const updateWork = {
      titleTop,
      title,
      cardTitleOne,
      descriptionOne,
      cardTitleTwo,
      descriptionTwo,
      cardTitleThree,
      descriptionThree,
      cardTitleFour,
      descriptionFour,
    };

    const url = `http://localhost:5000/edit-road/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateWork),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage");
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/road/${id}`)
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
                <div className="main-title">Edit Working Process</div>
              </div>
            </div>
            <div className="col-12">
              <div className="widget-reply  fadeInUp">
                <form className="comment-form" onSubmit={handleEdit}>
                  <div className="columns  gap20">
                    <fieldset className="name ">
                      <label className="mb-2">Title Top Text</label>
                      <input
                        type="text"
                        placeholder="Title Top Text"
                        className="mb-20"
                        name="titleTop"
                        defaultValue={road.titleTop}
                      />
                    </fieldset>
                    <fieldset className="email">
                      <label className="mb-2">Title Text</label>
                      <input
                        type="text"
                        placeholder="Enter Title"
                        className="mb-20"
                        name="title"
                        defaultValue={road.title}
                      />
                    </fieldset>
                  </div>

                  <div className="card-deck mt-5">
                    <div className="card">
                      <div className="card-body m-5">
                        <h5 className="card-title">Card One</h5>
                        <div className="row">
                          <div className="col-12">
                            <div className="columns ">
                              <fieldset className="email">
                                <label className="mb-2">Title Text</label>
                                <input
                                  type="text"
                                  placeholder="Enter Title"
                                  className="mb-20"
                                  name="cardTitleOne"
                                  defaultValue={road.cardTitleOne}
                                />
                              </fieldset>
                              <fieldset className="website">
                                <label className="mb-2">
                                  Enter Description
                                </label>
                                <textarea
                                  name="descriptionOne"
                                  rows={4}
                                  placeholder="Enter Description"
                                  className="mb-20"
                                  defaultValue={road.descriptionOne}
                                />
                              </fieldset>
                            </div>
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
                          <div className="col-12">
                            <div className="columns ">
                              <fieldset className="email">
                                <label className="mb-2">Title Text</label>
                                <input
                                  type="text"
                                  placeholder="Enter Title"
                                  className="mb-20"
                                  name="cardTitleTwo"
                                  defaultValue={road.cardTitleTwo}
                                />
                              </fieldset>
                              <fieldset className="website">
                                <label className="mb-2">
                                  Enter Description
                                </label>
                                <textarea
                                  name="descriptionTwo"
                                  rows={4}
                                  placeholder="Enter Description"
                                  className="mb-20"
                                  defaultValue={road.descriptionTwo}
                                />
                              </fieldset>
                            </div>
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
                          <div className="col-12">
                            <div className="columns ">
                              <fieldset className="email">
                                <label className="mb-2">Title Text</label>
                                <input
                                  type="text"
                                  placeholder="Enter Title"
                                  className="mb-20"
                                  name="cardTitleThree"
                                  defaultValue={road.cardTitleThree}
                                />
                              </fieldset>
                              <fieldset className="website">
                                <label className="mb-2">
                                  Enter Description
                                </label>
                                <textarea
                                  name="descriptionThree"
                                  rows={4}
                                  placeholder="Enter Description"
                                  className="mb-20"
                                  defaultValue={road.descriptionThree}
                                />
                              </fieldset>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-deck mt-5">
                    <div className="card">
                      <div className="card-body m-5">
                        <h5 className="card-title">Card Four</h5>
                        <div className="row">
                          <div className="col-12">
                            <div className="columns ">
                              <fieldset className="email">
                                <label className="mb-2">Title Text</label>
                                <input
                                  type="text"
                                  placeholder="Enter Title"
                                  className="mb-20"
                                  name="cardTitleFour"
                                  defaultValue={road.cardTitleFour}
                                />
                              </fieldset>
                              <fieldset className="website">
                                <label className="mb-2">
                                  Enter Description
                                </label>
                                <textarea
                                  name="descriptionFour"
                                  rows={4}
                                  placeholder="Enter Description"
                                  className="mb-20"
                                  defaultValue={road.descriptionFour}
                                />
                              </fieldset>
                            </div>
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

export default EditWorkProcess;
