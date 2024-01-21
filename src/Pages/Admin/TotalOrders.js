import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import OrderMenu from "./OrderMenu";

const TotalOrders = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const paginationDigits = 3;
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/chatbot-new-orders`)
      .then((res) => res.json())
      .then((info) => setOrders(info.reverse()));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/services-list/`)
      .then((res) => res.json())
      .then((info) => setServices(info));
  }, []);

  // Filter the orders with paymentStatus === "Received"
  const receivedOrders = orders.filter(
    (order) => order.paymentStatus === "Received"
  );

  // Calculate the total spend
  const totalSpend = receivedOrders.reduce(
    (total, order) => total + parseFloat(order.packagePrice),
    0
  );

  // Pagination function
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(orders.length / itemsPerPage);

  // Calculate the range of pagination digits
  const startDigit = Math.max(
    1,
    currentPage - Math.floor(paginationDigits / 2)
  );
  const endDigit = Math.min(startDigit + paginationDigits - 1, totalPages);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="project s2">
        <div className="">
          <h4 className="text-center">Total Sales $({totalSpend})usd</h4>
          <OrderMenu></OrderMenu>
          <h4 className="text-center">Total Orders</h4>
        </div>
        <div className="ml-5 mr-5">
          <div className="table-responsive">
            <table className="rwd-table">
              <tbody>
                <tr>
                  <th>SL No.</th>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Price</th>

                  <th>Payment</th>
                  <th>Order</th>
                  <th>Edit</th>
                </tr>
                {currentItems.map((item, index) => (
                  <tr key={item._id}>
                    <td data-th="SL No.">
                      {index + 1 + (currentPage - 1) * itemsPerPage}
                    </td>
                    <td data-th="Date">{item.orderDate}</td>
                    <td data-th="Name">{item.customerName}</td>
                    <td data-th="Email">{item.customerEmail}</td>
                    <td data-th="Price">${item.packagePrice}</td>

                    <td data-th="Payment">{item.paymentStatus}</td>
                    <td data-th="Order">{item.orderStatus}</td>{" "}
                    <td data-th="Edit">
                      <Link to={`/admin/order/${item._id}`}>Action</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="container">
              <div className="row justify-content-center">
                <div className="pagination pagination__margin">
                  <ul className="pagination">
                    <li className="page-item">
                      {currentPage > 1 && (
                        <Link
                          className="page-link"
                          onClick={() => paginate(currentPage - 1)}
                        >
                          {"<"}
                        </Link>
                      )}
                    </li>
                    {Array.from(
                      { length: endDigit - startDigit + 1 },
                      (_, index) => (
                        <li key={startDigit + index} className="page-item">
                          <Link
                            className={`page-link ${currentPage === startDigit + index ? "active" : ""
                              }`}
                            onClick={() => paginate(startDigit + index)}
                          >
                            {startDigit + index}
                          </Link>
                        </li>
                      )
                    )}
                    <li className="page-item">
                      {currentPage < totalPages && (
                        <Link
                          className="page-link"
                          onClick={() => paginate(currentPage + 1)}
                        >
                          {">"}
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalOrders;
