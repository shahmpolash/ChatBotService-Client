import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="preloader">
      <div className="loader">
        <div className="pre-shadow" />
        <div className="pre-box" />
      </div>
    </div>
  );
};

export default Loading;
