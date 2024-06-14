import { Player } from '../types';

export const fetchCollection = async (id?: number) => {
  const response = await fetch(`http://localhost:8001/cards/${id}`);
  const data = await response.json();
  return data;
};

export const fetchAllCards = async () => {
  const response = await fetch('http://localhost:8001/cards');
  const data = await response.json();
  return data;
};

export const addPlayer = async (playerData: Player) => {
  try {
    const id = Math.floor(Math.random() * 1000000);
    const playerWithId = {
      id,
      player: playerData,
    };
    const response = await fetch(`http://localhost:8001/cards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(playerWithId),
    });

    if (!response.ok) {
      throw new Error('Failed to add player');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding player:', error);
    throw error;
  }
};
