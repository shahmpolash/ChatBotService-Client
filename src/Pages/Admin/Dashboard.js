import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import DashboardMenu from "./DashboardMenu";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((info) => setUsers(info.reverse()));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/website`)
      .then((res) => res.json())
      .then((info) => setData(info.reverse()));
  }, []);

  return (
    <div>
      <div>
        <DashboardMenu></DashboardMenu>
      </div>
    </div>
  );
};

export default Dashboard;
