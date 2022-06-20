import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Search } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { Mobile } from '../responsive.js';
import { Link } from "react-router-dom";

const Container = styled.div`
 height: 60px;
 ${Mobile({height: "50px"})}
`;
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
${Mobile({padding: "10px 0px"})}
`;
const Left = styled.div`
flex: 1;
display: flex;
align-items:center;
`;


const SearchContainer = styled.div`
border: 0.5px solid lightgrey;
display: flex;
align-items: center;
margin-left: 10px;
padding: 5px;
`;

const Input = styled.input` 
border: none;

${Mobile({width: "50px"})}
`;

const Logo = styled.h1`
font-weight: bold;

${Mobile({fontSize: "24px"})}
`;

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content:flex-end;
${Mobile({ flex:3,justifyContent: "center"})}
`;
const Center = styled.div`
flex: 1;
text-align: center;
`;

const Menuitem = styled.div`
font-style:  14px;
cursor: pointer;
margin-left: 25px;

${Mobile({fontSize: "12px" , marginLeft: "10px"})}
`;



const Navbar = () => {
  return (
    <Container>
    <Wrapper>
        <Left>
            <SearchContainer>
                <Input placeholder='Search' />
               <Search style={{color:"gray", fontSize: 16}} />
            </SearchContainer>
        </Left>
        <Center>
           <Logo>ConsoleGeek</Logo>
        </Center>
        <Right>
            <Link style={{textDecoration: 'none'}} to ="/">
            <Menuitem>Home</Menuitem>
            </Link>
            <Link style={{textDecoration: 'none'}} to = "/register">
            <Menuitem>Register</Menuitem>
            </Link>
            <Link style={{textDecoration: 'none'}} to ="/login">
            <Menuitem>Login</Menuitem>
            </Link>
            <Link style={{textDecoration: 'none'}} to ="/cart">
            <Menuitem>
            <Badge badgeContent={2} color="secondary">
             <ShoppingCartOutlined />
            </Badge>
            </Menuitem>
            </Link>
        </Right>
    </Wrapper>
    </Container>
  )
}

export default Navbar