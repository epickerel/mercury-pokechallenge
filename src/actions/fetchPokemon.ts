import { pokeService } from "../constants";

export const fetchPokemon = (id: string) => {
  const { url } = pokeService;
  const cached = sessionStorage.getItem(`pokeDetail-${id}`);
  if (cached) {
    return new Promise((resolve) => {
      resolve(JSON.parse(cached));
    }) as Promise<Response>;
  }

  return fetch(`${url}/${id}`)
    .then((res) => res.json())
    .then((res) => {
      sessionStorage.setItem(`pokeDetail-${id}`, JSON.stringify(res));
      return res;
    });
};
