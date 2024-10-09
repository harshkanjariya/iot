import React from 'react';
import {Link} from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Hello! I'm Harsh Kanjariya, a Software Engineer.</p>
      <p>This is a simple website to showcase my skills, experience, and projects.</p>
      <div className="links">
        <Link to="/privacy-policy">Privacy Policy</Link> |
        <Link to="/terms-of-service">Terms of Service</Link>
      </div>
    </div>
  );
};

export default Home;
