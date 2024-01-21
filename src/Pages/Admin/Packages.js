import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import BackToAdminDashboard from "./BackToAdminDashboard";
const Packages = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const [title, setTitle] = useState([]);
  const [user] = useAuthState(auth);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/package-titles/`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/packages`)
      .then((res) => res.json())
      .then((info) => setPackages(info));
  }, []);

  return (
    <div>
      <div className="container hight-full">
        <BackToAdminDashboard></BackToAdminDashboard>
        <div class="col-sm mb-15">
          {title.map((e) => (
            <Link to={`/package-title-edit/${e._id}`} class="tf-button">
              <span>Edit Price Title</span>
            </Link>
          ))}
        </div>
        <table className="rwd-table">
          <div></div>
          <tbody>
            <tr>
              <th>SL No.</th>
              <th>Package Name</th>
              <th>Price</th>
              <th>Edit</th>
            </tr>
            {packages.map((item, index) => (
              <tr key={item._id}>
                <td data-th="SL No.">{index + 1}</td>
                <td data-th="Package Name">{item.packageName}</td>
                <td data-th="Price">{item.price}$</td>
                <td data-th="Edit">
                  <Link to={`/admin/package-edit/${item._id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Packages;
