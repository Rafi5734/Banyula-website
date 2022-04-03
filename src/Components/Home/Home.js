import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Explore from '../Explore/Explore';
import "./home.css"
const Home = () => {
  return (
    <>
      <Container fluid className="mt-3 home-header">
        <Container className="header-wrapper">
          <div className="under-wrapper">
            <h1 className="header-1">Every Eco & Health Living</h1>
            <p className="para1">
              We are your ultimate source of curated products that are
              sustainable, conscious, and of the highest ethical standards. We
              partner with some of Australia's leading sustainable brands in the
              industry and we constantly update our selection to ensure that you
              have access to purpose-built, cruelty free and eco-friendly
              products to suit your needs and help save the planet.
            </p>
            <Button variant="outline-dark" className="mt-5">
              Shop Now
            </Button>
          </div>

          <div className="under-wrapper"></div>
        </Container>
      </Container>
      
    </>
  );
};

export default Home;
