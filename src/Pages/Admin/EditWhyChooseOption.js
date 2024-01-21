import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";

const EditWhyChooseOption = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [option, setOption] = useState({});

  const handleEdit = (event) => {
    event.preventDefault();
    const image = event.target.image.value;
    const title = event.target.title.value;
    const description = event.target.description.value;

    const add = {
      image,
      title,
      description,
    };

    const url = `http://localhost:5000/edit-why-choose/${id}`;
    fetch(url, {
      method: "PUT",
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
  useEffect(() => {
    fetch(`http://localhost:5000/why-choose/${id}`)
      .then((res) => res.json())
      .then((info) => {
        console.log(info); // Check the structure of info
        setOption(info);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

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
                <form className="comment-form" onSubmit={handleEdit}>
                  <div className="columns  gap20">
                    <fieldset className="name ">
                      <input
                        type="text"
                        placeholder="Enter Image URL"
                        className="mb-20"
                        name="image"
                        defaultValue={option.image}
                      />
                    </fieldset>
                    <fieldset className="Enter Title">
                      <input
                        type="text"
                        placeholder="Enter Title"
                        className="mb-20"
                        name="title"
                        defaultValue={option.title}
                      />
                    </fieldset>
                  </div>

                  <fieldset className="Enter Short Description">
                    <textarea
                      id="message"
                      name="description"
                      rows={4}
                      className="mb-20"
                      tabIndex={4}
                      defaultValue={option.description}
                    />
                  </fieldset>
                  <div className="text-center">
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
    </>
  );
};

export default EditWhyChooseOption;
