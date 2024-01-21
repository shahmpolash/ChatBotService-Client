import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import BackToAdminDashboard from "./BackToAdminDashboard";

const HowToSectionList = () => {
  const navigate = useNavigate();
  const [choose, setChoose] = useState([]);
  const [title, setTitle] = useState({});
  const [user] = useAuthState(auth);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/all-help-section`)
      .then((res) => res.json())
      .then((info) => setChoose(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/help-section-title`)
      .then((res) => res.json())
      .then((info) => setTitle(info[0]));
  }, [id]);

  const handleDelete = (serviceId) => {
    fetch(`http://localhost:5000/delete-help/${serviceId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res;
      })
      .then(() => {
        const updatedChoose = choose.filter((e) => e._id !== serviceId);
        setChoose(updatedChoose);
      })
      .catch((error) => {
        console.error("There was a problem with the delete request:", error);
      });
  };

  return (
    <div>
      <BackToAdminDashboard></BackToAdminDashboard>
      <div className="mt-5">
        <div className="themesflat-container">
          <div className="row justify-center">
            <div className="col-12">
              <div className="heading-section  fadeInUp style-2 text-center">
                <div className="main-title">How to Option</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div class="container">
          <div class="justify-content-center align-items-baseline mt-15"></div>
          <div class="col-sm flex justify-between gap20">
            <Link
              to={`/admin/edit-how-to-title/${title._id}`}
              className="tf-button"
              type="submit"
            >
              Update Title
            </Link>

            <Link
              to="/admin/add-how-option/"
              className="tf-button"
              type="submit"
            >
              Add How to Help
            </Link>
          </div>
        </div>
        <table className="rwd-table">
          <tbody>
            <tr>
              <th>SL No.</th>
              <th>Title</th>
              <th>Edit</th>
              <th>-</th>
            </tr>
            {choose.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>

                <td>
                  <Link to={`/admin/edit-how-option/${item._id}`}>Edit</Link>
                </td>
                <td className="">
                  <button
                    className="btn btn-sm tf-button"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete Service
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HowToSectionList;
