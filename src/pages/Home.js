import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import resume from "../assets/AdlaiResumeNov2022.pdf";
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, my name is Adlai </h2>
        <div className='prompt'> <p> An aspiring Software Developer and Computer Science 
          student at Queen's University. </p>
          <p><a href={resume} target="_blank">Resume</a></p>
          <p>Site in progress</p>
          <LinkedInIcon />
          <EmailIcon href="youtube.com"/>
          <GitHubIcon />
          </div>
      </div>
      <div className='skills'> 
      <h1> skills</h1>
      <ol className='list'>
        <li className='item'>
          <h2>Skills</h2>
          <span>
            ReactJS, NodeJS, Flask, MongoDB, Pytest HTML, CSS, NPM,
             MaterialUI, git, Linux, Agile development
          </span>
        </li>
        <li className='item'>
          <h2>Languages</h2>
          <span>
            Python, Java, JavaScript, C, C++, Bash, C#
          </span>
        </li>
        <li className='item'>
          <h2>Relevant Courses
          </h2>
          <span>
            CISC235(Data Structures)<br></br> CISC324(Operating Systems)<br></br> 
            CISC327(Software Quality Assurance)<br></br> CISC221(Computer Architecture)<br></br> 
            CISC220(System Level Programming)<br></br> CISC223(Software Specifications)<br></br>
            CISC124(Object Oriented Programming)
          </span>
          <h4>Next Semester</h4>
          <span>
            CISC365(Algorithms)<br></br> CISC322(Software Architecture)<br></br>
             CISC335(Computer Networks)<br></br> CISC360(Programming Paradigms)
            
          </span>
        </li>
      </ol>
      </div>
    </div>
  );
}

export default Home;