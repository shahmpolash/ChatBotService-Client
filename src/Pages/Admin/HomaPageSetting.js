import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import BackToAdminDashboard from "./BackToAdminDashboard";

const HomaPageSetting = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);

  const [about, setAbout] = useState([]);
  const [banner, setBanner] = useState([]);
  const [speciality, SetSpeciality] = useState([]);
  const [choose, SetChoose] = useState([]);
  const [road, SetRoad] = useState([]);
  const [title, setTitle] = useState([]);
  const [counters, setCounters] = useState([]);
  const [video, setVideo] = useState([]);
  const [cta, setCta] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/banner/`)
      .then((res) => res.json())
      .then((info) => setBanner(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/speciality/`)
      .then((res) => res.json())
      .then((info) => SetSpeciality(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/why-choose/`)
      .then((res) => res.json())
      .then((info) => SetChoose(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/road/`)
      .then((res) => res.json())
      .then((info) => SetRoad(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/team-title`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/counters-section`)
      .then((res) => res.json())
      .then((info) => setCounters(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/video-section`)
      .then((res) => res.json())
      .then((info) => setVideo(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/faqs-title`)
      .then((res) => res.json())
      .then((info) => setCta(info[0]));
  }, []);

  return (
    <>
      <BackToAdminDashboard></BackToAdminDashboard>

      <div className="helpful pt-130 box-messages">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-6 mb-4">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className="icon-view" />
                </div>
                <h6>
                  {banner.map((e) => (
                    <Link to={`/admin/edit-banner-option/${e._id}`}>
                      <span>Banner Options</span>
                    </Link>
                  ))}
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 mb-4">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className="icon-pen" />
                </div>
                <h6>
                  <Link to="/admin/how-to-option/">
                    <span>How to Help Option</span>
                  </Link>
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 mb-4">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className="icon-users" />
                </div>
                <h6>
                  {about.map((editAbout) => (
                    <Link to={`/admin/about-edit/${editAbout._id}`}>
                      <span>About Us Option</span>
                    </Link>
                  ))}
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 mb-4">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className="icon-chart-line" />
                </div>
                <h6>
                  <Link to="/admin/why-select-us/">
                    <span>Why choose Option</span>
                  </Link>
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 mb-4">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className="icon-share" />
                </div>
                <h6>
                  {speciality.map((e) => (
                    <Link to={`/admin/speciality-edit/${e._id}`}>
                      <span>Our Speciality Option</span>
                    </Link>
                  ))}
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 mb-4">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className="icon-chart-network" />
                </div>
                <h6>
                  {road.map((e) => (
                    <Link to={`/admin/edit-work-process/${e._id}`}>
                      <span>Working Process Option</span>
                    </Link>
                  ))}
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 mb-4">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className="icon-comment" />
                </div>
                <h6>
                  <Link to="/admin/testimonials">
                    <span>Testimonials Option</span>
                  </Link>
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 mb-4">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className="icon-project-1" />
                </div>
                <h6>
                  <Link to={`/admin/cta-option/${cta._id}`}>
                    <span>CTA Option</span>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomaPageSetting;
