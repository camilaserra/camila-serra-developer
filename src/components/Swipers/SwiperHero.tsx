import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import { client } from '../../services/prismicClient'
import useSWR from 'swr'

export default function SwiperHero() {
  const { data: bannersHero } = useSWR('getSBannersHome', () =>
    client.getSingle('banners_da_home')
  )

  return (
    <>
       <Swiper
      pagination={false}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="h-[80vh] md:h-[100vh]"
    >
    {bannersHero?.data.banners.map((banner, index) => (
        <SwiperSlide
          key={index}
          style={{ backgroundImage: `url(${banner.banner.url})` }}
          className="bg-cover bg-center bg-no-repeat flex items-center before"
        >
          <div className="main_container">
            <div className="grid grid-cols-12 gap-6 relative">
              <div className="col-span-2 md:col-span-8 flex flex-col items-center md:items-start justify-center">
                <p className="text-5xl font-semibold text-white text-center md:text-start sm:text-5xl">
                  {banner.descricao}
                </p>
                <p className="mb-7 text-center md:text-start mt-4 text-2xl font-thin text-white">
                  {banner.sub_descricao}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div id="about"></div>
    </>
  )
}
