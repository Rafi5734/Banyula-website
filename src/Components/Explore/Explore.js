import React from 'react';
import { Button, Container } from 'react-bootstrap';
import "./explore.css"
import ExploreImg from "../../images/explore-img.png"
const Explore = () => {
    return (
      <div>
        <Container className="explore-main">
          <img src={ExploreImg} alt="Explore-img" className="mt-5 mb-3"></img>
          <Button variant="dark" className="mb-5">Explore Our Values</Button>{" "}
        </Container>
      </div>
    );
};

export default Explore;
