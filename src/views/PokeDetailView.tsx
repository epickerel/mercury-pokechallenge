import { FC, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPokemon } from "../actions/fetchPokemon";
import { Pokemon } from "../types";

const PokeDetailView: FC = () => {
  const id = useParams<{ id: string }>().id || "";
  const [pokemon, setPokemon] = useState({} as Pokemon);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPokemon(id).then(
      (result) => {
        setPokemon(result);
      },
      (error) => {
        setError(error);
      }
    );
  }, [id]);

  // This is the final functionality I'm doing, and the data type is taking some digging.
  // I do see that there are libraries to load this data, but I'm trying to keep it simple.
  return (
    <div className="poke-detail-view top-level-view">
      <Link to="/">Back to List</Link>
      <div className="poke-detail">
        {error && <div>Error: {error}</div>}
        {!error && (
          <>
            <h1>{pokemon.name}</h1>
            <p className="abilities">
              Type:{" "}
              {(pokemon.types || []).map((type) => type.type.name).join(", ")}
            </p>
            <p className="base-experience">
              Base Experience: {pokemon.base_experience}
            </p>
            <p className="abilities">
              Abilities:{" "}
              {(pokemon.abilities || [])
                .map((ability) => ability.ability.name)
                .join(", ")}
            </p>
            <img
              className="pokemon_img"
              src={pokemon.sprites?.other.home.front_default}
              alt={pokemon.name}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default PokeDetailView;
