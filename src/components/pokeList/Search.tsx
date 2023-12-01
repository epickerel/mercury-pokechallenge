import React, { FC } from "react";

interface SearchProps {
  nameFilter: string;
  inputHandler: (input: string) => void;
}

// I got lost trying to remember the best way to have a parent state controlled by a sub-component
const Search: FC<SearchProps> = ({ nameFilter, inputHandler }) => {
  return (
    <div className="search">
      <input
        type="text"
        value={nameFilter}
        onInput={(ev) => inputHandler((ev.target as HTMLInputElement).value)}
      />
    </div>
  );
};

export default Search;
