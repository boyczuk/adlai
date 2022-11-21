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
            <InstagramIcon />
            <LinkedInIcon />
            <GithubIcon />
            <EmailIcon />
        </div>
        <p> &copy; 2022 adlai.ca</p>
    </div>
  );
}

export default Footer;