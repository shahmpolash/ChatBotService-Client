import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const { id } = useParams();
  const [contact, setContact] = useState({});
  const [currentDate, setCurrentDate] = useState(getCurrentDate());
  const navigate = useNavigate();

  const notifySuccess = () => {
    toast.success("Message sent successfully!");
  };
  useEffect(() => {
    fetch(`http://localhost:5000/contact/`)
      .then((res) => res.json())
      .then((info) => setContact(info[0]));
  }, [id]);

  const UserContactMessage = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    const subject = event.target.subject.value;
    const date = event.target.date.value;
    const messageStatus = event.target.messageStatus.value;

    const contact = {
      name,
      email,
      message,
      subject,
      date,
      messageStatus,
    };

    const url = `http://localhost:5000/add-contact-message`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((result) => {
        notifySuccess();
        navigate("/message-sent-success");
      });
  };
  // Function to get the current date in yyyy-MM-dd format
  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <>
      <>
        <div className="box-messages">
          <div className="themesflat-container">
            <div className="row justify-center">
              <div className="col-12">
                <div className="heading-section  fadeInUp style-2 text-center">
                  <h6>{contact.titleTopText}</h6>
                  <div className="main-title">
                    {contact.titleOne}
                    <br></br>
                    <span className="animation-text tf-color">
                      {contact.titleTwo}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="widget-reply  fadeInUp">
                  <form className="comment-form" onSubmit={UserContactMessage}>
                    <input
                      type="date"
                      hidden
                      name="date"
                      value={currentDate}
                      onChange={(e) => setCurrentDate(e.target.value)}
                    />
                    <input
                      hidden
                      type="text"
                      name="messageStatus"
                      value="UnRead"
                    />
                    <div className="columns flex justify-between gap20">
                      <fieldset className="name">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="mb-20"
                          name="name"
                          tabIndex={2}
                          defaultValue=""
                          aria-required="true"
                          required=""
                        />
                      </fieldset>
                      <fieldset className="email">
                        <input
                          type="email"
                          id="email"
                          placeholder="Email Address"
                          className="mb-20"
                          name="email"
                          tabIndex={2}
                          defaultValue=""
                          aria-required="true"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="columns flex justify-between gap20 mb-4">
                      <fieldset>
                        <input
                          type="text"
                          placeholder="Subject"
                          className="mb-20"
                          name="subject"
                          required
                        />
                      </fieldset>
                    </div>
                    <fieldset className="message">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Message"
                        className="mb-20"
                        tabIndex={4}
                        aria-required="true"
                        required=""
                        defaultValue={""}
                      />
                    </fieldset>
                    <div className="text-center">
                      <button className="" type="submit">
                        Send Us Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-info pt-60 pb-130">
          <div className="themesflat-container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="wg-helpful style-1  fadeInUp">
                  <div className="image">
                    <div className="icon">
                      <span className="icon-envelope" />
                    </div>
                  </div>
                  <h6>
                    <a>Email Address</a>
                  </h6>
                  <p>{contact.email}</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div
                  className="wg-helpful style-1  fadeInUp"
                  data--delay="0.1s"
                >
                  <div className="image">
                    <div className="icon">
                      <span className="icon-phone" />
                    </div>
                  </div>
                  <h6>
                    <a>Make A Call</a>
                  </h6>
                  <p>{contact.phone}</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div
                  className="wg-helpful style-1  fadeInUp"
                  data--delay="0.2s"
                >
                  <div className="image">
                    <div className="icon">
                      <span className="icon-location" />
                    </div>
                  </div>
                  <h6>
                    <a>Office Locations</a>
                  </h6>
                  <p>{contact.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default ContactPage;
