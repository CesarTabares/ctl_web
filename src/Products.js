import React from "react";
import "./products.css";
import labsvg from "./img/labsvg.svg";
import logo_sena from "./img/logoSena.png";
import udem from "./img/udem.png";
import Carousel from "react-multi-carousel";

function Products() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <div className="width_container">
      <h1 className="title_products">LINEAS DE PRODUCTO</h1>
      <div className="container_products_lines">
        <div className="flex_line_products">
          <div className="produc_line">
            <div className="produc_line_background">
              <div class="layer">
                <h2 className="title_line">LABORATORIO</h2>
              </div>
            </div>
          </div>
          <div className="produc_line">
            <div className="produc_line_background">
              <div class="layer">
                <h2 className="title_line">LABORATORIO</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex_line_products">
          <div className="produc_line">
            <div className="produc_line_background">
              <div class="layer">
                <h2 className="title_line">LABORATORIO</h2>
              </div>
            </div>
          </div>
          <div className="produc_line">
            <div className="produc_line_background">
              <div class="layer">
                <h2 className="title_line">LABORATORIO</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our_brands">
        <h1 className="title_products">NUESTRAS MARCAS</h1>

        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          arrows={false}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          transitionDuration={2000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel_brands"
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

export default Products;
