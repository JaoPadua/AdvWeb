import React from "react";
import styled from "styled-components";
import {categories} from "../data.js";
import { Mobile } from "../responsive.js";
import CategoriesItem from "./CategoriesItem";

const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${Mobile({padding: "0px", flexDirection:"column"})}
`;

const Categories = () => {
  return <Container>
    {categories.map(item=>(
        <CategoriesItem item={item} key={item.id}/>
    ))}
    </Container>
  
};

export default Categories