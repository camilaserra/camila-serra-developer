import React from 'react'

export default function SectionSobre() {
  return (
    <div className="py-20 bg-black">
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
          <div className=" col-span-2 md:col-span-1">
            <p className="text-brand-purple-50 font-bold text-3xl mb-6">
              Quem sou eu?
            </p>
            <p className=" text-brand-gray-50">
              Olá! me chamo Camila Serra, sou desenvolvedora Frontend desde
              2021.
            </p>
            <p className="text-brand-gray-50">
              Sou uma dev com um olhar atento aos detalhes e uma abordagem
              centrada no usuário, tenho trabalhado com sucesso em diversos
              projetos desafiadores, onde combinei minhas habilidades técnicas
              com uma visão estética apurada para entregar interfaces intuitivas
              e atraentes. Tenho expertise com HTML, SASS, Tailwind e
              JavaScript, além de conhecimento prático de frameworks populares,
              como ReactJs e Laravel.
            </p>

            <div>
              <p>
                Nome: <strong>Camila Serra</strong>
              </p>
              <p>
                Email: <strong>camilaserrasilva@gmail.com</strong>
              </p>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
