import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faBuilding } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="width_container">
        <h2 className="col_white">CONTACTOS</h2>
        <div className="flex_locations">
          <div className="location">
            <div className="location_subflex">
              <FontAwesomeIcon icon={faBuilding} className="icon_footer" />
              <p className="col_white">Medellin - Principal</p>
            </div>
            <div className="location_subflex">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon_footer" />
              <p className="col_white">Calle 32EE No.81A - 32</p>
            </div>
            <div className="location_subflex">
              <FontAwesomeIcon icon={faPhoneAlt} className="icon_footer" />
              <p className="col_white">(4) 444 00 37</p>
            </div>
            <div className="location_subflex">
              <FontAwesomeIcon icon={faEnvelope} className="icon_footer" />
              <p className="col_white">info@ctlcompany.com</p>
            </div>
          </div>
          <div className="location">
            <div className="location_subflex">
              <FontAwesomeIcon icon={faBuilding} className="icon_footer" />
              <p className="col_white">Bogotá</p>
            </div>
            <div className="location_subflex">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon_footer" />
              <p className="col_white">xxxxxxxxx</p>
            </div>
            <div className="location_subflex">
              <FontAwesomeIcon icon={faPhoneAlt} className="icon_footer" />
              <p className="col_white">(4) 444 00 37</p>
            </div>
            <div className="location_subflex">
              <FontAwesomeIcon icon={faEnvelope} className="icon_footer" />
              <p className="col_white">info@ctlcompany.com</p>
            </div>
          </div>
          <div className="location">
            <div className="location_subflex">
              <FontAwesomeIcon icon={faBuilding} className="icon_footer" />
              <p className="col_white">Barranquilla</p>
            </div>
            <div className="location_subflex">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon_footer" />
              <p className="col_white">Calle 32EE No.81A - 32</p>
            </div>
            <div className="location_subflex">
              <FontAwesomeIcon icon={faPhoneAlt} className="icon_footer" />
              <p className="col_white">(4) 444 00 37</p>
            </div>
            <div className="location_subflex">
              <FontAwesomeIcon icon={faEnvelope} className="icon_footer" />
              <p className="col_white">info@ctlcompany.com</p>
            </div>
          </div>
        </div>
        <div className="links_menu">
          <div className="flex_links">
            <h3 className="col_white">INICIO</h3>
            <div className="border_footer_link" />
            <h3 className="col_white">NOSOTROS</h3>
            <div className="border_footer_link" />
            <h3 className="col_white">PRODUCTOS</h3>
            <div className="border_footer_link" />
            <h3 className="col_white">CONTACTO</h3>
          </div>
        </div>
        <div className="last_statements">
          <p
            className="col_white"
            style={{ fontSize: "14px", marginBottom: "3px" }}
          >
            © Todos los derechos reservados | CTL Company
          </p>
          <a
            className="col_white"
            style={{ fontSize: "14px", marginBottom: "5px" }}
          >
            Politica de Privacidad
          </a>
          <p
            className="col_white"
            style={{ fontSize: "14px", marginBottom: "3px" }}
          >
            Diseño Web: TABCODA
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
