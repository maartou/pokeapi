import React from 'react'
import Image from 'next/image'

const PokeCard = ({nombre, img, extra, id}) => {
  return (
    <article className={`relative shadow-lg p-4 ${extra}`}>
        <h2 className='uppercase font-bold text-xl'>{nombre}</h2>
        <div className='flex justify-end'>
            <Image src={img} alt="" className='h-[10rem]' width={150} height={150} priority />
        </div>
        <p className='absolute top-[50%] left-[40%] -translate-x-[40%] -translate-y-[50%] font-bold text-[9rem] opacity-[.3] -z-10'>{id}</p>
    </article>
  )
}

export default PokeCard