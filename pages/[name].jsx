import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Tipo from "@/components/pokecard/Tipo";
import Collection from "@/components/sprite/Collection";
import Movimientos from "@/components/movimientos/Movimientos";
import Stats from "@/components/stats/Stats";
import { MdArrowBackIosNew } from "react-icons/md";

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
        <section className="relative pt-[5rem]">
          <div className="w-11/12 mx-auto flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl uppercase">{pokemon.name}</h1>
            <h2 className="text-lg uppercase">{`ID: ${pokemon.id}`}</h2>
            <div>
              <Image src={image} alt={pokemon.name} width="200" height="200" />
            </div>
            <Tipo pokemon={pokemon} />
          </div>

          <Link href='/' className="absolute top-6 left-4 flex gap-2 items-center justify-center">
            <MdArrowBackIosNew className=" text-3xl text-white block 2xl:text-5xl" />
            <p className="block 2xl:text-xl">Volver</p>
          </Link>
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
