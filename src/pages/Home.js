import React from 'react'
import { Link } from 'react-router-dom';
import BannerImage from '../assets/crumblePie.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className='headerContainer'>
            <h1>Snow White's Apple Pies</h1>
            <p>THE SWEETEST OF THEM ALL</p>
            <Link to='/menu'>
                <button> ORDER NOW </button>
            </Link>
        </div>  
    </div>
  );
}

export default Home;