import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "../../Pages/Admin/BackToAdminDashboard";

const EditHowToTilte = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState({ title: "", titleTop: "" });

  const handleEditTitle = async (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const titleTop = event.target.titleTop.value;
    const image = event.target.image.value;

    const updateAbout = {
      title,
      titleTop,
      image,
    };

    const url = `http://localhost:5000/edit-help-section-title/${id}`;
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
    fetch(`http://localhost:5000/help-sections-title/${id}`)
      .then((res) => res.json())
      .then((info) => {
        console.log("Fetched Data:", info); // Check the structure of 'info'
        setTitle(info[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <div
      className="payment-setting"
      data-aos="fade-up"
      data-aos-duration={2000}
    >
      <BackToAdminDashboard></BackToAdminDashboard>
      <div className="mt-5 mb-70">
        <div className="themesflat-container">
          <div className="row justify-center">
            <div className="col-12">
              <div className="heading-section  fadeInUp style-2 text-center">
                <div className="main-title">Edit How to Title</div>
              </div>
            </div>
            <div className="col-12">
              <div className="widget-reply  fadeInUp">
                <form className="comment-form" onSubmit={handleEditTitle}>
                  <div className="columns  gap20">
                    <fieldset className="name ">
                      <label className="mb-2">Title Top Text</label>
                      <input
                        type="text"
                        className="mb-20"
                        name="titleTop"
                        tabIndex={2}
                        defaultValue={title.titleTop}
                        aria-required="true"
                      />
                    </fieldset>
                    <fieldset className="email">
                      <label className="mb-2">Title Text</label>
                      <input
                        type="text"
                        className="mb-20"
                        name="title"
                        defaultValue={title.title}
                        aria-required="true"
                        required=""
                      />
                    </fieldset>
                    <fieldset className="email">
                      <label className="mb-2">Image</label>
                      <input
                        type="text"
                        className="mb-20"
                        name="image"
                        defaultValue={title.image}
                        aria-required="true"
                        required=""
                      />
                    </fieldset>
                  </div>

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
    </div>
  );
};

export default EditHowToTilte;
