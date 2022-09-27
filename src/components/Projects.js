import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import projImg7 from "../assets/img/project-img7.jpg";
import projImg8 from "../assets/img/project-img8.jpg";
import projImg9 from "../assets/img/project-img9.jpg";
import projImg10 from "../assets/img/project-img10.jpg";
import projImg11 from "../assets/img/project-img11.jpg";
import projImg12 from "../assets/img/project-img12.jpg";
import projImg13 from "../assets/img/project-img13.jpg";
import projImg14 from "../assets/img/project-img14.jpg";
import projImg15 from "../assets/img/project-img15.jpg";
import projImg16 from "../assets/img/project-img16.jpg";
import projImg17 from "../assets/img/project-img17.jpg";
import projImg18 from "../assets/img/project-img18.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Vivienda Country",
      description: "Fachada exterior",
      imgUrl: projImg1,
    },
    {
      title: "Vivienda Country",
      description: "Cocina integral",
      imgUrl: projImg2,
    },
    {
      title: "Vivienda Country",
      description: "Living integral",
      imgUrl: projImg3,
    },
    {
      title: "Vivienda Country",
      description: "Contrafachada patio",
      imgUrl: projImg4,
    },
    {
      title: "Vivienda Country",
      description: "Cocina integral",
      imgUrl: projImg5,
    },
    {
      title: "Vivienda Country",
      description: "Contrafachda",
      imgUrl: projImg6,
    },
  ];
    const projects2 = [
    {
      title: "Bar - Coffee",
      imgUrl: projImg7,
    },
    {
      title: "Restaurant",
      imgUrl: projImg8,
    },
    {
      title: "Collage de intenciones",
      imgUrl: projImg9,
    },
    {
      title: "Mueble integrado",
      imgUrl: projImg10,
    },
    {
      title: "Restaurant",
      imgUrl: projImg11,
    },
    {
      title: "Local Collage",
      imgUrl: projImg12,
    },
  ];
  const projects3 = [
    {
      title: "Reforma de terraza",
      imgUrl: projImg13,
    },
    {
      title: "Baño",
      imgUrl: projImg14,
    },
    {
      title: "Toilette",
      imgUrl: projImg15,
    },
    {
      title: "Mueble de baño",
      imgUrl: projImg16,
    },
    {
      title: "Cocina",
      imgUrl: projImg17,
    },
    {
      title: "Diseño de cocina",
      imgUrl: projImg18,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>PROYECTOS</h2>
                <p>Ofrecemos un servicio integral, brindamos servicios de proyecto arquitectónico, paisajismo, estudio de suelos, estructural, diseño de interiores, etc. El equipo acompaña al cliente desde las ideas iniciales, hasta la materialización del espacio.<p></p>
                Nos centramos en la búsqueda de un producto con el cual cada cliente se sienta identificado. Aportamos soluciones innovadoras, explorando cada material y sus capacidades, creando así, una variedad de alternativas diferentes a situaciones cotidianas.<p></p>
                Nuestro servicio comprende la generación de la idea principal, representación gráfica en planos ejecutivos, aprobaciones municipales y ejecución completa de la obra.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Vivienda</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Oficina/Comercio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Reformas</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                      {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
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
  )
}
