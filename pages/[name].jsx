import React from "react";
import Image from "next/image";
import Tipo from "@/components/pokecard/Tipo";
import Collection from "@/components/sprite/Collection";

export async function getStaticPaths() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
  const data = await res.json();

  const paths = data.results.map((pokemon) => {
    return {
      params: { name: pokemon.name.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const name = context.params.name;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
}

const Name = ({ pokemon }) => {
  const image = pokemon.sprites.other.dream_world.front_default;

  return (
    <>
      <main className="bg-black text-white">
        {/* Nombre y foto principal  */}
        <section className="py-10">
          <div className="w-11/12 mx-auto flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl uppercase">{pokemon.name}</h1>
            <h2 className="text-lg uppercase">{`ID: ${pokemon.id}`}</h2>
            <div>
              <Image src={image} alt={pokemon.name} width="200" height="200" />
            </div>
            <Tipo pokemon={pokemon} />
          </div>
        </section>

        {/* Sprites  */}
        <section>
          <h2 className="mx-4 text-3xl">- Sprites oficiales</h2>
          <Collection pokemon={pokemon} />
        </section>
      </main>
    </>
  );
};

export default Name;
