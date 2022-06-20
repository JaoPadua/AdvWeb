import { Instagram } from "@material-ui/icons";
import { YouTube } from "@material-ui/icons";
import { Phone } from "@material-ui/icons";
import { MailOutline } from "@material-ui/icons";
import { Room } from "@material-ui/icons";
import { Twitter } from "@material-ui/icons";
import { Facebook } from "@material-ui/icons";
import styled from "styled-components"
import { Mobile } from "../responsive";

const Container = styled.div`
display: flex;
${Mobile({flexDirection: "Column"})}
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Center = styled.div`
padding: 20px;
flex: 1;
${Mobile({display: "none"})}
`;

const Title =styled.h3`
margin-bottom: 30px;
`;

const List =  styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const LinkItem =  styled.a`
width: 50%;
margin-bottom: 10px;;
cursor: pointer;
`;


const Right = styled.div`
padding: 20px;
flex: 1;
${Mobile({backgroundColor: "#fff8f8"})}
`;

const Logo = styled.h1`

`;
const Desc = styled.p`
margin: 20px 0px;

`;
const SocialContainer = styled.div`
display: flex;

`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;


const Footer = () => {
  return (
    <Container>
    <Left>
        <Logo>ConsoleGeek</Logo>
        <Desc>
            Shop that will provide you reasonable price for your console games 
        </Desc>
        <SocialContainer>
            <SocialIcon color ="385999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color ="E4405F">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color ="55ACEE">
                <Twitter/>
            </SocialIcon>
            <SocialIcon color ="E60023">
                <YouTube/>
            </SocialIcon>
        </SocialContainer>
    </Left>
    <Center>
        <Title>Useful Links</Title>
        <List>
            <LinkItem>Home</LinkItem>
            <LinkItem>Cart</LinkItem>
            <LinkItem>Xbox Products</LinkItem>
            <LinkItem>Playstation Products</LinkItem>
            <LinkItem>Nintendo Products</LinkItem>
            <LinkItem>MyAccount</LinkItem>
            <LinkItem>Wishlist</LinkItem>
            <LinkItem>Terms</LinkItem>
        </List>
    </Center>
    <Right>
    <Title>
        Contact
    </Title>  
    <ContactItem><Room style={{marginRight:"10px"}}/>
        Metro,Manila
    </ContactItem>
    <ContactItem><Phone style={{marginRight:"10px"}}/>
       +63 XXX-XXXX-XXX
    </ContactItem>
    <ContactItem><MailOutline style={{marginRight:"10px"}}/>
       ConsoleGeek@gmail.com
    </ContactItem>
    </Right>
 
    </Container>
  )
}

export default Footer