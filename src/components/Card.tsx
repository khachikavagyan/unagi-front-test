import React, { HTMLAttributes, ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

import { PlayerData } from '../types';

export const Card: React.FC<PlayerData> = (props: PlayerData) => {
  const { player } = props;
  const { firstname, lastname, birthday, image } = player;

  return (
    <StyledCard>
      <StyledImage src={image} alt={`${firstname} ${lastname}`} />
      <StyledName>
        {firstname} {lastname}
      </StyledName>
      <StyledBirthday>Birthday: {new Date(birthday).toLocaleDateString()}</StyledBirthday>
    </StyledCard>
  );
};

const StyledCard = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const StyledImage = styled.img<ImgHTMLAttributes<HTMLImageElement>>`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 16px;
`;

const StyledName = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const StyledBirthday = styled.p`
  font-size: 16px;
  color: #666;
  margin: 8px 0 0 0;
`;
