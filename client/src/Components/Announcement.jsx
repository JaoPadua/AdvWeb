import styled, { keyframes } from "styled-components"

const textScroll = keyframes`
  from {
    -webkit-transform: translateX(0%);
           transform: translateX(0%);
  }
  to {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
  }
`
const Desc = styled.p`
height: 30px;
color: #eb8921;
display: flex;
align-items: center;
justify-content: flex-end;
font-style: 14px;
font-weight: bold;
animation: ${textScroll} 15s linear infinite;
`

const Container =styled.div`
background-color: teal;
`;


const Announcement = () => {
  return (
    <Container>
      <Desc>
      Simple The best Super Deal for all products.
      </Desc>
    </Container>
  )
}

export default Announcement