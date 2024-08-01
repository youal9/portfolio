import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
 
    return (
        <div className='contact'>

          <h1 className='contact-title'>Kontakta Mig</h1>

          <div className='contact-details'>
            <p><strong><FontAwesomeIcon icon={faEnvelope} size="lg" /> E-post:</strong> Youal111@outlook.com</p>
            <p><strong><FontAwesomeIcon icon={faPhone} size="lg" /> Telefon:</strong> +46 728751381</p>
            <p><strong><FontAwesomeIcon icon={faLocationPin} size="lg" /> Plats:</strong> Stockholm, Sweden</p>
          </div>

          <div className='social-media'>
            <a href="https://www.linkedin.com/in/youal-woldemariam/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="https://github.com/youal9" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            
          </div>

        </div>
      );
    }

export default Contact
