import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aditya Bhardwaj </span>
            from <span className="purple"> Ranchi, India.</span>
            <br />
          
            I am pursuing Bachelor of Technology in Electronics and Communication Engineering at BIT
            Sindri.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#ffffff" }}>
            "Do not whine. Do not complain. Work harder"{" "}
          </p>
          <footer className="blockquote-footer">Aditya Bhardwaj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
