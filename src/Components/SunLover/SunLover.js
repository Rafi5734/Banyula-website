import React from "react";
import { Button, Container } from "react-bootstrap";
import "./sunLover.css";
import OldLady from "../../images/old_lady.png";
const SunLover = () => {
  return (
    <div className="main-sun">
      <Container className="mt-5 sun-wrapper">
        <div className="under-wrapper2">
          <h5 className="mt-5 mb-1">SUN LOVER</h5>
          <h1 className="mb-3">Must-Have Beach Essential</h1>
          <p className="lead para2">Check out our must-have essentials</p>
          <Button variant="light">Shop Now</Button>
        </div>
        <div className="under-wrapper2">
          <img src={OldLady} alt="OldLady" className="img-fluid mt-4"></img>
        </div>
      </Container>
    </div>
  );
};

export default SunLover;
