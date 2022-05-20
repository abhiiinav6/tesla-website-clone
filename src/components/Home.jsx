import React from "react";
import styled from "styled-components";
import Section from "./Section";

import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <Container>
      <Fade right>
        <Section
          title="Model 3"
          description="Order Online for Touchless Delivery"
          bgimg="/images/model-3.jpg"
          leftButtonText="Custom Order"
          rightButtonText="Existing Inventory"
        />
      </Fade>
      <Fade right>
        <Section
          title="Model Y"
          description="Order Online for Touchless Delivery"
          bgimg="/images/model-y.jpg"
          leftButtonText="Custom Order"
          rightButtonText="Existing Inventory"
        />
      </Fade>
      <Fade right>
        <Section
          title="Model S"
          description="Order Online for Touchless Delivery"
          bgimg="/images/model-s.jpg"
          leftButtonText="Custom Order"
          rightButtonText="Existing Inventory"
        />
      </Fade>
      <Fade right>
        <Section
          title="Model X"
          description="Order Online for Touchless Delivery"
          bgimg="/images/model-x.jpg"
          leftButtonText="Custom Order"
          rightButtonText="Existing Inventory"
        />
      </Fade>
      <Fade right>
        <Section
          title="Solar Panels"
          description="Lowest Cost Solar Panels in America"
          bgimg="/images/solar-panel.jpg"
          leftButtonText="ORDER NOW"
          rightButtonText="LEARN MORE"
        />
      </Fade>
      <Fade right>
        <Section
          title="Solar Roof"
          description="Produce Clean Energy From Your Roof"
          bgimg="/images/solar-roof.jpg"
          leftButtonText="ORDER NOW"
          rightButtonText="LEARN MORE"
        />
      </Fade>
      <Fade right>
        <Section
          title="Accessories"
          description=""
          bgimg="/images/accessories.jpg"
          leftButtonText="SHOP NOW"
          rightButtonText=""
        />
      </Fade>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
