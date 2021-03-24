import React from "react";
import logo_nav_bar from "./img/ctl_logo_nav.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "./base_components";

function NavBar() {
  return (
    <div>
      <div className="top_infoline_container">
        <div className="width_container" style={{ height: "100%" }}>
          <div className="info_topinfo_bar">
            <div className="simple_flex">
              <div className="simple_flex">
                <FontAwesomeIcon icon={faPhoneAlt} color="white" />
                <h4 style={{ marginLeft: "7px" }} className="col_white">
                  +574 444 0037
                </h4>
              </div>
              <div className="simple_flex" style={{ marginLeft: "25px" }}>
                <FontAwesomeIcon icon={faEnvelope} color="white" />
                <h4 style={{ marginLeft: "7px" }} className="col_white">
                  info@ctlcompany.com
                </h4>
              </div>
            </div>
            <div>
              <h4 style={{ marginLeft: "7px" }} className="col_white">
                Por el Servicio
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="width_container">
        <nav className="nav_container">
          <div className="nav_container_image">
            <img src={logo_nav_bar} />
          </div>
          <div className="nav_links_container">
            <Link className="link" to="/">
              <h3 className="nav_link">INICIO</h3>
            </Link>
            <div className="border_nav_link" />
            <Link className="link" to="/about">
              <h3 className="nav_link">NOSOTROS</h3>
            </Link>
            <div className="border_nav_link" />
            <Link className="link" to="/products">
              <h3 className="nav_link">PRODUCTOS</h3>
            </Link>
            <div className="border_nav_link" />
            <h3 className="nav_link">CONTACTO</h3>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
