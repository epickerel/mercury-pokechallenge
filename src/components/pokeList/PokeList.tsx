import { FC, useEffect, useState } from "react";
import { PokeListType } from "../../types";
import PokeCard from "./PokeCard";

interface PokeListProps {
  list: Array<PokeListType>;
  nameFilter: string;
}

const PokeList: FC<PokeListProps> = ({ list, nameFilter }) => {
  const [filtered, setFiltered] = useState<Array<PokeListType>>([]);
  useEffect(() => {
    setFiltered(
      list.filter((pokemon) => pokemon.name.includes(nameFilter.toLowerCase()))
    );
  }, [nameFilter, list]);

  return (
    <ul className="pokeList">
      {filtered.map((pokemon) => (
        <li key={pokemon.name}>
          <PokeCard pokemonInList={pokemon} />
        </li>
      ))}
    </ul>
  );
};

export default PokeList;
