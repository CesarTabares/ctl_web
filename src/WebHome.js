import React from "react";
import "./WebHome.css";
import logo_nav_bar from "./img/ctl_logo_nav.png";
import lab_glass from "./img/lab_glass.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function WebHome() {
  const getConfigurableProps = () => ({
    showArrows: true,
    showStatus: false,
    showIndicators: true,
    infiniteLoop: true,
    showThumbs: false,
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: true,
    emulateTouch: true,
    // thumbWidth: number("thumbWidth", 100, {}, valuesGroupId),
    // selectedItem: number("selectedItem", 0, {}, valuesGroupId),
    // interval: number("interval", 3000, {}, valuesGroupId),
    // transitionTime: number("transitionTime", 150, {}, valuesGroupId),
    // swipeScrollTolerance: number("swipeScrollTolerance", 5, {}, valuesGroupId),
  });

  return (
    <>
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
            <h3 className="nav_link">INICIO</h3>
            <div className="border_nav_link" />
            <h3 className="nav_link">NOSOTROS</h3>
            <div className="border_nav_link" />
            <h3 className="nav_link">PRODUCTOS</h3>
            <div className="border_nav_link" />
            <h3 className="nav_link">CONTACTO</h3>
          </div>
        </nav>
      </div>
      <div style={{ position: "relative" }}>
        <Carousel {...getConfigurableProps()}>
          <div>
            <img src={lab_glass} height="500px" />
          </div>
          <div>
            <img src={lab_glass} height="500px" />
          </div>
        </Carousel>
        <div className="ontop_carousel_container"></div>
      </div>
    </>
  );
}

export default WebHome;
