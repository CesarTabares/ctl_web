import React from "react";
import "./about.css";
import profile from "./img/profile.png";
import timeline from "./img/timeline.svg";
import Carousel from "react-multi-carousel";

function About() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
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
    <div>
      <div className="history_img_container">
        <div className="width_container">
          <img src={timeline} />
        </div>
      </div>
      <div className="profile_company">
        <div className="width_container">
          <div className="flex_profile_vision">
            <div className="profile_container">
              <h1 className="title_profile">COMPAÑIA</h1>
              <p className="paragraph_profile">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                ipsum est, consequuntur earum placeat error tenetur. Aspernatur
                modi, quisquam dolor provident mollitia voluptatem ipsa quasi
                possimus ipsam cum et hic fuga eius expedita esse adipisci nemo
                doloremque autem quam, molestiae inventore? Architecto sed eaque
                animi cumque rerum veniam vero qui.
              </p>
            </div>
            <div className="profile_container">
              <h1 className="title_profile">NUESTRA VISIÓN</h1>
              <p className="paragraph_profile">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                ipsum est, consequuntur earum placeat error tenetur. Aspernatur
                modi, quisquam dolor provident mollitia voluptatem ipsa quasi
                possimus ipsam cum et hic fuga eius expedita esse adipisci nemo
                doloremque autem quam, molestiae inventore? Architecto sed eaque
                animi cumque rerum veniam vero qui.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="our_team">
        <div className="width_container">
          <div className="flex_our_team_title">
            <div className="line_our_team" />
            <div className="title_our_team">
              <h1>CONOCE</h1>
              <h2>NUESTRO EQUIPO</h2>
            </div>
          </div>
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
            containerClass="carousel_container_about"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="miclase_carousel"
          >
            <div>
              <img src={profile} width="200px" />
            </div>
            <div>
              <img src={profile} width="200px" />
            </div>
            <div>
              <img src={profile} width="200px" />
            </div>
            <div>
              <img src={profile} width="200px" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default About;
