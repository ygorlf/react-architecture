import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {
  useQuery,
} from 'react-query';

import Loader from '../../components/Loader';

const List = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  width: 100%;
`;

const City = styled.div`
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

function useCities() {
  return useQuery('cities', async () => {
    const response = await axios.get('https://my-json-server.typicode.com/ygorlf/mock-data/cities');

    return response.data;
  });
};

const Cities = () => {
  const { status, data, error, isFetching } = useCities();

  if (isFetching) {
    return (
      <Loader />
    );
  }

  return (
    <List>
      {data.map((city) => (
        <City>
          <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="#f7f783" d="M23 18V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z" />
            </svg>
          </Icon>
          <Name>{city.name}</Name>
        </City>
      ))}
    </List>
  );
}

export default Cities;