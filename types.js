const types = {
  normal: {
    color: "#aa9",
    attack: {
      noEffect: ["ghost"],
      halfEffect: ["rock", "steel"],
      doubleEffect: [],
    },
    defense: {
      noEffect: ["ghost"],
      halfEffect: [],
      doubleEffect: ["fighting"],
    },
  },
  fire: {
    color: "#f42",
    attack: {
      noEffect: [],
      halfEffect: ["fire", "water", "rock", "dragon"],
      doubleEffect: ["grass", "ice", "bug", "steel"],
    },
    defense: {
      noEffect: [],
      halfEffect: ["fire", "grass", "ice", "bug", "steel", "fairy"],
      doubleEffect: ["water", "ground", "rock"],
    },
  },
  water: {
    color: "#39f",
    attack: {
      noEffect: [],
      halfEffect: ["water", "grass", "dragon"],
      doubleEffect: ["fire", "ground", "rock"],
    },
    defense: {
      noEffect: [],
      halfEffect: ["fire", "water", "ice", "steel"],
      doubleEffect: ["grass", "electric"],
    },
  },
  electric: {
    color: "#fc3",
    attack: {
      noEffect: ["ground"],
      halfEffect: ["electric", "grass", "dragon"],
      doubleEffect: ["water", "flying"],
    },
    defense: {
      noEffect: [],
      halfEffect: ["electric", "flying", "steel"],
      doubleEffect: ["ground"],
    },
  },
  grass: {
    color: "#7c5",
    attack: {
      noEffect: [],
      halfEffect: ["fire", "grass", "poison", "flying", "bug", "dragon", "steel"],
      doubleEffect: ["water", "ground", "rock"],
    },
    defense: {
      noEffect: [],
      halfEffect: ["water", "electric", "grass", "ground"],
      doubleEffect: ["fire", "ice", "poison", "flying", "bug"],
    },
  },
  ice: {
    color: "#6cf",
    attack: {
      noEffect: [],
      halfEffect: ["fire", "water", "ice", "steel"],
      doubleEffect: ["grass", "ground", "flying", "dragon"],
    },
    defense: {
      noEffect: [],
      halfEffect: ["ice"],
      doubleEffect: ["fire", "fighting", "rock", "steel"],
    },
  },
  fighting: {
    color: "#b54",
    attack: {
      noEffect: ["ghost"],
      halfEffect: ["poison", "flying", "psychic", "bug", "fairy"],
      doubleEffect: ["normal", "ice", "rock", "dark", "steel"],
    },
    defense: {
      noEffect: [],
      halfEffect: ["bug", "rock", "dark"],
      doubleEffect: ["flying", "psychic", "fairy"],
    },
  },
  poison: {
    color: "#a59",
    attack: {
      noEffect: ["steel"],
      halfEffect: ["poison", "ground", "rock", "ghost"],
      doubleEffect: ["grass", "fairy"],
    },
    defense: {
      noEffect: [],
      halfEffect: ["grass", "fighting", "poison", "bug", "fairy"],
      doubleEffect: ["ground", "psychic"],
    },
  },
  ground: {
    color: "#db5",
    attack: {
      noEffect: ["flying"],
      halfEffect: ["bug", "grass"],
      doubleEffect: ["fire", "electric", "poison", "rock", "steel"],
    },
    defense: {
      noEffect: ["electric"],
      halfEffect: ["poison", "rock"],
      doubleEffect: ["water", "grass", "ice"],
    },
  },
  flying: {
    color: "#89f",
    attack: {
      noEffect: [],
      halfEffect: ["electric", "rock", "steel"],
      doubleEffect: ["grass", "fighting", "bug"],
    },
    defense: {
      noEffect: ["ground"],
      halfEffect: ["grass", "fighting", "bug"],
      doubleEffect: ["electric", "ice", "rock"],
    },
  },
  psychic: {
    color: "#f59",
    attack: {
      noEffect: ["dark"],
      halfEffect: ["psychic", "steel"],
      doubleEffect: ["fighting", "poison"],
    },
    defense: {
      noEffect: [],
      halfEffect: ["fighting", "psychic"],
      doubleEffect: ["bug", "ghost", "dark"],
    },
  },
  bug: {
    color: "#ab2",
    attack: {
      noEffect: [],
      halfEffect: ["fire", "fighting", "poison", "flying", "ghost", "steel", "fairy"],
      doubleEffect: ["grass", "psychic", "dark"],
    },
    defense: {
      noEffect: [],
      halfEffect: ["grass", "fighting", "ground"],
      doubleEffect: ["fire", "flying", "rock"],
    },
  },
  rock: {
    color: "#ba6",
    attack: {
      noEffect: [],
      halfEffect: ["fighting", "ground", "steel"],
      doubleEffect: ["fire", "ice", "flying", "bug"],
    },
    defense: {
      noEffect: [],
      halfEffect: ["normal", "fire", "poison", "flying"],
      doubleEffect: ["water", "grass", "fighting", "ground", "steel"],
    },
  },
  ghost: {
    color: "#66b",
    attack: {
      noEffect: ["normal"],
      halfEffect: ["dark"],
      doubleEffect: ["psychic", "ghost"],
    },
    defense: {
      noEffect: ["normal", "fighting"],
      halfEffect: ["poison", "bug"],
      doubleEffect: ["ghost", "dark"],
    },
  },
  dragon: {
    color: "#76e",
    attack: {
      noEffect: ["fairy"],
      halfEffect: ["steel"],
      doubleEffect: ["dragon"],
    },
    defense: {
      noEffect: [],
      halfEffect: ["fire", "water", "electric", "grass"],
      doubleEffect: ["ice", "dragon", "fairy"],
    },
  },
  dark: {
    color: "#754",
    attack: {
      noEffect: [],
      halfEffect: ["fighting", "dark", "fairy"],
      doubleEffect: ["psychic", "ghost"],
    },
    defense: {
      noEffect: ["psychic"],
      halfEffect: ["ghost", "dark"],
      doubleEffect: ["fighting", "bug", "fairy"],
    },
  },
  steel: {
    color: "#aab",
    attack: {
      noEffect: [],
      halfEffect: ["fire", "water", "electric", "steel"],
      doubleEffect: ["ice", "rock", "fairy"],
    },
    defense: {
      noEffect: ["poison"],
      halfEffect: ["normal", "grass", "ice", "flying", "psychic", "bug", "rock", "dragon", "steel", "fairy"],
      doubleEffect: ["fire", "fighting", "ground"],
    },
  },
  fairy: {
    color: "#e9e",
    attack: {
      noEffect: [],
      halfEffect: ["fire", "poison", "steel"],
      doubleEffect: ["fighting", "dragon", "dark"],
    },
    defense: {
      noEffect: ["dragon"],
      halfEffect: ["fighting", "bug", "dark"],
      doubleEffect: ["poison", "steel"],
    },
  },
};
