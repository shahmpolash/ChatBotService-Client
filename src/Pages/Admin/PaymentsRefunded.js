import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import OrderMenu from "./OrderMenu";

const PaymentsRefunded = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services-list/`)
      .then((res) => res.json())
      .then((info) => setServices(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/chatbot-new-orders`)
      .then((res) => res.json())
      .then((info) => setOrders(info.reverse()));
  }, []);

  // Filter orders with paymentStatus === "Refunded"
  const pendingOrders = orders.filter(
    (order) => order.paymentStatus === "Refunded"
  );

  const paginatedOrders = pendingOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(pendingOrders.length / itemsPerPage);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <OrderMenu></OrderMenu>
      <div className="hight-full">
        <h4 className="text-center">Total Refunded Payments</h4>

        <div className="ml-3 mr-3">
          <div className="table-responsive">
            <table className="rwd-table">
              <tbody>
                <tr>
                  <th>SL No.</th>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Service</th>
                  <th>Package</th>
                  <th>Price</th>
                  <th>Website</th>
                  <th>Email</th>
                  <th>Note</th>
                  <th>Payment Status</th>
                  <th>Edit</th>
                </tr>
                {paginatedOrders.map((item, index) => (
                  <tr key={item._id}>
                    <td data-th="SL No.">
                      {index + 1 + (currentPage - 1) * itemsPerPage}
                    </td>
                    <td data-th="Date">{item.orderDate}</td>
                    <td data-th="Name">{item.customerName}</td>

                    <td data-th="Service">
                      {services.map(
                        (service) =>
                          service._id === item.serviceID && (
                            <Link to={`/service/${service.postSlug}`}>
                              {service.title}
                            </Link>
                          )
                      )}
                    </td>
                    <td data-th="Package">{item.packageName}</td>
                    <td data-th="Price">${item.packagePrice}</td>
                    <td data-th="Website">{item.customerWebsite}</td>
                    <td data-th="Email">{item.customerEmail}</td>
                    <td data-th="Note">{item.customerNote}</td>
                    <td data-th="Payment Status">{item.paymentStatus}</td>

                    <td data-th="Edit">
                      <Link to={`/admin/order/${item._id}`}>Action</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <nav aria-label="Page navigation">
              <ul className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => changePage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentsRefunded;
