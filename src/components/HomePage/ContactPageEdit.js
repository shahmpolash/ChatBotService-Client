import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackToAdminDashboard from "../../Pages/Admin/BackToAdminDashboard";

const ContactPageEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [contact, setContact] = useState([]);
  const [imgUrl, setImgUrl] = useState(contact.img || "");
  const [imageFile, setImageFile] = useState(null);

  const handleEditContactPage = (event) => {
    event.preventDefault();
    const description = event.target.description.value;
    const titleOne = event.target.titleOne.value;
    const titleTwo = event.target.titleTwo.value;
    const address = event.target.address.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;

    const contact = {
      description,
      titleOne,
      titleTwo,
      address,
      phone,
      email,
    };

    const url = `http://localhost:5000/contact/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting");
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/contact/${id}`)
      .then((res) => res.json())
      .then((info) => {
        setContact(info);
        setImgUrl(info.img || "");
      });
  }, [id]);

  return (
    <div>
      <BackToAdminDashboard></BackToAdminDashboard>
      <form class="form mb-15" onSubmit={handleEditContactPage}>
        <div class="container">
          <div class="justify-content-center align-items-baseline">
            <div class="col-sm">
              <label className="mt-1">Title (1st Part)</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Title"
                  name="titleOne"
                  defaultValue={contact.titleOne}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Title (2nd Part)</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Title"
                  name="titleTwo"
                  defaultValue={contact.titleTwo}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">description</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Title Top Text"
                  name="description"
                  defaultValue={contact.description}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Address</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Your Address"
                  name="address"
                  defaultValue={contact.address}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Phone Number</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Phone Number"
                  name="phone"
                  defaultValue={contact.phone}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Email</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Email"
                  name="email"
                  defaultValue={contact.email}
                />
              </div>
            </div>

            <div class="col-sm">
              <button type="submit" class="main-btn">
                <span>Update Contact</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactPageEdit;
