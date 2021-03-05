import React from "react";
import "./WebHome.css";
import logo_nav_bar from "./img/ctl_logo_nav.png";
import lab_glass from "./img/laboratory_installations.jpg";
import signo_int from "./img/signo-de-interrogacion.svg";
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
        <div className="width_container" id="ontop_carousel">
          <div className="ontop_carousel_container">
            <div className="ontop_carousel_container__subcontainer">
              <h2 className="col_white">LINEA XX</h2>
            </div>
            <div className="ontop_carousel_container__subcontainer">
              <h2 className="col_white">LINEA XX</h2>
            </div>
            <div className="ontop_carousel_container__subcontainer">
              <h2 className="col_white">LINEA XX</h2>
            </div>
            <div className="ontop_carousel_container__subcontainer">
              <h2 className="col_white">LINEA XX</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="width_container">
        <div className="line_after_carousel" />
        <h2
          style={{ textAlign: "center", marginBottom: "10px" }}
          className="col_orange"
        >
          BIENVENIDO A
        </h2>
        <h1 style={{ textAlign: "center", fontSize: "100PX" }}>CTL COMPANY</h1>
        <p className="p_main_home">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius veniam
          explicabo officiis voluptas cum illo doloribus fugiat tempora
          architecto vero in, rerum eos quia reprehenderit distinctio, illum et
          quas earum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloremque, delectus? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nulla iusto ut a et minus eos.
        </p>
        <div className="sub_texts_maincontainer">
          <div className="sub_text_container">
            <img
              src={signo_int}
              height="50px"
              style={{ marginBottom: "15px" }}
            />
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              repellat necessitatibus harum soluta. Adipisci tenetur totam aut
              dolor recusandae mollitia?
            </p>
          </div>
          <div className="sub_text_container">
            <img
              src={signo_int}
              height="50px"
              style={{ marginBottom: "15px" }}
            />
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              repellat necessitatibus harum soluta. Adipisci tenetur totam aut
              dolor recusandae mollitia?
            </p>
          </div>
          <div className="sub_text_container">
            <img
              src={signo_int}
              height="50px"
              style={{ marginBottom: "15px" }}
            />
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              repellat necessitatibus harum soluta. Adipisci tenetur totam aut
              dolor recusandae mollitia?
            </p>
          </div>
        </div>
      </div>
      <div className="background_sectors_container">
        <div className="width_container" style={{ height: "100%" }}>
          <div className="container_sectors_flex">
            <div className="sectors_flex_left">
              <div className="sector_flex_left_texts">
                <h2>Mercados donde nos</h2>
                <h1
                  style={{
                    fontSize: "60px",
                    letterSpacing: "1.5px",
                    margin: "15px 0",
                  }}
                >
                  ENFOCAMOS
                </h1>
                <p style={{ maxWidth: "420px" }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                  velit optio ullam iste laudantium animi. Impedit sequi et sed
                  eaque, excepturi similique reprehenderit.
                </p>
              </div>
            </div>
            <div className="sectors_flex_right">
              <div
                className="sector_rectangle combination_1 shadow_sector"
                style={{ height: "250px", width: "170px", top: "-95px" }}
              >
                <img src={signo_int} height="70px" />
                <h3 style={{ marginTop: "50px" }}> 111111</h3>
              </div>
              <div
                className="sector_rectangle combination_2 shadow_sector"
                style={{
                  height: "200px",
                  width: "170px",
                  top: "40px",
                  left: "200px",
                }}
              >
                <img src={signo_int} height="70px" />
                <h3 style={{ marginTop: "50px" }}> 22222</h3>
              </div>

              <div
                className="sector_rectangle combination_2 shadow_sector"
                style={{
                  height: "250px",
                  width: "185px",
                  top: "275px",
                  left: "200px",
                }}
              >
                <img src={signo_int} height="70px" />
                <h3 style={{ marginTop: "50px" }}> 333333</h3>
              </div>
              <div
                className="sector_rectangle combination_3 shadow_sector"
                style={{
                  height: "220px",
                  width: "170px",
                  top: "180px",
                  left: "40px",
                }}
              >
                <img src={signo_int} height="70px" />
                <h3 style={{ marginTop: "50px" }}> 444444</h3>
              </div>
              <div
                className="sector_rectangle combination_2 shadow_sector"
                style={{
                  height: "230px",
                  width: "170px",
                  top: "-70px",
                  left: "410px",
                }}
              >
                <img src={signo_int} height="70px" />
                <h3 style={{ marginTop: "50px" }}> 55555</h3>
              </div>
              <div
                className="sector_rectangle combination_3 shadow_sector"
                style={{
                  height: "250px",
                  width: "170px",
                  top: "25px",
                  left: "500px",
                }}
              >
                <img src={signo_int} height="70px" />
                <h3 style={{ marginTop: "50px" }}> 66666</h3>
              </div>
              <div
                className="sector_rectangle combination_1 shadow_sector"
                style={{
                  height: "230px",
                  width: "170px",
                  top: "185px",
                  left: "410px",
                }}
              >
                <img src={signo_int} height="70px" />
                <h3 style={{ marginTop: "50px" }}> 777777</h3>
              </div>
              <div
                className="sector_rectangle combination_2 shadow_sector"
                style={{
                  height: "200px",
                  width: "170px",
                  top: "300px",
                  left: "100%",
                }}
              >
                <img src={signo_int} height="70px" />
                <h3 style={{ marginTop: "50px" }}> 8888888</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebHome;
