import React from "react";
import Head from "next/head";
import Image from "next/image";
import Tipo from "@/components/pokecard/Tipo";
import Collection from "@/components/sprite/Collection";
import Movimientos from "@/components/movimientos/Movimientos";
import Stats from "@/components/stats/Stats";

export async function getStaticPaths() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=649`);
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
    <Head>
      <title>{`${pokemon.name} - Pokémarto`}</title>
    </Head>
      <main className="bg-black text-white flex flex-col gap-[4rem]">
        {/* Nombre y foto principal  */}
        <section className="pt-[4rem]">
          <div className="w-11/12 mx-auto flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl uppercase">{pokemon.name}</h1>
            <h2 className="text-lg uppercase">{`ID: ${pokemon.id}`}</h2>
            <div>
              <Image src={image} alt={pokemon.name} width="200" height="200" />
            </div>
            <Tipo pokemon={pokemon} />
          </div>
        </section>

        {/* Stats  */}
        <section>
          <Stats pokemon={pokemon} />
        </section>

        {/* Movimientos  */}
        <section>
          <Movimientos pokemon={pokemon} />
        </section>

        {/* Sprites  */}
        <section>
          <Collection pokemon={pokemon} />
        </section>
      </main>
    </>
  );
};

export default Name;
