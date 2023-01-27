import React from "react";

const Movimientos = ({ pokemon }) => {
  return (
    <div className="w-11/12 mx-auto 2xl:w-[70%]">
      <h2 className="text-3xl">- Movimientos que puede aprender</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        {pokemon.moves.map((move, index) => (
          <div key={index} className="bg-white text-black py-2 px-4">
            <p>{move.move.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movimientos;
