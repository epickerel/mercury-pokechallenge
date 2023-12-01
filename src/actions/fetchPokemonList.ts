import { pokeService } from "../constants";

// Thought process:
// After completing the call successfully and moving on to the search, I finally looked at the docs and understood this was a static resource with no search params.
// I then needed to take a step back to look at the bigger picture of what calls I need to cache locally for searches.
// Reviewing the requirements, I only need to provide a search for pokemon by name, not by other characteristics.
// Therefore, I just need to paginate the list of pokemon and cache that. For purposes of the challenge, I'll just set the limit to 1292.
export const fetchPokemonList = () => {
  const { url, limit } = pokeService;
  const cached = sessionStorage.getItem("pokeList");
  if (cached) {
    return new Promise((resolve) => {
      resolve(JSON.parse(cached));
    }) as Promise<Response>;
  }

  return fetch(`${url}?limit=${limit}`)
    .then((res) => res.json())
    .then((res) => {
      sessionStorage.setItem("pokeList", JSON.stringify(res.results));
      return res.results;
    });
};
