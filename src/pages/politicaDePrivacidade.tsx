import React from 'react'
import Layout from '../components/Layouts/Layout'
import Head from 'next/head'

export default function PoliticasDePrivacidade() {
  return (
    <div className='bg-black'>
      <Head>
        <title>Camila Serra - Políticas de Privacidade</title>
      </Head>
    
      <div className="main_container ">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4 flex flex-col sm:col-span-2">
            <div className="mb-8 flex flex-col pt-32">
              <p className="text-center text-lg font-light text-white md:text-start">
                Políticas de Privacidade
              </p>
              <p className="text-center text-5xl font-extrabold text-white md:text-start md:text-7xl">
                CSS Developer :)
              </p>
            </div>

            <p className="text-center md:text-justify text-xl font-normal text-white">
              Valorizo e respeito a sua privacidade. Aqui descrevo como
              coleto, uso, armazeno e protejo suas informações pessoais
              fornecidas por você ao visitar meu site e/ou utilizar meus
              serviços. Por favor, leia atentamente esta política para
              entender minhas práticas e como suas informações serão tratadas.
            </p>
          </div>
          <div className="col-span-4 flex justify-center sm:col-span-2 pt-20 md:pt-32">
            <img
              src="/img/elements/css-developer_woman_cookie.svg"
              alt="Imagem Politicas de Privacidade"
              className="max-h-56 md:max-h-full"
            />
          </div>
        </div>
      </div>

      <div className="py-20 bg-brand-purple-100">
        <div className="main_container">
          <p className="mb-3 text-white text-center text-2xl font-semibold md:text-start">
            Informações Coletadas
          </p>
          <p className="mb-5 text-white text-center font-normal md:text-justify">
            <strong>Informações de Uso: </strong>
            Posso em algum momento coletar informações incluindo logs de
            atividades, endereço IP, tipo de navegador, páginas visitadas,
            datas e horários de acesso, para fins de análise e aprimoramento
            contínuo dos meus serviços.
          </p>

          <p className="text-white mb-3 text-center text-2xl font-semibold md:text-start">
            Uso das Informações
          </p>
          <p className="text-center text-white font-normal md:text-justify">
            <strong>Análise e Melhorias: </strong>
            As informações coletadas podem ser utilizadas de forma agregada e
            anônima para fins de análise, pesquisa de mercado e melhoria
            contínua dos meus serviços.
          </p>
        </div>
      </div>

      <div className="bg-black pt-20">
        <div className=" main_container">
          <div className="grid grid-cols-3">
            <div className="col-span-3 sm:col-span-1 mr-6 hidden md:block">
              <img
                src="/img/elements/css-developer_unlock.svg"
                alt="Imagem Politica de Privacidade"
              />
            </div>
            <div className="col-span-3 sm:col-span-2 flex flex-col justify-center">
              <p className="mb-3 text-white text-center text-2xl font-semibold md:text-start">
                Armazenamento e Segurança
              </p>
              <p className="mb-5 text-center font-normal md:text-justify text-white">
                <strong>Medidas de Segurança: </strong>
                Suas informações pessoais estão protegidas contra acessos não
                autorizados, uso indevido ou divulgação. No entanto, nenhum
                método de transmissão pela Internet ou armazenamento
                eletrônico é completamente seguro.
              </p>
              <p className="mb-3 text-center text-white text-2xl font-semibold md:text-start">
                Seus Direitos
              </p>
              <p className="mb-10 text-center text-white font-normal md:text-justify">
                <strong>Cancelamento: </strong>
                Você pode solicitar o cancelamento ou exclusão de suas
                informações pessoais, sujeito a obrigações legais ou
                regulatórias de retenção de dados.
              </p>
            </div>
            <div className="col-span-3 sm:col-span-1 mr-6 flex justify-center md:hidden">
              <img
                src="/img/elements/css-developer_unlock.svg"
                alt="Imagem Politica de Privacidade"
                className="max-h-56"
              />
            </div>
          </div>
        </div>
      </div>

        <div className=" bg-brand-purple-100 py-20">
          <div className="main_container">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <p className="mb-3 text-white text-center text-2xl font-semibold">
                  Alterações a esta Política de Privacidade
                </p>
                <p className="text-center text-white font-normal ">
                  Reservo o direito de atualizar ou modificar esta Política de
                  Privacidade de tempos em tempos. Quaisquer alterações
                  significativas serão notificadas por meio de um aviso em nosso
                  website ou por outros meios de comunicação.
                </p>
              </div>

              <div className="col-span-2">
                <p className="mb-3 text-white text-center text-2xl font-semibold">
                  Contato
                </p>
                <p className="text-center text-white font-normal mb-10">
                  Se você tiver dúvidas, preocupações ou solicitações
                  relacionadas à Política de Privacidade, entre em contato
                  comigo através dos canais de comunicação fornecidos em
                  meu website.
                </p>
                <p className="text-center text-white font-medium">
                  Obrigada Por ler até aqui!! :)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    

  )
}
