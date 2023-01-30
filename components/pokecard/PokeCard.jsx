import React from "react";
import Image from "next/image";
import Link from "next/link";

const PokeCard = ({ pokemon }) => {

  return (
    <Link href={`/${pokemon.name}`} className={`border border-white p-4 transition-colors hover:bg-white hover:text-black hover:border-none`}>
      <h2 className="uppercase font-bold text-xl">{pokemon.name}</h2>
      <h3>{`ID: ${pokemon.id}`}</h3>
      <div className="flex justify-end">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt={pokemon.id}
          className="h-[10rem] w-[10rem]"
          width='150'
          height='150'
          unoptimized
        />
      </div>
    </Link>
  );
};

export default PokeCard;
