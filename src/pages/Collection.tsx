import React, { useState, useEffect } from 'react';

import { fetchCollection } from '../lib/collection';
import { PlayerData } from '../types';
import { Card } from '../components/Card';

export const Collection: React.FC = () => {
  const [collection, setCollection] = useState<PlayerData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCollection(26166);
        setCollection(data);
      } catch (err) {
        setError('Failed to fetch collection');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const player = collection?.player;
  if (!player) {
    return <p>Player data not available</p>;
  }

  return <Card {...collection} />;
};
