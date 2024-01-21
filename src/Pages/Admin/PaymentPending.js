import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import OrderMenu from "./OrderMenu";

const PaymentPending = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const paginationDigits = 3;
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

  // Filter orders with paymentStatus === "Pending"
  const pendingPayment = orders.filter(
    (order) => order.paymentStatus === "Pending"
  );

  // Pagination function
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const totalPendingPayment = pendingPayment.length;

  const totalPages = Math.ceil(totalPendingPayment / itemsPerPage);

  // Calculate the range of pagination digits
  const startDigit = Math.max(
    1,
    currentPage - Math.floor(paginationDigits / 2)
  );
  const endDigit = Math.min(startDigit + paginationDigits - 1, totalPages);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pendingPayment.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <OrderMenu></OrderMenu>
      <div className="hight-full">
        <h4 className="text-center">Total Pending Payments</h4>

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
                {currentItems.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                    <td>{item.orderDate}</td>
                    <td>{item.customerName}</td>

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
                    <td>{item.packageName}</td>
                    <td>${item.packagePrice}</td>
                    <td>{item.customerWebsite}</td>
                    <td>{item.customerEmail}</td>
                    <td>{item.customerNote}</td>
                    <td>{item.paymentStatus}</td>

                    <td>
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
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  {currentPage > 1 && (
                    <button
                      className="page-link"
                      onClick={() => paginate(currentPage - 1)}
                      tabIndex={currentPage === 1 ? -1 : undefined}
                    >
                      {"<"}
                    </button>
                  )}
                </li>
                {Array.from(
                  { length: endDigit - startDigit + 1 },
                  (_, index) => (
                    <li
                      key={startDigit + index}
                      className={`page-item ${
                        currentPage === startDigit + index ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => paginate(startDigit + index)}
                      >
                        {startDigit + index}
                      </button>
                    </li>
                  )
                )}
                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  {currentPage < totalPages && (
                    <button
                      className="page-link"
                      onClick={() => paginate(currentPage + 1)}
                      tabIndex={currentPage === totalPages ? -1 : undefined}
                    >
                      {">"}
                    </button>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPending;
