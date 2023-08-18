import React from 'react'
import { ServicoDocument } from '../../../.slicemachine/prismicio'
import ContentRichText from '../Prismic/ContentRichText'

type ServicoProps = {
  servicos: ServicoDocument<string>[]
}

export default function SectionServicos({ servicos }: ServicoProps) {
  return (
    <div className="py-10 md:py-20 bg-black">
      <div className="main_container">
        <div className="mb-20 p-2">
          <p className="text-lg font-light mb-2 text-brand-gray-50 text-center md:text-start">
            Technologies I work
          </p>
          <p className="text-center md:text-start text-4xl font-semibold text-white">
            Hards Skills
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {servicos?.map((servico, index) => (
            <div
              className="card-skills-wrapper col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
              key={index}
            >
              <div className="box">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={servico.data.icon.url as string}
                    alt={`Icone ${servico.data.titulo}`}
                    className="object-fit"
                  />
                  <span className="text-3xl font-medium tracking-wider text-white">
                    {servico.data.titulo}
                  </span>
                </div>
                <ContentRichText data={servico.data.descricao} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
