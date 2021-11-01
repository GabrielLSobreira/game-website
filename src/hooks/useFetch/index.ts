import axios from 'axios';
import { useEffect, useState } from 'react';
import { Filter } from '../../components/GameList/types';
import { Game } from '../../types';
import { API_HOST, API_KEY } from './constants';

type Response = {
  games: Game[];
  error?: string;
};

export const useFetch = (params: Filter): Response => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState<string>('');
  const { platform, genre, sortBy } = params;

  useEffect(() => {
    axios
      .get('/games', {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST,
        },
        params: {
          platform,
          category: genre,
          'sort-by': sortBy,
        },
      })
      .then((res) => setGames(res.data))
      .catch((e) => setErr(e.message));
  }, [platform, genre, sortBy]);

  return {
    games,
    error: err,
  };
};
