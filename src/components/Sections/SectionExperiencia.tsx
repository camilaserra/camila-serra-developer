import React from 'react'
import SwiperCertificates from '../Swipers/SwiperCeetificates'

export default function SectionExperiencia() {
  return (
    <div className='py-10 md:py-10 bg-black'>
      <div className='main_container'>
        <div className="mb-20 p-2 flex flex-col justify-center items-center">
          <p className="text-center text-lg font-light mb-2 text-brand-gray-50">
            Check out my resume
          </p>
          <p className="text-center text-4xl font-semibold text-white">
            Resumo
          </p>
          <div className='bg-brand-purple-10 h-[2px] w-14 rounded-2xl mt-2'></div>
        </div>
        <div className='mb-10'>
            <p className='text-white font-semibold text-2xl mb-4'>Experiência</p>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 md:col-span-6 bg-[#161616] p-4 rounded-md'>
                    <p className='text-white text-xl mb-4'>Frontend Developer</p>
                    <p className='mb-4 text-brand-purple-10 '>Bredi Tecnologia/2021 - Atualmente</p>
                    <p className='text-white font-thin'>Desenvolvimento de sites e sistemas, destacando-se pela utilização de tecnologias avançadas, como React.js e Next.js. Além disso, proporciona suporte especializado em projetos que envolvem diversas tecnologias, como Laravel, PHP e Vue.js</p>
                </div>
                <div className='col-span-12 md:col-span-6 bg-[#161616] p-4 rounded-md'>
                    <p className='text-white text-xl mb-4'>Técnico de Suporte de TI</p>
                    <p className='mb-4 text-brand-purple-10 '>Cartório 1º Oficio/2017-2019</p>
                    <p className='text-white font-thin'>Suporte técnico aos usuários, estações de trabalho, configuração e manutenção de microcomputadores, periféricos, dispositivos em geral e equipamentos de rede. </p>
                </div>
            </div>
        </div>
        <div className='mb-10'>
            <p className='text-white font-semibold text-2xl mb-4'>Educação</p>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 md:col-span-12 bg-[#161616] p-4 rounded-md'>
                    <p className='text-white text-xl mb-4'>Graduação - Gestão em Tecnologia da Educação</p>
                    <p className='mb-4 text-brand-purple-10 '>Universidade Paulista/2016 - 2018</p>
                    <p className='text-white font-thin'>Refinar a identificação precisa e segura das informações vitais para os processos empresariais, garantindo qualidade e produtividade. Estruturar os dados essenciais para o embasamento das decisões gerenciais, ponderando custo versus benefício dos sistemas utilizados.</p>
                </div>
            </div>
        </div>
        <div className='mb-10'>
            <p className='text-white font-semibold text-2xl mb-4'>Certificados</p>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 md:col-span-7 bg-[#161616] p-4 rounded-md'>
                    <SwiperCertificates />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
