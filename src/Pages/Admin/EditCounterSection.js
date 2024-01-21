import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";

const EditCounterSection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState({});
  const [conterTitle, setCounterTitle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/counter-section/${id}`)
      .then((res) => res.json())
      .then((info) => setTitle(info[0]));
  }, [id]);
  useEffect(() => {
    fetch(`http://localhost:5000/counter-section-title/`)
      .then((res) => res.json())
      .then((info) => setCounterTitle(info));
  }, [id]);

  const handleTitle = (event) => {
    event.preventDefault();
    const titleOne = event.target.titleOne.value;
    const numberOne = event.target.numberOne.value;
    const imgOne = event.target.imgOne.value;

    const titleTwo = event.target.titleTwo.value;
    const numberTwo = event.target.numberTwo.value;
    const imgTwo = event.target.imgTwo.value;

    const titleThree = event.target.titleThree.value;
    const numberThree = event.target.numberThree.value;
    const imgThree = event.target.imgThree.value;

    const titleFour = event.target.titleFour.value;
    const numberFour = event.target.numberFour.value;
    const imgFour = event.target.imgFour.value;

    const EditTitle = {
      titleOne,
      numberOne,
      imgOne,
      titleTwo,
      numberTwo,
      imgTwo,
      titleThree,
      numberThree,
      imgThree,
      titleFour,
      numberFour,
      imgFour,
    };

    const url = `http://localhost:5000/edit-counter-section/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(EditTitle),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage/");
      });
  };

  return (
    <>
      <BackToAdminDashboard></BackToAdminDashboard>
      <div class="col-12 mt-5 mb-5">
        <h5 class="card-title text-center">Edit Counter Section</h5>
      </div>
      <div className="container">
        <div class="col-12 mt-5 mb-5">
          {conterTitle.map((e) => (
            <Link to={`/admin/edit-counter-title/${e._id}`} class="main-btn">
              Edit Counter Title
            </Link>
          ))}
        </div>
      </div>
      <form class="form" onSubmit={handleTitle}>
        <div class="container">
          <div class="justify-content-center align-items-baseline">
            <div class="row footer-gradient-bg py-5 rounded-lg mt-3">
              <div class="col-12">
                <h5 class="card-title text-center">Card One</h5>
              </div>
              <div class="col-sm-4">
                <div class="card bg-light rounded-lg">
                  <div class="card-body">
                    <h5 class="card-title">Title Text</h5>
                    <div class="form-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Title Text"
                        name="titleOne"
                        defaultValue={title.titleOne}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card bg-light">
                  <div class="card-body">
                    <h5 class="card-title">Enter Image URL</h5>
                    <div class="form-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Image URL"
                        name="imgOne"
                        defaultValue={title.imgOne}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card bg-light">
                  <div class="card-body">
                    <h5 class="card-title">Enter Counter Number</h5>
                    <div class="form-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Counter Number"
                        name="numberOne"
                        defaultValue={title.numberOne}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row footer-gradient-bg py-5 rounded-lg mt-3">
              <div class="col-12">
                <h5 class="card-title text-center">Card Two</h5>
              </div>
              <div class="col-sm-4">
                <div class="card bg-light rounded-lg">
                  <div class="card-body">
                    <h5 class="card-title">Title Text</h5>
                    <div class="form-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Title Text"
                        name="titleTwo"
                        defaultValue={title.titleTwo}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card bg-light">
                  <div class="card-body">
                    <h5 class="card-title">Enter Image URL</h5>
                    <div class="form-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Image URL"
                        name="imgTwo"
                        defaultValue={title.imgTwo}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card bg-light">
                  <div class="card-body">
                    <h5 class="card-title">Enter Counter Number</h5>
                    <div class="form-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Counter Number"
                        name="numberTwo"
                        defaultValue={title.numberTwo}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row footer-gradient-bg py-5 rounded-lg mt-3">
              <div class="col-12">
                <h5 class="card-title text-center">Card Three</h5>
              </div>
              <div class="col-sm-4">
                <div class="card bg-light rounded-lg">
                  <div class="card-body">
                    <h5 class="card-title">Title Text</h5>
                    <div class="form-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Title Text"
                        name="titleThree"
                        defaultValue={title.titleThree}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card bg-light">
                  <div class="card-body">
                    <h5 class="card-title">Enter Image URL</h5>
                    <div class="form-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Image URL"
                        name="imgThree"
                        defaultValue={title.imgThree}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card bg-light">
                  <div class="card-body">
                    <h5 class="card-title">Enter Counter Number</h5>
                    <div class="form-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Counter Number"
                        name="numberThree"
                        defaultValue={title.numberThree}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row footer-gradient-bg py-5 rounded-lg mt-3">
              <div class="col-12">
                <h5 class="card-title text-center">Card Four</h5>
              </div>
              <div class="col-sm-4">
                <div class="card bg-light rounded-lg">
                  <div class="card-body">
                    <h5 class="card-title">Title Text</h5>
                    <div class="form-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Title Text"
                        name="titleFour"
                        defaultValue={title.titleFour}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card bg-light">
                  <div class="card-body">
                    <h5 class="card-title">Enter Image URL</h5>
                    <div class="form-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Image URL"
                        name="imgFour"
                        defaultValue={title.imgFour}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card bg-light">
                  <div class="card-body">
                    <h5 class="card-title">Enter Counter Number</h5>
                    <div class="form-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Counter Number"
                        name="numberFour"
                        defaultValue={title.numberFour}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm mt-5">
              <button type="submit" class="main-btn">
                <span>Update</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditCounterSection;
