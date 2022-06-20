import React from 'react'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import styled from 'styled-components'
import { Add } from '@material-ui/icons'
import { Remove } from '@material-ui/icons'
import { Mobile } from '../responsive'
import { Link } from 'react-router-dom'


const Container = styled.div`

`
const Wrapper = styled.div`
padding: 20px;
${Mobile({padding: "10px"})}
`;
const Title = styled.h1`
font-weight: 300;
text-align: center;
`;
const Top = styled.div`
display:flex;
align-items: center;
justify-content: center;
padding: 20px;
`;

const TopButton = styled.button`
padding: 15px;
font-weight: 600;
cursor: pointer;
border:${(props) => props.type === "filled" && "none"};
background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
color: ${(props) => props.type === "filled" && "white"};
border-radius: 14px;
`;

const TopTexts = styled.div`
${Mobile({display: "none"})}
`;

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${Mobile({flexDirection: "column"})}

`;

const Info =styled.div`
flex: 3;
`;

const Summary =styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 0%;
padding: 20px;
height: 50vh;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
${Mobile({flexDirection: "column"})}
`;
const Image = styled.img`
width: 200px;
`;

const ProductDetails = styled.div`
flex:2;
display: flex;

`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`;

const ProductID = styled.span`
`;
const ProductName = styled.span`
`;
const ProductType = styled.span`
`;

const PriceDetail = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const ProductAmountContainer= styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;

`;


const ProductAmount= styled.div`
font-size: 24px;
margin: 5px;
${Mobile({margin: "5px 15px", padding: "10px"})}
`;



const ProductPrice= styled.div`
font-size: 30px;
font-weight: 200;
${Mobile({marginBottom: "20px"})}
`;

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
margin: 10px;
`;
const SummaryTitle = styled.h1`
font-weight: 200;
`;
const SummaryItemPrice = styled.span`
`;
const SummaryItemText = styled.span`
`;

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "Total" && "500"};
font-size:   ${props=>props.type === "Total" && "24px"};
`;

const Button = styled.button`
padding: 10px;
width: 100%;
background-color: black;
color: white;
font-weight: 600;
border-radius: 14px;;
`;

const Cart = () => {
  return (
   <Container>
     <Navbar />
     <Announcement />
    <Wrapper>
      <Title>Your Bag</Title>
      <Top>
        <Link to ="/products/:category">
        <TopButton>Continue Shopping</TopButton>
        </Link>
        <TopTexts>
          <TopText>Shopping Bag(2)</TopText>
          <TopText>Your Wishlist(0)</TopText>
        </TopTexts>
       {/* <TopButton type="filled">Checkout Now</TopButton>*/}
      </Top>
      <Bottom>
        <Info>
          <Product>
            <ProductDetails>
            <Image src="Images/Ps4Products/spiderman.jpg"/>
            <Details>
            <ProductName><b>Product:</b>Marvels Spiderman 2018</ProductName>
            <ProductID><b>ID:</b>9369158174713</ProductID>
            <ProductType><b>ConsoleType:</b>Ps4</ProductType>
            </Details>         
            </ProductDetails>
            <PriceDetail>
            <ProductAmountContainer>
            <Add/>
            <ProductAmount>1</ProductAmount>
            <Remove/>
            </ProductAmountContainer>
            <ProductPrice>₱ 1000</ProductPrice>
          </PriceDetail>
          </Product>
          <Hr/>
          <Product>
            <ProductDetails>
            <Image src="Images/XboxProducts/codghost.jpg"/>
            <Details>
            <ProductName><b>Product:</b>Call of Duty Ghost</ProductName>
            <ProductID><b>ID:</b>5081527157</ProductID>
            <ProductType><b>ConsoleType:</b>XboxOne</ProductType>
            </Details>         
            </ProductDetails>
            <PriceDetail>
            <ProductAmountContainer>
            <Add/>
            <ProductAmount>1</ProductAmount>
            <Remove/>
            </ProductAmountContainer>
            <ProductPrice>₱ 1000</ProductPrice>
          </PriceDetail>
          </Product>
        </Info>
        <Summary>
        <SummaryTitle>Order Summary</SummaryTitle>
        <SummaryItem>
          <SummaryItemText>SubTotal</SummaryItemText>
          <SummaryItemPrice>₱ 2000</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemText>ShippingFee</SummaryItemText>
          <SummaryItemPrice>₱ 500</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem  type ="Total">
          <SummaryItemText>Total</SummaryItemText>
          <SummaryItemPrice>₱ 2000</SummaryItemPrice>
        </SummaryItem>
        <Button>CheckOut Now</Button>
        </Summary>
      </Bottom>
    </Wrapper>
     <Footer />
   </Container>
  )
}

export default Cart