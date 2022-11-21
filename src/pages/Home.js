import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, my name is Adlai </h2>
        <div className='prompt'> <p> An aspiring Software Developer and Computer Science 
          student at Queen's University. </p>
          <p>Site in progress</p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
          </div>
      </div>
      <div className='skills'> 
      <h1> skills</h1>
      <ol className='list'>
        <li className='item'>
          <h2>Front-End</h2>
          <span>
            ReactJS, HTML, CSS, NPM, MaterialUI
          </span>
        </li>
        <li className='item'>
          <h2>Back-End</h2>
          <span>
            NodeJS, Flask, MongoDB, Pytest
          </span>
        </li>
        <li className='item'>
          <h2>Languages</h2>
          <span>
            JavaScript, Python, Java, C, C++, Bash, C#
          </span>
        </li>

      </ol>
      </div>
    </div>
  );
}

export default Home;