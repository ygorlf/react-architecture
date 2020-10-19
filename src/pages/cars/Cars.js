import React from 'react';
import styled from 'styled-components';

const List = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

const Car = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 8%;
  margin: .75rem 1%;
`;

const Icon = styled.div`
  width: 60px;
  height: 52px;
`;

const Name = styled.span`
  display: inline-block;
  margin-top: .5rem;
  color: #505050;
  font: 600 .85rem 'Roboto', sans-serif;
`;

const Cars = () => {
  const cars = Array.from(Array(60).keys());

  return (
    <List>
      {cars.map((item) => (
        <Car>
          <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="#f7f783" d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z" />
            </svg>
          </Icon>
          <Name>Tiguan</Name>
        </Car>
      ))}
    </List>
  );
}

export default Cars;