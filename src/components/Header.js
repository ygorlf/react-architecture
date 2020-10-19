import React from 'react';
import { NavLink } from 'react-router-dom';
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

const StyledLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  font: 400 .9rem 'Roboto', sans-serif;

  &.active {
    border-bottom: 2px solid #000;
    font: 700 .9rem 'Roboto', sans-serif;
  }
`;

const Header = () => {
  return (
    <Container>
      <StyledLink
        to={{
          pathname: '/albums'
        }}
        activeClassName="active"
      >
        Albums
      </StyledLink>
      <StyledLink
        to={{
          pathname: '/cities'
        }}
        activeClassName="active"
      >
        Cities
      </StyledLink>
      <StyledLink
        to={{
          pathname: '/cars'
        }}
        activeClassName="active"
      >
        Cars
      </StyledLink>
    </Container>
  );
}

export default Header;