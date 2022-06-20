import styled  from "styled-components";
import { Mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
flex: 1;
margin: 3px;
height: 86vh;
position: relative;
`;

const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
background: black;
${Mobile({height: "50vh"})}
`;

const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

const Title = styled.h1`
color: #eb8921;
margin-bottom: 20px;
`;

const Button = styled.button`
border: none;
padding: 20px;
background-color: white;
color: #000000;
cursor: pointer;
font-weight: 600;
border-radius: 14px;
`;


const CategoriesItem = ({item}) => {
  return (
    <Container>
    <Link to ={`/products/${item.category}`}>
      <Image src={item.Image}/>
      <Info>
        <Title>
          {item.Title}
        </Title>
        <Button>
          Shop Now
        </Button>
      </Info>
      </Link>
    </Container>
  )
}

export default CategoriesItem
