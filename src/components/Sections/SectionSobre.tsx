import React from 'react'
import ButtonSolid from '../Buttons/ButtonSolid'

export default function SectionSobre() {
  return (
    <div className="py-10 md:py-20 bg-black">
      <div className="main_container">
        <div className="mb-20 p-2">
          <p className="text-center text-lg font-light mb-2 text-brand-gray-50">
            About me
          </p>
          <p className="text-center text-4xl font-semibold text-white">
            Sobre mim
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1">
            <img src="/img/image/imagem-me.png" alt="Minha Imagem" />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className=" border-b-[1px] border-brand-gray-50 pb-4">
              <p className="text-brand-purple-50 font-bold text-2xl mb-8 text-center md:text-start">
                Quem sou eu?
              </p>
              <p className="text-white font-semibold text-3xl text-center md:text-start mb-4">
                Olá! me chamo Camila Serra, sou desenvolvedora Frontend desde
                2021.
              </p>
              <p className="text-brand-gray-50 text-lg text-center md:text-start">
                Sou uma dev com um olhar atento aos detalhes e uma abordagem
                centrada no usuário, tenho trabalhado com sucesso em diversos
                projetos desafiadores, onde combinei minhas habilidades técnicas
                com uma visão estética apurada para entregar interfaces
                intuitivas e atraentes. Tenho expertise com HTML, SASS, Tailwind
                e JavaScript, além de conhecimento prático de frameworks
                populares, como React.Js e Laravel.
              </p>
            </div>
            <div className="mb-6 py-4">
              <p className="text-brand-gray-50 text-lg text-center md:text-start mb-2">
                <strong>Belém - Brasil</strong>
              </p>
              <p className="text-brand-gray-50 text-lg text-center md:text-start">
                Email:{' '}
                <strong className=" text-brand-purple-50">
                  camilaserrasilva@gmail.com
                </strong>
              </p>
            </div>
            <div className="gap-4 flex">
              <a
                href="/pdf/curriculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-all bg-pink-800 hover:bg-pink-900 rounded-3xl py-2 px-3"
              >
                Download CV
              </a>
              <a
                href="https://www.canva.com/design/DAFsadC-h3w/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-all bg-pink-800 hover:bg-pink-900 rounded-3xl py-2 px-3"
              >
                Ver CV online
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
