import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10vh;
  padding: 0 5%;
  background-color: #cc95f0;
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font: 700 .9rem 'Roboto', sans-serif;
`;

const Header = () => {
  return (
    <Container>
      <StyledLink
        to={{
          pathname: '/albums'
        }}
      >
        Albums
      </StyledLink>
      <StyledLink
        to={{
          pathname: '/cities'
        }}
      >
        Cities
      </StyledLink>
      <StyledLink
        to={{
          pathname: '/cars'
        }}
      >
        Cars
      </StyledLink>
    </Container>
  );
}

export default Header;