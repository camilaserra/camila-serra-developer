import React from 'react'
import ContentRichText from '../Prismic/ContentRichText'
import { client } from '../../services/prismicClient'
import useSWR from 'swr'


export default function SectionServicos() {
  const { data } = useSWR('getServico', () =>
    client.getAllByType('servico')
  )

  if (!data) {
    return <div>Carregando...</div>
  }

  const dataOrdenada = [...data].sort((a, b) =>
    (a.data.titulo || '').localeCompare(b.data.titulo || '')
  );
  return (
    <div className="py-10 md:py-20 bg-black">
    <div className="main_container">
        <div className="mb-20 p-2">
          <p className="text-lg font-light mb-2 text-brand-gray-50 text-center md:text-start">
            Technologies I work
          </p>
          <p className="text-center md:text-start text-4xl font-semibold text-white">
            Hard Skills
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {dataOrdenada.map((servico, index) => (
            <a href={servico.data.link_para_o_site as string} key={servico.id} target='_blank' className="card-skills-wrapper col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4">
                <div className="box">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={servico.data.icon.url as string}
                      alt={`Icone ${servico.data.titulo}`}
                      className="h-6"
                    />
                    <span className="text-3xl font-medium tracking-wider text-white">
                      {servico.data.titulo}
                    </span>
                  </div>
                  <ContentRichText data={servico.data.descricao} />
                </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
