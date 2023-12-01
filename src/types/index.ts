export interface PokeListType {
  name: string;
  url: string;
}

// I had a json file with the data open to examine it for the simplest type definition.
export interface Ability {
  ability: {
    name: string;
  };
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface Pokemon {
  name: string;
  base_experience: number;
  abilities: Array<Ability>;
  types: Array<PokemonType>;
  sprites: {
    front_default: string;
    other: {
      home: {
        front_default: string;
      };
    };
  };
}
