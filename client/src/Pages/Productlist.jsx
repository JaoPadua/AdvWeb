import styled from 'styled-components';
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Products from '../Components/Products';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import { Mobile } from '../responsive';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
`;
const Title = styled.h1`
margin: 20px;
`;
const Filter = styled.div`
margin: 20px;
${Mobile({margin: "0px 20px",display:"flex",flexDirection:"column"})}
`;
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;
`;
const Option = styled.option`

`;


const Productlist = () => {
const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState();

  
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]:value,
    });
    console.log(filters)
  };
  return (
    <Container>
    <Navbar/>
    <Announcement/>
    <Title>CategoriesItem</Title>
    <FilterContainer>
        <Filter>
        <FilterText>Filter Products:</FilterText>
        <Select name="console" onChange={handleFilters}>
        <Option disabled>Color</Option>
            <Option>
            Xbox
            </Option>
            <Option>
            Playstation
            </Option>
            <Option>
             Nintendo
            </Option>
        </Select>
        </Filter>
        <Filter>
        <FilterText>Sort Products:</FilterText>
        <Select onChange={(e) => setSort(e.target.value)}>
        <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
            </Select>
        </Filter>
    </FilterContainer>
    <Products category={category} filters={filters} sort={sort} />
    <Newsletter/>
    <Footer/>
    </Container>
  )
}

export default Productlist;