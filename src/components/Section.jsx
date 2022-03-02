import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
const Section = ({text,subText,leftButton,rightButton,backgroundImg}) => {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
            <Text>
                <h1>{text}</h1>
                <p>{subText}</p>
            </Text>
        </Fade>
        <ButtonWrapper>
            <Fade bottom>
                <ButtonsDiv>
                    <LeftButton>{leftButton}</LeftButton>
                    {rightButton!=""?
                        <RightButton>{rightButton}</RightButton>
                        : null
                    }
                </ButtonsDiv>
            </Fade>
            <DownArrow src="/images/down-arrow.svg"/>
        </ButtonWrapper>
    </Wrap>
  )
  
}

export default Section
const Wrap=styled.div`
        z-index: 10;
        width: 100vw;
        height:100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size:cover;
        background-image: ${props=>`url("/images/${props.bgImage}")`};
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
`
const Text=styled.div`
    padding-top: 15vh;
    text-align:secnter;
    font-family: "Rubik",sans-serif;
    font-size: 1.1em;
`
const ButtonWrapper=styled.div`

`
const ButtonsDiv=styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 748px){
        flex-direction: column;
    }
    
`
const LeftButton=styled.div`
    background-color: rgba(23,26,32,0.8);
    width:256px;
    height:40px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
const RightButton=styled(LeftButton)`
    background: white;
    opacity: 0.65s;
    color:black;
`
const DownArrow=styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`