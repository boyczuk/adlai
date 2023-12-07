import React from "react";
import resume from "../assets/Adlai_Resume.pdf";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>About</h2>
        <p>
          Hi, my name is Adlai Bridson-Boyczuk I am a software developer
          currently in my 4th year of my undergraduate studying Computer Science at Queen's
          University. At the moment I am working at Yasu Energy as a Junior Web Developer.
          
          </p>
          <p>

          During my time at Queen's University I have spent time
          developing projects in several organizations like QUANTT (Queen's
          University Algorithmic Network & Trading Team) and QWEB (Queen's
          University Web Development Club) and on my own outside of school.
        </p>
        <p>
          Beyond school and programming I spend most of my time reading,
          training Brazilian Jiu-Jitsu, or watching MMA.
        </p>

        <p>
          <p>
            Contact me at 'adlaibridsonboyczuk@gmail.com' or any of the social
            media above!
          </p>
          My resume:<br></br>
          <a href={resume} target="_blank" style={{ color: "blue" }}>
            Resume
          </a>
        </p>
      </div>
      <div className="container">
        <div className="skills">
          <h2>Technical Skills</h2>
          <li>
            <b>Languages:</b>
            <br></br>Python, JavaScript, Typescript, Java, C, Bash, x86 Assembly,
          </li>
          <li>
            <b>Frameworks:</b>
            <br></br>HTML/CSS, jQuery, Node.js, Express.js, React, Flask, Unity
          </li>
          <li>
            {" "}
            <b>Technologies:</b>
            <br></br>MongoDB, MySQL, pandas, NumPy, Pytest, Linux, Excel, Git,
            Docker, VS Code, NetBeans, Eclipse{" "}
          </li>
        </div>
        <div className="courses">
          <h2>Relevant Courses</h2>
          <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-365" className="clickable-link" target="_blank">Algorithms</a></li>
          <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-235" className="clickable-link" target="_blank">Data Structures</a></li>
          <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-352" className="clickable-link" target="_blank">Artificial Intelligence</a></li>
          <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-452" className="clickable-link" target="_blank">Neural & Genetic Computing</a></li>
          <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-324" className="clickable-link" target="_blank">Operating Systems</a></li>
          <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-327" className="clickable-link" target="_blank">Software Quality Assurance</a></li>
          <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-322" className="clickable-link" target="_blank">Software Architecture</a></li>
          <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-360" className="clickable-link" target="_blank">Functional Programming</a></li>
        </div>
      </div>

      <div className="projects">
        <h2>Projects</h2>
        <p className="project-boxes">
          <b><a href="https://github.com/boyczuk" className="clickable-link">Equities Trading Algorithm</a></b> |{" "}
          <i>Python, Jupyter Notebooks, NumPy, pandas, QuantConnect, Scikit-learn</i>
          <li>
            Developed a Python securities trading algorithm that achieved 18%
            profit in 3-year backtest against S&P 500
          </li>
          <li>
            Implemented a SMA paired with a RSI indicator to determine when to
            short Technology and Real Estate securities.
          </li>
        </p>

        <p className="project-boxes">
          <b><a href="https://github.com/boyczuk" className="clickable-link">Spending Tracker</a></b> |{" "}
          <i>Javascript, React, Flask, Electron, Sqlite3, HTML, CSS, MaterialUI</i>
          <li>
            Desktop app used to track, view, and better manage my personal finances.
          </li>
          <li>
            React frontend running on Electron, using Flask as a backend to store and organize expenses.
          </li>
        </p>

        <p className="project-boxes">
          <b><a href="https://github.com/mad-cat-lon/qbnb" className="clickable-link">QBNB</a></b> | <i>Python, Flask, MongoDB, Pytest, Linux, Docker</i>
          <li>
            Collaborated on a Python-based CLI app for property rentals and
            booking using a Flask server, managing user data in MongoDB
          </li>
          <li>
            Followed an agile development cycle and utilized Pytest for unit and
            integration testing to ensure product quality
          </li>
        </p>
        <p className="project-boxes">
          <b><a href="https://github.com/boyczuk" className="clickable-link">UFC myGym</a></b> | <i>JavaScript, Node.js, Express.js, MongoDB, React</i>
          <li>
            MERN web application to track and train your favourite UFC fighters.
          </li>
        </p>

        <p className="project-boxes">
          <b><a href="https://github.com/boyczuk/myLibrary" className="clickable-link">myLibrary book tracker</a></b> | <i>C++, MySQL, Qt</i>
          <li>
            Designed and programmed a personal book manager to track and manage
            my reading habits
          </li>
        </p>

        <p className="project-boxes">
          <b><a href="https://github.com/boyczuk" className="clickable-link">Forest Rumble</a></b> | <i>C#, Unity, HTML, Photoshop</i>
          <li>
            Led development of a 2D level-based platformer. Added novel physics
            mechanics to pair with player movement
          </li>
        </p>

        <p className="project-boxes">
          <b><a href="https://github.com/boyczuk" className="clickable-link">Toteworthy Merchandise Website</a></b> | <i>React, Node.js, Boostrap</i>
          <li>
            Developed a website for a Junior Achievers merchandise startup
            company.
          </li>
        </p>
      </div>
    </div>
  );
}

export default Home;
