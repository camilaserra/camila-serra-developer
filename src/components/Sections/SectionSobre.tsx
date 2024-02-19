import React from 'react'
import useSWR from 'swr'
import { client } from '../../services/prismicClient'

export default function SectionSobre() {
  const { data: bannersHero } = useSWR('getSBannersHome', () =>
    client.getSingle('about')
  )

  return (
    <div className="py-10 md:pt-4 bg-black">
      <div className="main_container">
        <div className="mb-28 p-2 flex flex-col justify-center items-center">
          <p className="text-center text-lg font-light mb-2 text-brand-gray-50">
            know more
          </p>
          <p className="text-center text-4xl font-semibold text-white">
            Quem sou eu
          </p>
          <div className='bg-brand-purple-50 h-[2px] w-14 rounded-2xl mt-2'></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1">
            <img src="/img/image/imagem-me.png" alt="Minha Imagem" className=' rounded-md' />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className=" border-b-[1px] border-brand-gray-50 pb-4">
              <p className="text-white font-semibold text-3xl text-center md:text-start mb-4 mt-4">
                Olá! Sou Camila Serra, sou desenvolvedora Frontend desde
                2021.
              </p>
              <p className="text-brand-gray-50 text-lg text-center md:text-start">
              Sou uma dev com um olhar atento aos detalhes e uma abordagem centrada no usuário. Tenho expertise com React.js, Next.js, CSS, JavaScript e TypeScript além de conhecimento prático de frameworks populares, como Vue.js e Laravel.
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
                href="/pdf/Curriculo-Camila-S-S-Silva.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-all bg-pink-800 hover:bg-pink-900 rounded-3xl py-2 px-3"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
