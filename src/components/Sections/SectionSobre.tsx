import React from 'react'
import useSWR from 'swr'
import { client } from '../../services/prismicClient'
import { Button } from '../Buttons/Button'

export default function SectionSobre() {
  const { data: aboutMe } = useSWR('getSAboutMe', () =>
    client.getSingle('about')
  )

  return (
    <div className="py-10 md:pt-4 bg-black">
      <div className="main_container">
        <div className="mb-28 p-2 flex flex-col justify-center items-center">
          <p className="text-center text-lg font-light mb-2 text-brand-gray-50">
            {aboutMe?.data?.title}
          </p>
          <p className="text-center text-4xl font-semibold text-white">
            {aboutMe?.data?.subtitle}
          </p>
          <div className='bg-brand-purple-10 h-[2px] w-14 rounded-2xl mt-2'></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1">
            <img src="/img/image/imagem-me.png" alt="Minha Imagem" className=' rounded-md' />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className=" border-b-[1px] border-brand-gray-50 pb-4">
              <p className="text-white font-semibold text-3xl text-center md:text-start mb-4 mt-4">
                {aboutMe?.data?.simple_description}
              </p>
              <p className="text-brand-gray-50 text-lg text-center md:text-start">
                {aboutMe?.data.full_description}
              </p>
            </div>
            <div className="mb-6 py-4">
              <p className="text-brand-gray-50 text-lg text-center md:text-start mb-2">
                {aboutMe?.data.location}
              </p>
              <p className="text-brand-gray-50 text-lg text-center md:text-start">
                Email:
                <strong className="ml-1 text-brand-purple-10">
                  {aboutMe?.data.email}
                </strong>
              </p>
            </div>
            <div className="gap-4 flex">
               <Button variant="primaryOcean" onClick={() => window.open(`${aboutMe?.data.arquivo.url}`, "_blank")}>
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
