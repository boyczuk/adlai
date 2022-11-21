import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon onClick={event => window.open('https://instagram.com/boyczuk')} />
            <LinkedInIcon onClick={event => window.open('https://www.linkedin.com/in/adlai-bridson-boyczuk-288b19195/')}/>
            <GithubIcon onClick={event => window.open('https://github.com/boyczuk')}/>
        </div>
        <p> &copy; 2022 adlai.ca | 19aibb@queensu.ca</p>
    </div>
  );
}

export default Footer;