import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import "../styles/Header.css";

function Header() {
  return (
    <div className='header'>
        <div className='title'>
            <h1>Adlai.ca</h1>
        </div>
        <div className='socialMedia'>
            <InstagramIcon onClick={event => window.open('https://instagram.com/boyczuk')} />
            <LinkedInIcon onClick={event => window.open('https://www.linkedin.com/in/adlai-bridson-boyczuk/')}/>
            <GithubIcon onClick={event => window.open('https://github.com/boyczuk')}/>
        </div>
    </div>
  );
}

export default Header;