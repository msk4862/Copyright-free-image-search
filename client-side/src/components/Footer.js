import React from "react";

import "../styles/Footer.css";
import {
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
  SOCIAL_TWITTER,
} from "../uitilities/Constants";

function Footer() {
  return (
    <footer className="page-footer">
      <div className="container-fluid">
        <div className="row social justify-content-center">
          <div className="col-12 col-sm-6">
            <a href={SOCIAL_LINKEDIN} target="blank">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href={SOCIAL_GITHUB} target="blank">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href={SOCIAL_TWITTER} target="blank">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="row copyright justify-content-center">
          <p className="col-12 col-sm-6">
            Copyright &#x24B8; {new Date().getFullYear()} NCI | Developed by Shoaib Asgar
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
