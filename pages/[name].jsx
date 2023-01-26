import React from "react";
import Image from "next/image";

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
  {
    console.log(pokemon);
  }

  const image = pokemon.sprites.other.dream_world.front_default;
  const type1 = pokemon.types



  return (
    <>
      <main className="bg-black text-white">
        <section>
          <div className="w-11/12 h-screen mx-auto flex flex-col items-center justify-center py-10">
            <h1 className="text-4xl uppercase">{pokemon.name}</h1>
            <h2 className="text-lg uppercase">{`ID: ${pokemon.id}`}</h2>
            <div>
              <Image src={image} alt={pokemon.name} width="200" height="200" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Name;
