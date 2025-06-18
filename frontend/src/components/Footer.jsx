import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} <strong>Sprintify</strong>. All rights reserved.
        </p>

        <div className="mb-3">
          <a href="#" className="text-white me-3 fs-4">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="text-white me-3 fs-4">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-white me-3 fs-4">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#" className="text-white fs-4">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        <div>
          <a href="#" className="text-white me-3 text-decoration-none">Privacy Policy</a>
          <a href="#" className="text-white me-3 text-decoration-none">Terms</a>
          <a href="#" className="text-white text-decoration-none">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
