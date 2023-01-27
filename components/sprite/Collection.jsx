import React from "react";
import PokeSprite from "./PokeSprite";

const Collection = ({ pokemon }) => {
  const artwork = "official-artwork";
  const g1 = "generation-i";
  const g2 = "generation-ii";
  const g3 = "generation-iii";
  const g4 = "generation-iv";
  const g5 = "generation-v";
  const bw = "black-white";
  const g7 = "generation-vii";
  const sunmoon = "ultra-sun-ultra-moon";

  const sprite1 = pokemon.sprites.front_default;
  const sprite2 = pokemon.sprites.back_default;
  const sprite1shiny = pokemon.sprites.front_shiny;
  const sprite2shiny = pokemon.sprites.back_shiny;
  const spritehome = pokemon.sprites.other.home.front_default;
  const spriteart = pokemon.sprites.other[artwork].front_default;
  const spriteg1 = pokemon.sprites.versions[g1].yellow.front_default;
  const spriteg2 = pokemon.sprites.versions[g2].silver.front_default;
  const spriteg3 = pokemon.sprites.versions[g3].emerald.front_default;
  const spriteg4 = pokemon.sprites.versions[g4].platinum.front_default;
  const spriteg5 = pokemon.sprites.versions[g5][bw].front_default;
  const spriteg7 = pokemon.sprites.versions[g7][sunmoon].front_default;

  return (
    <div className="w-11/12 mx-auto 2xl:w-[70%]">
      <h2 className="text-3xl">- Sprites oficiales</h2>

      <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        <PokeSprite pokemon={pokemon} sprite={sprite1} desc="Front - clásico" />
        <PokeSprite pokemon={pokemon} sprite={sprite2} desc="Back - clásico" />
        <PokeSprite
          pokemon={pokemon}
          sprite={sprite1shiny}
          desc="Front - shiny"
        />
        <PokeSprite
          pokemon={pokemon}
          sprite={sprite2shiny}
          desc="Back - shiny"
        />
        <PokeSprite pokemon={pokemon} sprite={spritehome} desc="modelo 3D" />
        <PokeSprite
          pokemon={pokemon}
          sprite={spriteart}
          desc="Artwork oficial"
        />
        <PokeSprite
          pokemon={pokemon}
          sprite={spriteg1}
          desc="Primera generación"
        />
        <PokeSprite
          pokemon={pokemon}
          sprite={spriteg2}
          desc="Segunda generación"
        />
        <PokeSprite
          pokemon={pokemon}
          sprite={spriteg3}
          desc="Tercera generación"
        />
        <PokeSprite
          pokemon={pokemon}
          sprite={spriteg4}
          desc="Cuarta generación"
        />
        <PokeSprite
          pokemon={pokemon}
          sprite={spriteg5}
          desc="Quinta generación"
        />
        <PokeSprite
          pokemon={pokemon}
          sprite={spriteg7}
          desc="Séptima generación"
        />
      </div>
    </div>
  );
};

export default Collection;
