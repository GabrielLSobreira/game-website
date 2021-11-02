import { ChangeEvent, ReactElement } from 'react';
import { Game } from '../../types';
import { GameCard } from '../GameCard';
import { GameFilter } from '../GameFilter';
import { Loading } from '../Loading';
import { Error, List, ListItem } from './styles';

interface Props {
  err?: string;
  games: Game[];
  onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void;
  loading: boolean;
}

export const GameListRender = ({ err, games, onFilterChange, loading }: Props): ReactElement => {
  if (err) {
    return (
      <div>
        <GameFilter onChange={onFilterChange} />
        <Error>Unable to fetch games 😞</Error>
      </div>
    );
  }
  if (!loading && !games?.length) {
    return (
      <div>
        <GameFilter onChange={onFilterChange} />
        <Error>No games available 😞</Error>
      </div>
    );
  }

  return (
    <>
      <GameFilter onChange={onFilterChange} />
      {loading ? (
        <Loading />
      ) : (
        <>
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
