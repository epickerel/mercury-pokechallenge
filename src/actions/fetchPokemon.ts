import { pokeService } from "../constants";

export const fetchPokemon = (id: string) => {
  const { url } = pokeService;

  return fetch(`${url}/${id}`);
};
