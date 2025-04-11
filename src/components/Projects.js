//Indformacion de los proyectos de la persona

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../styles/Projects.css';

export const Projects = ({ person }) => {

  if (!person || !person.projects || person.projects.length === 0) {
    return null;
  }

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos de {person.info.name}</h2>
                <p>Estos son algunos de los proyectos realizados por {person.info.name}. Cada uno refleja su experiencia en diseño y desarrollo de aplicaciones.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills-custom mb-5 justify-content-center align-items-center" id="pills-tab">
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <h3 className="text-center">Mis Proyectos</h3>
                      <Row>
                        {person.projects.map((project, index) => (
                          <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image || projImg1}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
