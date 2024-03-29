// import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import type { AppProps } from 'next/app'
import Link from 'next/link'
// import { repositoryName } from '../../prismicio'
import Modals from '../components/Modals'
import { BoxCookies } from '../components/Partials/BoxCookies'
import { ToasterComponent } from '../components/Partials/ToasterComponent'
import { GlobalContextProvider } from '../context/GlobalContextProvider'
import { Header } from '../components/Header'
import Footer from '../components/Footer'
import { MenuHamburguer } from '../components/Partials/MenuHamburguer'
import { DefaultSeo } from 'next-seo'
import 'swiper/css/bundle'
import '../styles/index.scss'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import Router from 'next/router'
import { useAuth } from '../hooks/useAuth'
import Script from 'next/script'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const start = () => {
      console.log('start')
      window.scrollTo(0, 0)
      setLoading(true)
    }
    const end = () => {
      console.log('finished')
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  // * Verifica se o token é valido
  // const { checkToken } = useAuth()
  // useEffect(() => {
  //   checkToken()
  // }, [])

  return (
    <>
      <DefaultSeo
        title="Camila Serra - Frontend Developer"
        description="Desenvolvedora Frontend Criativa e Talentosa, Transformando Visões em Realidade Digital com Expertise e Paixão."
        canonical="https://camila-serra-developer.vercel.app/"
        openGraph={{
          url: 'https://camila-serra-developer.vercel.app/',
          title: 'Camila Serra - Frontend Developer',
          description: 'Desenvolvedora Frontend Criativa e Talentosa, Transformando Visões em Realidade Digital com Expertise e Paixão.',
          images: [
            {
              url: '/img/camila-serra-seo.png',
              width: 1200,
              height: 627,
              alt: 'Camila Serra - Frontend Developer',
              type: 'image/png',
            },
          ],
          siteName: 'camila-serra-developer.vercel.app',
        }}
      />
      <GlobalContextProvider>
        <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
          {/* <PrismicPreview repositoryName={repositoryName}> */}
          <Header />
          {loading ? (
            <div className="h-screen flex items-center justify-center">
              <Icon icon="mdi:loading" className="text-5xl animate-spin" />
            </div>
          ) : (
            <Component {...pageProps} />
          )}
        {/*   <Footer /> */}
          <BoxCookies />
          <Modals />
          <ToasterComponent />
          {/* </PrismicPreview> */}
        </PrismicProvider>
      </GlobalContextProvider>
      <MenuHamburguer />
    </>
  )
}
