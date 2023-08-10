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
                  CS Developer
                </p>
              </div>

              <p className=" text-justify text-xl font-light">
                Na DiscontApp, valorizamos e respeitamos a privacidade dos
                nossos clientes. Esta Política de Privacidade descreve como
                coletamos, usamos, armazenamos e protegemos as informações
                pessoais fornecidas por você ao utilizar nossos serviços de
                gerenciamento de backups e solução de software white label. Por
                favor, leia atentamente esta política para entender nossas
                práticas e como suas informações serão tratadas.
              </p>
            </div>
            <div className="col-span-4 flex  justify-center sm:col-span-2">
              <img
                src="/img/temp/politicas-de-privacidade-1.svg"
                alt="Imagem Politicas de Privacidade"
              />
            </div>
          </div>
        </div>

        <div className=" bg-brand-purple-100 py-20">
          <div className=" main_container">
            <p className="mb-3 text-white text-center text-2xl font-semibold md:text-start">
              Informações Coletadas
            </p>
            <p className="text-center text-white font-light md:text-justify">
              Informações de Identificação Pessoal: Ao utilizar nossos serviços,
              podemos coletar informações pessoais, como nome, endereço de
              e-mail, número de telefone e informações de pagamento, para
              processar e fornecer os serviços contratados.
            </p>
            <p className="mb-5 text-white text-center font-light md:text-justify">
              Informações de Uso: Podemos coletar informações sobre o uso dos
              nossos serviços, incluindo logs de atividades, endereço IP, tipo
              de navegador, páginas visitadas, datas e horários de acesso, para
              fins de análise e aprimoramento contínuo dos nossos produtos e
              serviços.
            </p>

            <p className="text-white mb-3 text-center text-2xl font-semibold md:text-start">
              Uso das Informações
            </p>
            <p className="text-center text-white font-light md:text-justify">
              Fornecimento dos Serviços: Utilizamos as informações coletadas
              para fornecer os serviços contratados, incluindo a gestão de
              backups e a disponibilização da solução de software white label,
              conforme acordado com você.
            </p>
            <p className="text-center text-white font-light md:text-justify">
              Comunicações: Podemos utilizar suas informações de contato para
              enviar comunicações relacionadas aos serviços, como atualizações,
              informações sobre manutenção, novos recursos ou outras informações
              relevantes para o uso adequado dos nossos produtos.
            </p>
            <p className="mb-5 text-center text-white font-light md:text-justify">
              Análise e Melhorias: As informações coletadas podem ser utilizadas
              de forma agregada e anônima para fins de análise, pesquisa de
              mercado e melhoria contínua dos nossos produtos e serviços.
            </p>
          </div>
        </div>

        <div className="bg-white py-10">
          <div className=" main_container">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-3 sm:col-span-1">
                <img
                  src="/img/temp/politicas-de-privacidade-2.svg"
                  alt="Imagem Politica de Privacidade"
                />
              </div>
              <div className="col-span-3 sm:col-span-2">
                <p className="mb-3 text-center text-2xl font-semibold md:text-start">
                  Armazenamento e Segurança
                </p>
                <p className="text-center font-light md:text-justify">
                  Armazenamento de Dados: Suas informações pessoais serão
                  armazenadas em servidores seguros ou em outros meios
                  adequados, de acordo com os padrões do setor, para proteger
                  suas informações contra acesso não autorizado, uso indevido,
                  perda ou alteração.
                </p>
                <p className="mb-5 text-center font-light md:text-justify">
                  Medidas de Segurança: Implementamos medidas técnicas e
                  organizacionais para proteger suas informações pessoais contra
                  acesso não autorizado, uso indevido ou divulgação. No entanto,
                  nenhum método de transmissão pela Internet ou armazenamento
                  eletrônico é completamente seguro, e, portanto, não podemos
                  garantir a segurança absoluta das informações.
                </p>
              </div>
              <div className=" col-span-3">
                <p className="mb-3 text-center text-2xl font-semibold md:text-start">
                  Retenção de Dados
                </p>
                <p className="mb-5 text-center font-light md:text-justify">
                  Retenção de Informações: Manteremos suas informações pessoais
                  somente pelo tempo necessário para cumprir com os fins para os
                  quais foram coletadas, a menos que seja necessário reter tais
                  informações por períodos mais longos para cumprir com
                  obrigações legais ou regulatórias.
                </p>

                <p className="mb-3 text-center text-2xl font-semibold md:text-start">
                  Seus Direitos
                </p>
                <p className="mb-5 text-center font-light md:text-justify">
                  Acesso e Retificação: Você tem o direito de acessar e corrigir
                  suas informações pessoais mantidas por nós, mediante
                  solicitação por escrito.
                </p>
                <p className="mb-5 text-center font-light md:text-justify">
                  Cancelamento: Você pode solicitar o cancelamento ou exclusão
                  de suas informações pessoais, sujeito a obrigações legais ou
                  regulatórias de retenção de dados.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-brand-purple-100 py-20">
          <div className="main_container">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1">
                <p className="mb-3 text-white text-center text-2xl font-semibold">
                  Alterações a esta Política de Privacidade
                </p>
                <p className="text-center text-white font-light ">
                  Reservamo-nos o direito de atualizar ou modificar esta
                  Política de Privacidade de tempos em tempos. Quaisquer
                  alterações significativas serão notificadas por meio de um
                  aviso em nosso website ou por outros meios de comunicação.
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="mb-3 text-white text-center text-2xl font-semibold">
                  Contato
                </p>
                <p className="text-center text-white font-light">
                  Se você tiver dúvidas, preocupações ou solicitações
                  relacionadas à nossa Política de Privacidade, entre em contato
                  conosco através dos canais de comunicação fornecidos em nosso
                  website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
