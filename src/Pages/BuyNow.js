import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useNavigate } from "react-router-dom";

const BuyNow = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState("");

  const handleChatbotNewOrder = (event) => {
    event.preventDefault();
    const Price = event.target.Price.value;
    const orderStatus = event.target.orderStatus.value;
    const paymentStatus = event.target.paymentStatus.value;
    const customerName = event.target.customerName.value;
    const customerEmail = event.target.customerEmail.value;
    const customerWebsite = event.target.customerWebsite.value;
    const aboutBusiness = event.target.aboutBusiness.value;
    const packageName = event.target.packageName.value;
    const orderDate = event.target.orderDate.value;

    const contact = {
      Price,
      orderStatus,
      paymentStatus,
      customerName,
      customerEmail,
      customerWebsite,
      aboutBusiness,
      packageName,
      orderDate
    };

    const url = `http://localhost:5000/chatbot-new-order`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/pay-now");
      });
  };

  const [packages, setPackages] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/packages`)
      .then((res) => res.json())
      .then((info) => setPackages(info[0]));
  }, []);

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    setCurrentDate(`${year}-${month}-${day}`);
  };

  // Fetch current date on component mount
  useEffect(() => {
    getCurrentDate();
  }, []);

  return (
    <>
      <div className="mt-70 mb-70">
        <div className="themesflat-container">
          <div className="row justify-center">
            <div className="col-12">
              <div className="heading-section  fadeInUp style-2 text-center">
                <div className="main-title">Pay Now</div>
              </div>
            </div>
            <div className="col-12">
              <div className="widget-reply  fadeInUp">
                <form className="comment-form" onSubmit={handleChatbotNewOrder}>
                  <label className="mb-2">Price</label>
                  <input
                    readOnly
                    disabled
                    type="number"
                    className="mb-20"
                    value={packages.price}
                    name="Price"
                  />
                  <input
                    type="date"
                    hidden
                    className="mb-20"
                    name="orderDate"
                    value={currentDate}
                   
                  />
                  <label className="mb-2">Package Name</label>
                  <input
                    readOnly
                    disabled
                    type="text"
                    className="mb-20"
                    value={packages.packageName}
                    name="packageName"
                  />
                  <input
                    hidden
                    type="text"
                    className="mb-20"
                    value="Pending"
                    name="orderStatus"
                  />
                  <input
                    hidden
                    type="text"
                    placeholder="Full Name"
                    className="mb-20"
                    value="UnPaid"
                    name="paymentStatus"
                  />
                  <div className="columns  gap20">
                    <fieldset className="name ">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="mb-20"
                        name="customerName"
                      />
                    </fieldset>
                    <fieldset className="email">
                      <input
                        disabled
                        type="email"
                        id="email"
                        placeholder="Email Address"
                        className="mb-20"
                        name="customerEmail"
                        value={user?.email}
                      />
                    </fieldset>
                  </div>
                  <div className="columns ">
                    <fieldset className="website">
                      <input
                        type="text"
                        placeholder="Your Website"
                        className="mb-20"
                        name="customerWebsite"
                      />
                    </fieldset>
                  </div>
                  <fieldset className="message">
                    <textarea
                      name="aboutBusiness"
                      rows={4}
                      placeholder="About Your Business"
                      className="mb-20"
                    />
                  </fieldset>
                  <div className="text-center">
                    <button className="" type="submit">
                      Pay Now
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

export default BuyNow;
