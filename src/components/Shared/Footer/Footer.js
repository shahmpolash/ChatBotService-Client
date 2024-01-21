import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [logo, setLogo] = useState([]);
  const [footer, setFooter] = useState({});
  const [social, setSocial] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info[0]));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/footer-links`)
      .then((res) => res.json())
      .then((info) => setFooter(info[0]));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setSocial(info[0]));
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const newsLetter = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const contact = {
      email,
    };

    const url = `http://localhost:5000/add-newsLetter/`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/news-letter-submit");
      });
  };

  return (
    <>
      {/* <div className="pt-185"></div>
      <footer className="footer-area footer-gradient-bg position-relative z-1 pt-185">
        <div className="shape">
          <span />
        </div>
        <div className="container">
          <div className="footer-widget pb-40">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="widget footer-nav-widget mb-40 wow fadeInUp"
                  data-wow-delay=".15s"
                >
                  {logo.map((show) => (
                    <img className="footer__logo" src={show.logo} alt="Logo" />
                  ))}

                  <ul className="widget-nav">
                    <p className="mt-3 text-dark">{footer.FooterAbout}</p>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12">
                <div
                  className="widget footer-nav-widget mb-40 wow fadeInUp"
                  data-wow-delay=".20s"
                >
                  <h4 className="widget-title">Links</h4>
                  <ul className="widget-nav">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12">
                <div
                  className="widget social-widget mb-40 wow fadeInUp"
                  data-wow-delay=".25s"
                >
                  <h4 className="widget-title">Follow</h4>
                  <ul className="social-nav">
                    <li>
                      <Link to={social.instragram}>
                        <i className="fab fa-instagram" />
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link to={social.twitter}>
                        <i className="fab fa-twitter" />
                        Twitter
                      </Link>
                    </li>
                    <li>
                      <Link to={social.facebook}>
                        <i className="fab fa-behance" />
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link to={social.youtube}>
                        <i className="fab fa-youtube" />
                        Youtube
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="widget newsletter-widget mb-40 wow fadeInUp"
                  data-wow-delay=".30s"
                >
                  <div className="newsletter-content">
                    <h3>Subscribe Our Newsletter</h3>

                    <form onSubmit={newsLetter}>
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email"
                          required
                        />
                        <button className="tf-button get-start h45">Sign Up</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="row">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>{footer.CopyRight}</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-nav float-lg-right">
                  <ul>
                    <li>
                      <div className="">
                        {" "}
                        <img
                          src="https://i.postimg.cc/G2GDpmcT/icon.png"
                          class="img-fluid rounded-top"
                          width={30}
                          alt=""
                        />{" "}
                        {social.email}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}

      <footer id="footer">
        <img
          className="item1 block-star"
          src="https://themesflat.co/html/munai/assets/images/item-background/start.png"
          alt
        />

        <div className="item2 block-blur-1" />
        <div className="item3 block-blur-2" />
        <div className="item4 block-blur-3" />
        <div className="item5 block-blur-4" />
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <div className="footer-top">
                <div className="logo-footer" id="logo-footer">
                  <Link to="/">
                    <img
                      id="logo_footer"
                      src={logo.logo}
                      data-retina={logo.logo}
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="footer-title">About</div>
              <p className="text">{footer.FooterAbout}</p>
              <ul className="wg-social">
                <li>
                  <a href={social.facebook} className="icon-facebook" />
                </li>
                <li>
                  <a href={social.twitter} className="icon-twitter" />
                </li>
                <li>
                  <a class="nav-link" href={social.youtube}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                    >
                      <linearGradient
                        id="PgB_UHa29h0TpFV_moJI9a_9a46bTk3awwI_gr1"
                        x1="9.816"
                        x2="41.246"
                        y1="9.871"
                        y2="41.301"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#f44f5a"></stop>
                        <stop offset=".443" stop-color="#ee3d4a"></stop>
                        <stop offset="1" stop-color="#e52030"></stop>
                      </linearGradient>
                      <path
                        fill="url(#PgB_UHa29h0TpFV_moJI9a_9a46bTk3awwI_gr1)"
                        d="M45.012,34.56c-0.439,2.24-2.304,3.947-4.608,4.267C36.783,39.36,30.748,40,23.945,40	c-6.693,0-12.728-0.64-16.459-1.173c-2.304-0.32-4.17-2.027-4.608-4.267C2.439,32.107,2,28.48,2,24s0.439-8.107,0.878-10.56	c0.439-2.24,2.304-3.947,4.608-4.267C11.107,8.64,17.142,8,23.945,8s12.728,0.64,16.459,1.173c2.304,0.32,4.17,2.027,4.608,4.267	C45.451,15.893,46,19.52,46,24C45.89,28.48,45.451,32.107,45.012,34.56z"
                      ></path>
                      <path
                        d="M32.352,22.44l-11.436-7.624c-0.577-0.385-1.314-0.421-1.925-0.093C18.38,15.05,18,15.683,18,16.376	v15.248c0,0.693,0.38,1.327,0.991,1.654c0.278,0.149,0.581,0.222,0.884,0.222c0.364,0,0.726-0.106,1.04-0.315l11.436-7.624	c0.523-0.349,0.835-0.932,0.835-1.56C33.187,23.372,32.874,22.789,32.352,22.44z"
                        opacity=".05"
                      ></path>
                      <path
                        d="M20.681,15.237l10.79,7.194c0.689,0.495,1.153,0.938,1.153,1.513c0,0.575-0.224,0.976-0.715,1.334	c-0.371,0.27-11.045,7.364-11.045,7.364c-0.901,0.604-2.364,0.476-2.364-1.499V16.744C18.5,14.739,20.084,14.839,20.681,15.237z"
                        opacity=".07"
                      ></path>
                      <path
                        fill="#fff"
                        d="M19,31.568V16.433c0-0.743,0.828-1.187,1.447-0.774l11.352,7.568c0.553,0.368,0.553,1.18,0,1.549	l-11.352,7.568C19.828,32.755,19,32.312,19,31.568z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={social.instragram} className="icon-instagram" />
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <div className="footer-title ml--3">Useful Links</div>
              <ul className="wg-menu ml--3">
                <li className="menu-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="menu-item">
                  <Link to="/about-us">About Us</Link>
                </li>

                <li className="menu-item">
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="footer-title ml--3">Newsletter</div>
              <form className="comment-form mt-40 ml--3" onSubmit={newsLetter}>
                <fieldset className="email">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    className="style-1 mb-10"
                    name="email"
                  />
                </fieldset>
                <div className>
                  <button className type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="col-12">
              <div className="footer-bottom">
                <p className="text mb-0">{footer.CopyRight}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
