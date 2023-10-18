import React from 'react'
import Layout from '../components/Layouts/Layout'
import Head from 'next/head'

export default function PoliticasDePrivacidade() {
  return (
    <Layout>
      <span id="politicaDePrivacidade"></span>
      <Head>
        <title>Camila Serra Developer | Políticas de Privacidade</title>
      </Head>
      <div>
        <div className="main_container py-10 sm:py-20">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4 flex  flex-col sm:col-span-2">
              <div className="mb-8 flex flex-col">
                <p className="text-center text-lg font-light text-brand-blue-800 md:text-start">
                  Políticas de Privacidade
                </p>
                <p className="text-center text-5xl font-extrabold text-brand-blue-800 md:text-start md:text-7xl">
                  CSS Developer :)
                </p>
              </div>

              <p className="text-center md:text-justify text-xl font-normal">
                Valorizo e respeito a sua privacidade. Aqui descrevo como
                coleto, uso, armazeno e protejo suas informações pessoais
                fornecidas por você ao visitar meu site e/ou utilizar meus
                serviços. Por favor, leia atentamente esta política para
                entender minhas práticas e como suas informações serão tratadas.
              </p>
            </div>
            <div className="col-span-4 flex justify-center sm:col-span-2">
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
            <p className="mb-3 text-black text-center text-2xl font-semibold md:text-start">
              Informações Coletadas
            </p>
            <p className="mb-5 text-black text-center font-normal md:text-justify">
              <strong>Informações de Uso: </strong>
              Posso em algum momento coletar informações incluindo logs de
              atividades, endereço IP, tipo de navegador, páginas visitadas,
              datas e horários de acesso, para fins de análise e aprimoramento
              contínuo dos meus serviços.
            </p>

            <p className="text-black mb-3 text-center text-2xl font-semibold md:text-start">
              Uso das Informações
            </p>
            <p className="text-center text-black font-normal md:text-justify">
              <strong>Análise e Melhorias: </strong>
              As informações coletadas podem ser utilizadas de forma agregada e
              anônima para fins de análise, pesquisa de mercado e melhoria
              contínua dos meus serviços.
            </p>
          </div>
        </div>

        <div className="bg-white pt-20">
          <div className=" main_container">
            <div className="grid grid-cols-3">
              <div className="col-span-3 sm:col-span-1 mr-6 hidden md:block">
                <img
                  src="/img/elements/css-developer_unlock.svg"
                  alt="Imagem Politica de Privacidade"
                />
              </div>
              <div className="col-span-3 sm:col-span-2 flex flex-col justify-center">
                <p className="mb-3 text-center text-2xl font-semibold md:text-start">
                  Armazenamento e Segurança
                </p>
                <p className="mb-5 text-center font-normal md:text-justify">
                  <strong>Medidas de Segurança: </strong>
                  Suas informações pessoais estão protegidas contra acessos não
                  autorizados, uso indevido ou divulgação. No entanto, nenhum
                  método de transmissão pela Internet ou armazenamento
                  eletrônico é completamente seguro.
                </p>
                <p className="mb-3 text-center text-2xl font-semibold md:text-start">
                  Retenção de Dados
                </p>
                <p className="mb-5 text-center font-normal md:text-justify">
                  <strong>Retenção de Informações: </strong>
                  Suas informações pessoais são mantidas somente pelo tempo
                  necessário para cumprir com os fins para os quais foram
                  coletadas, a menos que seja necessário reter tais informações
                  por períodos mais longos para cumprir com obrigações legais ou
                  regulatórias.
                </p>

                <p className="mb-3 text-center text-2xl font-semibold md:text-start">
                  Seus Direitos
                </p>
                <p className="mb-10 text-center font-normal md:text-justify">
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
                <p className="mb-3 text-black text-center text-2xl font-semibold">
                  Alterações a esta Política de Privacidade
                </p>
                <p className="text-center text-black font-normal ">
                  Reservo o direito de atualizar ou modificar esta Política de
                  Privacidade de tempos em tempos. Quaisquer alterações
                  significativas serão notificadas por meio de um aviso em nosso
                  website ou por outros meios de comunicação.
                </p>
              </div>

              <div className="col-span-2">
                <p className="mb-3 text-black text-center text-2xl font-semibold">
                  Contato
                </p>
                <p className="text-center text-black font-normal mb-10">
                  Se você tiver dúvidas, preocupações ou solicitações
                  relacionadas à Política de Privacidade, entre em contato
                  comigo conosco através dos canais de comunicação fornecidos em
                  meu website.
                </p>
                <p className="text-center font-medium">
                  Obrigada Por ler até aqui!! :)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
