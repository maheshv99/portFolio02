import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in Some Technologies like
              <i>
                <b className="purple"> React, Javascript, CSS, HTML,Node js, MongoDB, Redux, Git </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> 
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing Innovative Projects Like
              <i>
                <b className="purple">
                  {" "}
                  
                </b>Ecommerce web site, IPhone Store etc..
              </i>
              {/* &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" height="200px" width="200px" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p><strong>
            <div itemscope itemtype="https://schema.org/LocalBusiness">
                Phone Number : <span itemprop="telephone"><a href="tel:+917259924504">
                +917259924504</a></span>
                </div>
                <div itemscope itemtype="https://schema.org/LocalBusiness">
                Email ID : <span itemprop="email"><a href="mailto:mahesh10082001@gmail.com"> mahesh10082001@gmail.com </a></span>
                </div>   </strong>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/maheshv99"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mahesh-valasang-567392220/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
