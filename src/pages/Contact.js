import React from 'react';
import SnowWhite from '../assets/Snow-White.png';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div className="leftSide" style={{ backgroundImage: `url(${SnowWhite})` }}></div>
        <div className="rightSide">
            <h1> Contact Us </h1>

            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Your Name</label>
                <input name='name' placeholder='' type='text' />

                <label htmlFor='email'>Your Email</label>
                <input name='email' placeholder='' type='email' />

                <label htmlFor='message'>Message</label>
                <textarea rows='6' placeholder='' required></textarea>

                <button type='submit'> Send Message </button>
            </form>
        </div>
    </div>
  )
};

export default Contact;