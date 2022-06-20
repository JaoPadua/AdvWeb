import { ArrowRightOutlined } from '@material-ui/icons';
import { ArrowLeftOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import  {sliderItems}  from "../data.js";
import { useState } from 'react';
import { Mobile } from '../responsive.js';
import { Link } from 'react-router-dom'


const Container= styled.div`
width: 100%;
height: 100vh;
display: flex;
background-color: white;
position: relative;
overflow: hidden;
${Mobile({display: "none"})}
`;


const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=>props.direction === "left" && "10px"};
right: ${props=>props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 50%;
z-index: 2;
`;

const Wrapper = styled.div`
height: 100%;
display: flex;
transform: translate(${props=>props.SlideIndex* -100}vw);
`;

const Slide = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
background-color: #${props=>props.bg};
`;
const ImgContainer = styled.div`
height: 100%;
flex: 1;
`;

const Image = styled.img`
height: 80%;
`;

const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`;

const Title = styled.h1`
font-size: 70px;
`;
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px; 
`;
const Button = styled.button`
padding: 20px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
border-radius: 14px;
background-color: teal;
color: white;
`;


const Slider = () => {

  const [SlideIndex, setSlideIndex] = useState(0); 
  const handleClick =(direction) =>{
    if(direction ==="left"){
      setSlideIndex(SlideIndex > 0 ? SlideIndex-1 :2)
    } else {
      setSlideIndex(SlideIndex < 2 ? SlideIndex+1 :0)
    }
  };
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined />
        </Arrow>
            <Wrapper SlideIndex ={SlideIndex}>
            {sliderItems.map(item=>(       
            <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
                <Image src={item.Images} alt={item.alt} />
            </ImgContainer>
            <InfoContainer>
                <Title>
                {item.title}
                </Title>
                <Desc>
                  {item.desc}
                </Desc>
                <Link to ="/products/:category">
                <Button>
                  SHOP NOW
                </Button>
                </Link>
            </InfoContainer>
            </Slide>
            ))}
            </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider