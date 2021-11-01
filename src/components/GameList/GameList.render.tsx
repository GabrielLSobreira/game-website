import { ChangeEvent, ReactElement } from 'react';
import { Game } from '../../types';
import { GameCard } from '../GameCard';
import { GameFilter } from '../GameFilter';
import { Loading } from '../Loading';
import { List, ListItem } from './styles';

interface Props {
  err?: string;
  games: Game[];
  onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void;
  loading: boolean;
}

export const GameListRender = ({ err, games, onFilterChange, loading }: Props): ReactElement => {
  if (err) {
    return <p>Unable to fetch games</p>;
  }
  if (!loading && !games?.length) {
    return <p>No games available</p>;
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <GameFilter onChange={onFilterChange} />
          <List>
            {games.map((game) => (
              <ListItem key={game.id}>
                <GameCard content={game} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    </>
  );
};
