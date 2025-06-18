import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.jpeg'; 

function HeroSection() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
       
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-4 fw-bold mb-3">
            Welcome to <span className="text-primary">Sprintify</span>
          </h1>
          <p className="lead mb-3">
            Plan, track, and manage your projects with ease.
          </p>
          <p className="mb-4">
            Sprintify helps teams stay organized, hit deadlines, and deliver results — all in one powerful dashboard.
          </p>
          <div>
            <Link to="/signup" className="btn btn-primary btn-lg me-3">
              Get Started
            </Link>
            <Link to="/projects" className="btn btn-outline-secondary btn-lg">
              View Projects
            </Link>
          </div>
        </div>

       
        <div className="col-md-6 text-center mt-5 mt-md-0">
          <img
            src={heroImage}
            alt="Project illustration"
            className="img-fluid"
            style={{ maxHeight: '350px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
