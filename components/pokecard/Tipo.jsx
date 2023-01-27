import React from "react";

const Tipo = ({ pokemon }) => {
  return (
    <div className="flex items-center gap-3 mt-2">
      {pokemon.types.map((item, index) => (
        <div className="bg-white text-black py-2 px-4 rounded-full" key={index}>
          <p>{item.type.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Tipo;
