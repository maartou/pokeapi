import React from "react";
import Image from "next/image";

const PokeSprite = ({pokemon, sprite, desc}) => {
  return (
    <div className="flex flex-col items-center justify-center border border-white p-2">
      <Image src={sprite}  width='220' height='220' alt={pokemon.name} />
      <p className="mt-2">{desc}</p>
    </div>
  );
};

export default PokeSprite;
