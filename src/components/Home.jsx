import React from 'react'
import Section from './Section'
import styled from 'styled-components'
const Home = () => {
  return (
    <div>
      <Container>
        <Section 
          text="Model S" 
          subText="Order Online for Touchless Delivery"
          leftButton="CUSTOM ORDER"
          rightButton="EXISTING IVENTORY"
          backgroundImg="model-s.jpg"
          />
        <Section
          text="Model Y" 
          subText="Order Online for Touchless Delivery"
          leftButton="CUSTOM ORDER"
          rightButton="EXISTING IVENTORY"
          backgroundImg="model-y.jpg"
        />
        <Section
          text="Model 3" 
          subText="Order Online for Touchless Delivery"
          leftButton="CUSTOM ORDER"
          rightButton="EXISTING IVENTORY"
          backgroundImg="model-3.jpg"
        />
        <Section
          text="Model X" 
          subText="Order Online for Touchless Delivery"
          leftButton="CUSTOM ORDER"
          rightButton="EXISTING IVENTORY"
          backgroundImg="model-x.jpg"
        />
        <Section
          text="Solar Panels" 
          subText="Lowest Cost Solar Panels in America"
          leftButton="ORDER Now"
          rightButton="Learn more"
          backgroundImg="solar-panel.jpg"
        />
        <Section
          text="Solar Roof" 
          subText="Produce Clean Energy From Your Roof"
          leftButton="ORDER Now"
          rightButton="Learn more"
          backgroundImg="solar-roof.jpg"
        />
        <Section
          text="Accessories" 
          subText=""
          leftButton="shop Now"
          rightButton=""
          backgroundImg="accessories.jpg"
        />
        
      </Container>
    </div>
  )
}

export default Home
const Container=styled.div`
  height: 100vh;
`