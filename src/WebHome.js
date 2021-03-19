import React from "react";
import "./WebHome.css";
import logo_nav_bar from "./img/ctl_logo_nav.png";
import lab_glass from "./img/laboratory_installations.jpg";
import signo_int from "./img/signo-de-interrogacion.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as Carousel_single } from "react-responsive-carousel";
import quotes from "./img/quotes_img.svg";
import logo_sena from "./img/logoSena.png";
import udem from "./img/udem.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div style={{ overflow: "hidden" }}>
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
      {/* Carousel */}
      <div style={{ position: "relative" }}>
        <Carousel_single {...getConfigurableProps()}>
          <div>
            <img src={lab_glass} height="500px" />
          </div>
          <div>
            <img src={lab_glass} height="500px" />
          </div>
        </Carousel_single>
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
      {/* Middle Description */}
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
      {/* Sectors Section */}
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
                style={{ height: "250px", width: "170px", top: "-18%" }}
              >
                <img src={signo_int} height="70px" />
                <h3 style={{ marginTop: "50px" }}> 111111</h3>
              </div>
              <div
                className="sector_rectangle combination_2 shadow_sector"
                style={{
                  height: "200px",
                  width: "170px",
                  top: "8%",
                  left: "32%",
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
                  top: "55%",
                  left: "32%",
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
                  top: "37%",
                  left: "7%",
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
                  top: "-14%",
                  left: "68%",
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
                  top: "5%",
                  left: "82.5%",
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
                  top: "38%",
                  left: "68%",
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
                  top: "62%",
                  right: "-25%",
                }}
              >
                <img src={signo_int} height="70px" />
                <h3 style={{ marginTop: "50px" }}> 8888888</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quotes Section */}

      <div className="width_container">
        <div
          className="quote_section simple_flex_centered"
          style={{ flexDirection: "column" }}
        >
          <img src={quotes} width="155px" style={{ marginBottom: "50px" }} />
          <p
            style={{
              maxWidth: "750px",
              textAlign: "center",
              fontStyle: "italic",
              fontSize: "24px",
              lineHeight: "30px",
              marginBottom: "10px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            temporibus explicabo in blanditiis sequi? Sed.
          </p>
          <p
            style={{
              maxWidth: "750px",
              textAlign: "center",
              fontStyle: "italic",
              color: "#707070",
            }}
          >
            Cesar Tabares. Gerente CTL Companys
          </p>
        </div>
      </div>

      {/* Success Cases Section */}
      <div className="width_container">
        <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
          Casos de Exito
        </h1>
        <Carousel
          responsive={responsive}
          arrows={false}
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <img src={logo_sena} width="100px" />
          </div>
          <div>
            <img src={logo_sena} width="100px" />
          </div>
          <div>
            <img src={logo_sena} width="100px" />
          </div>
          <div>
            <img src={logo_sena} width="100px" />
          </div>
          <div>
            <img src={udem} width="100px" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default WebHome;
