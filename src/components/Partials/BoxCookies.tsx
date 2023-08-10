import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import privacyPolicyModalStore from '../../stores/modals/privacyPolicyModalStore'
import { Icon } from '@iconify/react'
import ButtonSolid from '../Buttons/ButtonSolid'
import router from 'next/router'

export const BoxCookies = () => {
  const { setModalState } = privacyPolicyModalStore()
  const [openBoxCookie, setOpenBoxCookie] = useState(true)

  function setCookie() {
    Cookies.set('user-accept-cookies', 'hasCookie', {
      expires: 31557600,
    })
    setOpenBoxCookie(false)
  }

  function checkCookie() {
    const cookie = Cookies.get('user-accept-cookies')
    if (!cookie) {
      setOpenBoxCookie(true)
    } else {
      setOpenBoxCookie(false)
    }
  }

  useEffect(() => {
    checkCookie()
  }, [])

  return (
    <div
      className="fixed left-0 bottom-4 z-10 h-fit w-full border-2 border-[#c2c2c2] bg-brand-purple-100 shadow-lg transition-all sm:w-[50%] md:left-4 md:w-[40%] lg:w-[30%]"
      style={{
        display: openBoxCookie ? 'block' : 'none',
      }}
    >
      <div className="p-5">
        <div>
          <div className="flex items-center justify-center gap-2">
            <h4 className="text-center text-2xl font-extrabold uppercase text-white">
              Esse site usa cookies
            </h4>
            <Icon
              icon="fluent:cookies-20-regular"
              className=" text-4xl text-white"
            />
          </div>
          <p className="my-4 text-center text-white md:my-2">
            Nós armazenamos dados temporariamente para melhorar a sua
            experiência de navegação e recomendar conteúdo de seu interesse. Ao
            utilizar nossos serviços, você concorda com tal monitoramento.
          </p>
        </div>
        <div className="flex items-center gap-4 justify-between">
          <ButtonSolid onClick={() => router.push('/politicaDePrivacidade')}>
            Políticas de Privacidade
          </ButtonSolid>

          <ButtonSolid onClick={setCookie}>Aceitar</ButtonSolid>
        </div>
      </div>
    </div>
  )
}
