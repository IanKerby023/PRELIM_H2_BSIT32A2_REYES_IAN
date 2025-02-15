import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // State to toggle visibility of hobbies section
  const [showHobbies, setShowHobbies] = useState(false);

  const toggleHobbies = () => {
    setShowHobbies(!showHobbies);
  };

  return (
    <div className="App">
      <header>
        <h1>Welcome to My Website</h1>
        <img
          src="/475916898_595626603394812_3316502960228593388_n.jpg"
          alt="Ian Kerby Reyes Profile Picture"
        />
      </header>

      <nav>
        <a href="home.html">Home</a>
        <a href="about.html">About</a>
      </nav>

      <main>
        <section className="about-me">
          <img
            src="/476580870_545923591799179_6036345470176401793_n.jpg"
            alt="Ian's Profile Picture"
          />
          <div>
            <h2>About Me</h2>
            <p>
              Hello! My name is Ian Kerby Reyes. I'm a 3rd Year College student
              with a strong passion for Gaming and Physical Fitness.
            </p>
          </div>
        </section>

        <section className="cta">
          <a href="about.html" className="button">
            Learn More About Me
          </a>
        </section>

        <section className="cta">
          <button className="button" onClick={toggleHobbies}>
            Show My Interests
          </button>
        </section>

        {showHobbies && (
          <section id="hobby-section">
            <h3>My Hobbies</h3>
            <ul>
              <li>Playing Games</li>
              <li>Physical Fitness</li>
            </ul>
          </section>
        )}
      </main>

      <footer>
        <p>&copy; 2025 Ian Kerby Reyes. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
