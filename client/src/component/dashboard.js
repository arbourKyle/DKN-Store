import React from "react";
import Navbar from "./component/navbar/Navbar";
import Profile from "./Profile";

const dashboard = () => {
    return (
      <div>
        <Container>
            <Navbar />
            <br>
            </br>
            <Profile />
          <Row>
            
            <Col className='text-center py-3'>&copy; Your logo here</Col>
          </Row>
        </Container>
        </div>
    )
  }
  export default dashboard;