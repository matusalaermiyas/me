import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import kuush from "../../Assets/Projects/kush.jpg";
import executives from "../../Assets/Projects/executives.jpg";
import students from "../../Assets/Projects/students.jpg";
import videoToMp3 from "../../Assets/Projects/videoToMp3.png";

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
              imgPath={kuush}
              isBlog={false}
              title="Kuush Records"
              description="Kuush Records is a dynamic and innovative music streaming platform designed to connect users with a diverse range of tracks and artists. It offers a seamless user experience, allowing listeners to easily discover new music, explore trending tracks, and access their favorite songs without needing to log in. "
              ghLink="#"
              demoLink="https://play.google.com/store/apps/details?id=com.kushrecord&hl=en"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={students}
              isBlog={false}
              title="Harambee Students"
              description="The Harambee Students App is a comprehensive mobile application designed to empower students by providing easy access to their academic and financial information. Through the app, students can effortlessly view their grades, manage their course registrations by adding or dropping courses, and keep track of their payments. The app also offers the convenience of downloading or viewing payment slips directly on their devices."
              ghLink="#"
              demoLink="https://play.google.com/store/apps/details?id=com.estudent.harambee&hl=en"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={executives}
              isBlog={false}
              title="Harambee Executives"
              description="The Harambee Executives App is a specialized mobile application tailored for university executives, providing them with a comprehensive dashboard to manage and oversee student data efficiently. The app offers insights into key metrics such as the total number of students, new student enrollments, and gender distribution across various campuses."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videoToMp3}
              isBlog={false}
              title="Video to Mp3"
              description="Simple Python Program to Convert Video to Mp3 files"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            /> */}
          {/* </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
