import React from "react";
import { Link } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";

const OrderMenu = () => {
  return (
    <div className="custom-ordermenu mb-15">
      <BackToAdminDashboard></BackToAdminDashboard>

      <div class="container mt-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
          <div class="col mb-3">
            <Link to="/admin/orders/" class="tf-button">
              Total Orders
            </Link>
          </div>
          <div class="col mb-3">
            <Link to="/admin/orders-pending" class="tf-button">
              Pending Orders
            </Link>
          </div>
          <div class="col mb-3">
            <Link to="/admin/orders/accepted" class="tf-button">
              Accepted Orders
            </Link>
          </div>
          <div class="col mb-3">
            <Link to="/admin/orders/cancelled" class="tf-button">
              Cancelled Orders
            </Link>
          </div>
          <div class="col mb-3">
            <Link to="/admin/orders/delivered" class="tf-button">
              Delivered Orders
            </Link>
          </div>
          <div class="col mb-3">
            <Link to="/admin/payments/pending" class="tf-button">
              Pending Payments
            </Link>
          </div>
          <div class="col mb-3">
            <Link to="/admin/payments/received" class="tf-button">
              Received Payments
            </Link>
          </div>
          <div class="col mb-3">
            <Link to="/admin/payments/cancelled" class="tf-button">
              Cancelled Payments
            </Link>
          </div>
          <div class="col mb-3">
            <Link to="/admin/payments/refunded" class="tf-button">
              Refunded Payments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMenu;
