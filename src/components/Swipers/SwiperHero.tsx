import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'

export const bannersHero = [
  {
    id: 1,
    url: '/img/bg/bg-hero-four.jpg',
    imgElementOne: '',
    alt: 'Discontapp',
    titulo:
      'Desenvolvimento de interfaces responsivas e otimizadas para dispositivos móveis.',
    descricao: 'React.Js | Prismic | Next.Js',
    botao_um: {
      texto: '',
      url: '/',
      external_url: false,
    },
    botao_dois: {
      texto: '',
      url: '',
      url_externa: false,
    },
  },
  {
    id: 2,
    url: '/img/bg/bg-hero-three.jpg',
    imgElementOne: '',
    alt: 'Discontapp',
    titulo:
      'Implementação de layouts a partir de designs e wireframes, garantindo fidelidade ao projeto original',
    descricao: 'CSS | SASS/SCSS | Tailwind',
    botao_um: {
      texto: '',
      url: '',
      url_externa: false,
    },
    botao_dois: {
      texto: '',
      url: '',
      url_externa: false,
    },
  },
]

export default function SwiperHero() {
  return (
    <Swiper
      pagination={true}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="h-[80vh] md:h-[100vh]"
    >
      {bannersHero.map((banner) => (
        <SwiperSlide
          key={banner.id}
          style={{ backgroundImage: `url(${banner.url})` }}
          className="bg-cover bg-center bg-no-repeat flex items-center before"
        >
          <div className="main_container">
            <div className="grid grid-cols-2 gap-6 relative">
              <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start justify-center">
                <h1 className="max-w-lg text-4xl font-bold text-white text-center md:text-start sm:text-4xl">
                  {banner.titulo}
                </h1>
                <p className="mb-7 text-center md:text-start mt-4 max-w-lg text-lg font-light text-white">
                  {banner.descricao}
                </p>
                <div className="flex gap-3">
                  {banner.botao_um && (
                    <a
                      target={banner.botao_um.url_externa ? '_blank' : '_self'}
                      href={banner.botao_um.url}
                      className="h-2"
                      rel="noreferrer"
                    >
                      <img
                        src={banner.botao_um.url}
                        alt={banner.botao_um.texto}
                        className="w-32"
                      />
                    </a>
                  )}
                  {banner.botao_dois && (
                    <a
                      target={
                        banner.botao_dois.url_externa ? '_blank' : '_self'
                      }
                      href={banner.botao_dois.url}
                      rel="noreferrer"
                    >
                      <img
                        src={banner.botao_dois.url}
                        alt={banner.botao_dois.texto}
                        className="w-32"
                      />
                    </a>
                  )}
                </div>
              </div>
              <div className="hidden col-span-2 md:col-span-1 md:flex items-center justify-center">
                {banner.imgElementOne && (
                  <img src={banner.imgElementOne} alt="element" />
                )}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
