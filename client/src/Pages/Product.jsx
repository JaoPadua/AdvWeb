import React from 'react'
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import { Add } from '@material-ui/icons';
import { Remove } from '@material-ui/icons';
import { Mobile } from '../responsive';
const Container = styled.div`

`;
const Wrapper = styled.div`
padding: 50px;
display: flex;
${Mobile({padding: "10px",flexDirection:"column"})}
`;
const ImgContainer = styled.div`
flex: 1;
`;

const Image = styled.img`
width: 75%;
height: 100%;
object-fit: cover;
${Mobile({height: "50vh", width: "100%"})}
`;
const Title = styled.h1`
font-weight: 200;

`;
const InfoContainer = styled.div`
padding: 0px 50px;
flex: 1;
${Mobile({padding: "10px"})}
`;
const Desc = styled.p`
margin: 20px 0px;
`;

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`;

const AddContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 50%;
${Mobile({width: "100%"})}
`;
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;
const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;
border-radius: 14px;

&:hover{
    background-color: #f8f4f4;
}
`;

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src='../Images/Ps4Products/spiderman.jpg'/>
            </ImgContainer>
            <InfoContainer>
                <Title>
                    Marvel Spider-man
                </Title>
                <Desc>
                The worlds of Peter Parker and Spider-Man collide in an original, action-packed tale. 
                In this new Spider-Man universe, iconic characters from Peter and Spider-Man’s lives have been reimagined, 
                placing familiar characters in unique roles.
                </Desc>
                <Price>₱ 1,000</Price>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>Add to Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product