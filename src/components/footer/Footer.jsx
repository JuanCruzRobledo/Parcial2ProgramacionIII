import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-32 bg-black text-white flex flex-col justify-center items-center gap-6 text-[1rem] lg:text-[1.5rem] ">
      <ul className="flex gap-6 text-[1em]">
        <li>
          <a href="">Sobre Mi</a>
        </li>
        <li>
          <a href=""></a>Ubicacion
        </li>
        <li>
          <a href=""></a>Contacto
        </li>
        <li>
          <a href=""></a>Redes
        </li>
      </ul>
      <div className="contain-layout flex w-full justify-center gap-4">
        <p className="text-[0.8em]">Copyright 2024</p>
        <img src="" alt="IconFacebook" />
        <img src="" alt="IconInstagram" />
        <img src="" alt="IconTwitter" />
      </div>
    </div>
  )
}

export default Footer
