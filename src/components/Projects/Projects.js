import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import potholes from "../../Assets/Projects/potholes.jpg";
import Movie from "../../Assets/Projects/Movie.webp"
import Temperature from "../../Assets/Projects/Temperature.jpg";
import ASL from "../../Assets/Projects/ASL.webp";
import Leaf from "../../Assets/Projects/Leaf.jpg";
import TicTacToe from "../../Assets/Projects/TicTacToe.jpg";
import Notepad from "../../Assets/Projects/Notepad.webp";

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
              imgPath={potholes}
              isBlog={false}
              title="Pothole Detection"
              description="Using CNN model for pothole detection by image input Trained a CNN model on a training set and used a validation set for validation. open main.py for inputting an image and processing it in the saved model for detection."
              ghLink="https://github.com/Mayank-Kumar07/CNN-Model-For-Pothole-Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movie}
              isBlog={false}
              title="Movie Recommendation System"
              description="This recommendation system leverages vector embeddings generated with the Word2Vec library to capture contextual relationships. It identifies the best matches by calculating cosine similarity between the vectors, ensuring precise and relevant recommendations."
              ghLink="https://github.com/Mayank-Kumar07/Movie_Recommendation_System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Temperature}
              isBlog={false}
              title="Real Time Temperature Prediction"
              description="This project aims to provide real-time temperature predictions using advanced machine learning techniques. By leveraging historical weather data and real-time inputs, this application predicts current and future temperatures with high accuracy. The solution integrates data from various weather APIs, processes it through a machine learning model, and presents the results through an intuitive user interface."
              ghLink="https://github.com/Mayank-Kumar07/Realtime-Temperature-Prediction--main"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ASL}
              isBlog={false}
              title="ASL Alphabet Recognition"
              description="This repository contains the implementation of an American Sign Language (ASL) recognition system that identifies alphabet letters from images using Convolutional Neural Networks (CNN). The project aims to facilitate communication for the deaf and hard-of-hearing community by translating ASL gestures into textual representation."
              ghLink="https://github.com/Mayank-Kumar07/ASL-Alphabet-Recognition-main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Leaf}
              isBlog={false}
              title="Leaf Disease Detection"
              description="This repository contains an implementation of a leaf disease detection system using Convolutional Neural Networks (CNN). The goal of this project is to assist farmers and gardeners in identifying and managing plant diseases early by accurately detecting and classifying diseases from leaf images."
              ghLink="https://github.com/Mayank-Kumar07/Leaf-Disease-Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TicTacToe}
              isBlog={false}
              title="Tic Tac Toe Game"
              description="This repository contains a Java-based implementation of the classic Tic Tac Toe game. Designed with a clean and efficient code structure, the game is built using Object-Oriented Programming (OOP) principles and features a 3x3 grid where two players alternate turns marking 'X' or 'O'."
              ghLink="https://github.com/Mayank-Kumar07/Tic-Tac-Toe-game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Notepad}
              isBlog={false}
              title="Notepad Editor"
              description="This repository features a simple yet functional Notepad editor developed in Java. Designed to mimic the basic functionalities of a standard text editor, this project allows users to create, edit, and save text files with ease."
              ghLink="https://github.com/Mayank-Kumar07/Notepad-Editor"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
