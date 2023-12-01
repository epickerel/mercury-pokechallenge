import { FC } from "react";
import { Link } from "react-router-dom";
import { PokeListType } from "../../types";

interface PokeCardProps {
  pokemonInList: PokeListType;
}

const PokeCard: FC<PokeCardProps> = ({ pokemonInList }) => {
  const id = pokemonInList.url.split("/")[6];
  return (
    <div className="pokeCard">
      <h3>
        <Link to={`detail/${id}`}>{pokemonInList.name}</Link>
      </h3>
    </div>
  );
};

export default PokeCard;
