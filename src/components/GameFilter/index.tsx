import { ChangeEvent, ReactElement } from 'react';
import { GENRES, PLATFORMS, SORT_BY } from './constants';
import { Form, Label, Select } from './styles';

interface Props {
  onChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

export const GameFilter = ({ onChange }: Props): ReactElement => (
  <Form onChange={onChange}>
    <Label htmlFor="platform-select">
      Platform:
      <Select name="platform" id="platform-select">
        {PLATFORMS.map((platform) => (
          <option key={platform.value} value={platform.value}>
            {platform.display}
          </option>
        ))}
      </Select>
    </Label>

    <Label htmlFor="genre-select">
      Genre:
      <Select name="genre" id="genre-select">
        {GENRES.map((genre) => (
          <option key={genre.value} value={genre.value}>
            {genre.display}
          </option>
        ))}
      </Select>
    </Label>

    <Label htmlFor="sortBy-select">
      Sort By:
      <Select name="sortBy" id="sortBy-select">
        {SORT_BY.map((sortBy) => (
          <option key={sortBy.value} value={sortBy.value}>
            {sortBy.display}
          </option>
        ))}
      </Select>
    </Label>
  </Form>
);
