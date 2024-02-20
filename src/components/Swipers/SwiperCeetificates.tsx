import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper'
import { client } from '../../services/prismicClient'
import useSWR from 'swr'

export default function SwiperCertificates() {
  const { data: certificados } = useSWR('getSCertificados', () =>
    client.getSingle('certificados')
  )

  return (
    <>
       <Swiper
      pagination={true}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay, EffectFade]}
      className="h-[400px]"
    >
    {certificados?.data.certificados.map((certificado, index) => (
        <SwiperSlide
          key={index}
          className="bg-cover bg-center bg-no-repeat flex items-center justify-center"
        >
          <img src={certificado.imagem.url as string} alt={certificado.imagem.alt as string} className='h-full' />
        </SwiperSlide>
      ))}
    </Swiper>
    <div id="about"></div>
    </>
  )
}
