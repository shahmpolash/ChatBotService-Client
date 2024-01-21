import React from "react";
import { useNavigate } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";

const AddWhyChooseOption = () => {
  const navigate = useNavigate();

  const handleAdd = (event) => {
    event.preventDefault();
    const image = event.target.image.value;
    const title = event.target.title.value;
    const description = event.target.description.value;

    const add = {
      image,
      title,
      description,
    };

    const url = `http://localhost:5000/add-why`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(add),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/why-select-us/");
      });
  };
  return (
    <>
      <BackToAdminDashboard></BackToAdminDashboard>
      <div className="box-messages">
        <div className="themesflat-container">
          <div className="row justify-center">
            <div className="col-12">
              <div className="heading-section  fadeInUp style-2 text-center">
                <div className="main-title">Add Option</div>
              </div>
            </div>
            <div className="col-12">
              <div className="widget-reply  fadeInUp">
                <form className="comment-form" onSubmit={handleAdd}>
                  <div className="columns  gap20">
                    <fieldset className="name ">
                      <input
                        type="text"
                        placeholder="Enter Image URL"
                        className="mb-20"
                        name="image"
                        tabIndex={2}
                        defaultValue=""
                        aria-required="true"
                        required=""
                      />
                    </fieldset>
                    <fieldset className="Enter Title">
                      <input
                        type="text"
                        placeholder="Enter Title"
                        className="mb-20"
                        name="title"
                        tabIndex={2}
                        defaultValue=""
                        aria-required="true"
                        required=""
                      />
                    </fieldset>
                  </div>

                  <fieldset className="Enter Short Description">
                    <textarea
                      id="message"
                      name="description"
                      rows={4}
                      placeholder="Description"
                      className="mb-20"
                      tabIndex={4}
                      aria-required="true"
                      required=""
                      defaultValue={""}
                    />
                  </fieldset>
                  <div className="text-center">
                    <button className="" type="submit">
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddWhyChooseOption;
