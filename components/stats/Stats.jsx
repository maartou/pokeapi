import React from "react";

const Stats = ({ pokemon }) => {
  const hp = pokemon.stats[0].base_stat;
  const attack = pokemon.stats[1].base_stat;
  const defense = pokemon.stats[2].base_stat;
  const spattack = pokemon.stats[3].base_stat;
  const spdefense = pokemon.stats[4].base_stat;
  const speed = pokemon.stats[5].base_stat;

  const total = hp + attack + defense + spattack + spdefense + speed;

  return (
    <div className="w-11/12 mx-auto 2xl:w-[70%]">
      <h2 className="text-3xl mb-5">- Estadísticas base</h2>
      {pokemon.stats.map((stat, index) => (
        <div key={index}>
          <p className="text-lg">{`${stat.stat.name}: ${stat.base_stat}`}</p>
        </div>
      ))}
      <p className="text-lg uppercase">{`total : ${total}`}</p>
    </div>
  );
};

export default Stats;
