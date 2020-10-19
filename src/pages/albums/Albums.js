import React from 'react';
import styled from 'styled-components';

const List = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

const Album = styled.div`
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

const Albums = () => {
  const albums = Array.from(Array(60).keys());

  return (
    <List>
      {albums.map((item) => (
        <Album>
          <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12.8">
              <defs>
                <style>.a</style>
              </defs>
              <g fill="#f7f783" transform="translate(-2 -4)">
                <path
                  className="a"
                  d="M8.4,4H3.6A1.6,1.6,0,0,0,2,5.6v9.6a1.6,1.6,0,0,0,1.6,1.6H16.4A1.6,1.6,0,0,0,18,15.2v-8a1.6,1.6,0,0,0-1.6-1.6H10Z"
                />
              </g>
            </svg>
          </Icon>
          <Name>21</Name>
        </Album>
      ))}
    </List>
  );
}

export default Albums;