import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import back from "../../Assets/Projects/back.png";
import clock from "../../Assets/Projects/digital_Clock.jpg";
import todo from "../../Assets/Projects/TODO-APP.jpg";
import rblog from "../../Assets/Projects/blog-app.jpg";
import ecommerce_app from "../../Assets/Projects/ecommerce_app.jpg";
import trello from "../../Assets/Projects/trello.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce_app}
              isBlog={false}
              title="Blog App"
              description="While developing this project you will understand that how you can create multiple components in React like Smart Components and Dummy Components and how to modify and do data operations within component using state variables and how to communicate between two components props variables"
              link="https://github.com/maheshv99/Ecommerce_FrontEnd"
              link1="https://lucent-cupcake-0e8f88.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trello}
              isBlog={false}
              title="Trello App"
              description="Trllo is managing the all project in one side and keep it simple it there in when were you want you can access"
              link="https://github.com/maheshv99/trello_FrontEnd"
              link1="https://zippy-pie-270bdf.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ rblog}
              isBlog={false}
              title="React Blog App"
              description="It includes capabilities React.JS and React Router mainly. While developing this project I understand that how I can create multiple components in React like Smart Components and Dummy Components and how to modify and do data operations within component using state variables and how to communicate between two components props variables by using HTML, CSS, JavaScript , React.JS"
              link="https://github.com/maheshv99/Blog-Node-FrontEnd"
              link1= "https://inquisitive-eclair-df87e1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ todo}
              isBlog={false}
              title="To do App"
              description="This projects includes JavaScript,CSS,HTML.I have created multiple components with same scripting and interpreted languages like To do App UI Web, To do App UI Mobile and To Do App JS.I have used multiple DOM functions which made the static application a dynamic one."
              link=":https://github.com/maheshv99/JShandson/tree/main/todo-js-app"
              link1="https://maheshv99.github.io/JShandson/todo-js- app/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clock}
              isBlog={false}
              title="Digital Clock"
              description="Digital Clock created by using JavaScript and scripting language HTML and CSS, we look closely at the JavaScript code behind a clock. It includes multiple functions and created a clock and make it response on a particular time for taking tasks"
              link="https://github.com/maheshv99/digitalclock/"
              link1= "https://maheshv99.github.io/digitalclock/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={back}
              isBlog={false}
              title="Building an HTML page"
              description="Backtracking created by using HTML. It shows how a normal text looks on windows, By using all tags in HTML and giving some styles in it."
              link="https://github.com/maheshv99/project"
              link1="https://maheshv99.github.io/project/Backtracking.html"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
