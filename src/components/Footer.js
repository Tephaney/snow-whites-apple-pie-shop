import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../styles/Footer.css';


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon />
            <FacebookIcon />
            <PinterestIcon />
            <YouTubeIcon />
        </div>
        <p className='footer-paragraph'>&copy; 2022 Made with <FavoriteIcon /> by Tephaney Stewart All Rights Reserved.</p>

    </div>
  )
};

export default Footer;