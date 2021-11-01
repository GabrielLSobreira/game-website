import { ChangeEvent, ReactElement } from 'react';
import { GENRES, PLATFORMS, SORT_BY } from './constants';

interface Props {
  onChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

export const GameFilter = ({ onChange }: Props): ReactElement => (
  <form onChange={onChange}>
    <label htmlFor="platform-select">
      Platform:
      <select name="platform" id="platform-select">
        {PLATFORMS.map((platform) => (
          <option key={platform.value} value={platform.value}>
            {platform.display}
          </option>
        ))}
      </select>
    </label>

    <label htmlFor="genre-select">
      Genre:
      <select name="genre" id="genre-select">
        {GENRES.map((genre) => (
          <option key={genre.value} value={genre.value}>
            {genre.display}
          </option>
        ))}
      </select>
    </label>

    <label htmlFor="sortBy-select">
      Sort By:
      <select name="sortBy" id="sortBy-select">
        {SORT_BY.map((sortBy) => (
          <option key={sortBy.value} value={sortBy.value}>
            {sortBy.display}
          </option>
        ))}
      </select>
    </label>
  </form>
);
