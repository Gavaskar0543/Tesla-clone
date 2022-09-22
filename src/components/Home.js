import React from 'react'
import styled from 'styled-components'
import Section from './Section'


function Home() {
  return (
    <Container>
       
       <Section 
       title="Model 3"
       description="order online for Touchless Delivery"
       backgroundimage="model-s.jpg"
       leftButtonText="custom order"
       rightbuttonText="Existing inventory"
       
       />
       <Section 
        title="Model y"
        description="order online for Touchless Delivery"
        backgroundimage="model-y.jpg"
        leftButtonText="custom order"
        rightbuttonText="Existing inventory" />
       <Section 
        title="Model s"
        description="order online for Touchless Delivery"
        backgroundimage="model-3.jpg"
        leftButtonText="custom order"
        rightbuttonText="Existing inventory"/>
       <Section 
        title="Model x"
        description="order online for Touchless Delivery"
        backgroundimage="model-x.jpg"
        leftButtonText="custom order"
        rightbuttonText="Existing inventory"/>
           <Section 
        title="solar panels"
        description="Lowest cost solar panels in America"
        backgroundimage="solar-panel.jpg"
        leftButtonText="custom order"
        rightbuttonText="Existing inventory"/>
           <Section 
        title="Solar Roof"
        description="produce Clean Energy from your Roof"
        backgroundimage="solar-roof.jpg"
        leftButtonText="custom order"
        rightbuttonText="Existing inventory"/>
         
    </Container>
  )
}

export default Home
const Container =styled.div`
height:100vh;



`