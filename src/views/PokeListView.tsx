import { FC, useEffect, useState } from "react";

import PokeList from "../components/pokeList/PokeList";
import Search from "../components/pokeList/Search";
import { fetchPokemonList } from "../actions/fetchPokemonList";

const PokeListView: FC = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPokemonList()
      .then((res) => res.json())
      .then(
        (result) => {
          setPokemonList(result.results);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  const onSearchChange = (search: string) => {
    setNameFilter(search);
  };

  return (
    <div className="poke-list-view top-level-view">
      <h1>PokeList</h1>
      {error && <div>{error}</div>}
      {!error && pokemonList.length === 0 && <div>Loading...</div>}
      {!error && pokemonList.length && (
        <>
          <Search nameFilter={nameFilter} inputHandler={onSearchChange} />
          <PokeList list={pokemonList} nameFilter={nameFilter} />
        </>
      )}
    </div>
  );
};

export default PokeListView; // It's useful to export the default in its own line so we can easily swap it out during development
