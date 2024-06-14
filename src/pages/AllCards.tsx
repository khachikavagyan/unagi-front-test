import React, {
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';

import { fetchAllCards } from '../lib/collection';
import { PlayerData } from '../types';
import { Card } from '../components/Card';

export const AllCards = () => {
  const [cards, setCards] = useState<PlayerData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllCards();
        setCards(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cards:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <h1>All Cards</h1>
      {loading ? (
        <StyledBirthdayLoadingMessage>Loading...</StyledBirthdayLoadingMessage>
      ) : (
        <StyledCardList>
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </StyledCardList>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const StyledBirthdayLoadingMessage = styled.p`
  font-size: 18px;
  text-align: center;
`;

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;
