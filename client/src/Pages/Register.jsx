import React from 'react'
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import { Mobile } from '../responsive';

const Container = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient
(rgba(177,170,170,0.5),

rgba(177,170,170,0.5)

),
url("Images/ps4-registerpic.jpg") center;

display: flex;
align-items: center;
justify-content: center;
background-repeat: no-repeat;
`;


const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
${Mobile({width: "75%"})}
`;


const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;

`;


const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;


const Agreement = styled.p`
font-size: 13px;
margin: 20px 0px;
`;


const Button = styled.button`
width: 40%;
margin: 20px 0px;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
border-radius: 14px;
${Mobile({width: "100%"})}
justify-content: center;
align-items: center;
display: flex;
`;

const Link = styled.a`
margin: 10px 0px;
font-size: 15px;
text-decoration: underline;
cursor: pointer;
margin: 0 10px; 
justify-content: center;
align-items: center;
display: flex;
`;



const Register = () => {
  return (
    <div>
    <Container>
        <Wrapper>
            <Title>
                Create an account
            </Title>
            <Form>
                <Input placeholder="FirstName"/>
                <Input placeholder="LastName"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="ConfirmPassword"/>
            </Form>
            <Agreement>
                By Creating an account, I consent to the processing of my personal
                data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>Create Account</Button>
            <br />
            <Link>Already Have an Account?</Link>
        </Wrapper>   
    </Container>
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default Register