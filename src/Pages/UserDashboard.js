import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import UserDashboardMenu from "./UserDashboardMenu";
import { signOut } from "firebase/auth";

const UserDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const itemsPerPage = 10; // Number of items to display per page
  const [currentPageOrders, setCurrentPageOrders] = useState(1);
  const [currentPageData, setCurrentPageData] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:5000/chatbot-new-orders`)
      .then((res) => res.json())
      .then((info) => setOrders(info.reverse()));
  }, []);

  let rowNumberOrders = (currentPageOrders - 1) * itemsPerPage + 1;
  let rowNumberData = (currentPageData - 1) * itemsPerPage + 1;

  const totalPagesOrders = Math.ceil(
    orders.filter((order) => order.customerEmail === user?.email).length /
      itemsPerPage
  );

  const handlePageChangeOrders = (newPage) => {
    setCurrentPageOrders(newPage);
  };

  const handlePageChangeData = (newPage) => {
    setCurrentPageData(newPage);
  };

  const handleSignout = () => {
    signOut(auth);
  };

  return (
    <div data-aos="fade-up" data-aos-duration={2000}>
      <UserDashboardMenu></UserDashboardMenu>

      {orders.filter((order) => order.customerEmail === user?.email).length >=
        1 && (
        <div className="container">
          <h3 className="text-center">My Orders</h3>

          <table className="rwd-table">
            <tbody>
              <tr>
                <th>SL No.</th>
                <th>Date</th>

                <th>Package</th>
                <th>Price</th>
                <th>Payment Status</th>
                <th>Order Status</th>
                <th>-</th>
              </tr>

              {orders
                .filter((order) => order.customerEmail === user?.email)
                .slice(
                  (currentPageOrders - 1) * itemsPerPage,
                  currentPageOrders * itemsPerPage
                )
                .map((order) => (
                  <tr key={order._id}>
                    <td>{rowNumberOrders++}</td>
                    <td>{order.orderDate}</td>

                    <td>{order.packageName}</td>
                    <td>{order.packagePrice}$</td>
                    <td>{order.paymentStatus}</td>
                    <td>{order.orderStatus}</td>
                    <td>
                      {order.paymentStatus === "UnPaid" && (
                        <Link to={`/pay-now/${order._id}`}>Pay Now</Link>
                      )}
                      {order.paymentStatus === "Received" && (
                        <>Payment is Completed</>
                      )}
                      {order.paymentStatus === "Cancelled" && (
                        <>Payment is Cancelled</>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="pagination mb-5">
            <ul className="pagination justify-content-center">
              {" "}
              {/* Added Bootstrap classes */}
              {Array.from({ length: totalPagesOrders }, (_, index) => {
                return (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPageOrders === index + 1 ? "active" : ""
                    }`}
                  >
                    <Link
                      onClick={() => handlePageChangeOrders(index + 1)}
                      className="page-link" // Bootstrap pagination link class
                    >
                      {index + 1}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {orders.filter((order) => order.customerEmail === user?.email).length ===
        0 && (
        <>
          <h4 className="text-center">You have not ordered any packages.</h4>
          <br></br>
        </>
      )}
    </div>
  );
};

export default UserDashboard;
