import React from 'react'
import Image from 'next/image'

const PokeCard = ({nombre, id, img, extra}) => {
  return (
    <article className={`shadow-lg w-max rounded-xl p-4 ${extra}`}>
        <h2 className='uppercase font-bold'>{nombre}</h2>
        <p>{`ID:${id}`}</p>
        <div>
            <Image src={img} alt="" className='h-[9rem]'  width={130} height={130} priority />
        </div>
    </article>
  )
}

export default PokeCard