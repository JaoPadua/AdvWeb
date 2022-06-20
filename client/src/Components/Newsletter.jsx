import { Send } from '@material-ui/icons'
import styled from 'styled-components';
import React from 'react'
import { Mobile } from '../responsive';

const Container = styled.div`
height: 60vh;
background-color: #FFE8D3;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`;

const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${Mobile({textAlign: "center"})}
`;

const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${Mobile({width: "80%"})}
`;


const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;

`;
const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
border-radius: 2px;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>
            Newsletter
        </Title>
        <Desc>
        Get timely updates from your favorite consoles
        </Desc>
        <InputContainer>
            <Input placeholder = "Your Email Address"/>
            <Button>
                <Send>

                </Send>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter