import React from 'react'
import styled from 'styled-components';
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
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
background-repeat: no-repeat;
`;


const Wrapper = styled.div`
width: 25%;
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
flex-direction: column;
`;


const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;

const Button = styled.button`
width: 50%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;
margin: 0 auto;
border-radius: 14px;
`;

const Link = styled.a`
margin: 10px 0px;
font-size: 14px;
text-decoration: underline;
cursor: pointer;
margin: 0 10px; 
justify-content: center;
align-items: center;
`;

const Login = () => {
  return (
    <div>
    <Container>
    <Wrapper>
        <Title>
            Sign in
        </Title>
        <Form>
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>
        </Form>
        <Button>Login</Button>
        <br />
        <Link>Forgot Password?</Link>  
        <Link>Create a New Account</Link>
    </Wrapper>
</Container>
<Newsletter/>
<Footer/>
</div>
  )
}

export default Login