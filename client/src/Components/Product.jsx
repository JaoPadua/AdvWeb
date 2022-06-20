import { SearchOutlined } from '@material-ui/icons';
import { FavoriteBorderOutlined } from '@material-ui/icons';
import { ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Info = styled.div`
opacity: 0;
width: 99%;
height: 90%;
position: absolute;
top: 0;
left: 0;
background-color:  rgba(0,0,0, 0.1);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
`;

const Container = styled.div`
flex: 1;
margin: 50px;
max-width: 280px;
max-height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;

&:hover ${Info}{
opacity: 1;
}
`;

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`;

const Image = styled.img`
height: 80%;
z-index: 2;
`;

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
cursor: pointer;
&:hover{
    background-color: white;
    transform: scale(1.5);
}
`;

const Title = styled.h1`
color: orange;
margin-bottom: 20px;
`;


const Product = ({item}) => {
  return (
  <Container>
    <Circle />
    <Image src ={item.Image}/>
    <Info>
        <Icon>
            <Link style={{textDecoration: 'none'}} to ="/cart">
            <ShoppingCartOutlined />
            </Link>
        </Icon>
        <Icon>
            <Link to = "/product/:id">
            <SearchOutlined />
            </Link>
        </Icon>
        <Icon>
            <FavoriteBorderOutlined />

        </Icon>
    </Info>
  </Container>
  )
}

export default Product