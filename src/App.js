import "./styles.css";
import React, { useRef } from "react";
import Navbar from "./Navbar";

export default function App() {
  // Create refs for each section
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ aboutRef, educationRef, skillsRef, projectsRef, contactRef }}
      />
      <div className="container mt-5">
        <h1>Welcome to my Portfolio</h1>

        <section ref={aboutRef} className="mt-4">
          <h2>About Me</h2>
          <p>
            This is a simple React app using Bootstrap. We are here to help you
            learn web development.
          </p>
        </section>

        <section ref={educationRef} className="mt-4">
          <h2>Education</h2>
          <ul>
            <li>Elementary - Landayan Elementary School</li>
            <li>
              High School - San Pedro Relocation Center National High School
              Landayan Annex
            </li>
            <li>College - Lyceum of Alabang</li>
          </ul>
        </section>

        <section ref={skillsRef} className="mt-4">
          <h2>Skills</h2>
          <ul>
            <li>Graphic Design</li>
            <li>Web Design</li>
            <li>
              Experience with Java, C++, Python, Flutter, Android Studio,
              Blender, HTML, CSS, JavaScript
            </li>
          </ul>
        </section>

        <section ref={projectsRef} className="mt-4">
          <h2>Projects</h2>
          <ul>
            <li>Pool Facilities Asset Management System</li>
            <li>Simple Calculator using Python</li>
          </ul>
        </section>

        <section ref={contactRef} className="mt-4">
          <h2>Contact</h2>
          <p>Email: sahagunjrbernard@gmail.com</p>
          <p>
            Facebook:{" "}
            <a href="https://www.facebook.com/Doorayz">
              Bernard G. Sahagun Jr.
            </a>
          </p>
          <p>Contact Number: 09278236775</p>
        </section>
      </div>
    </div>
  );
}
