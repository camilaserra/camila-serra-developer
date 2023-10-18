/* eslint-disable @next/next/no-img-element */

import { Icon } from '@iconify/react'
import Link from 'next/link'
export const navLinks = [
  {
    route: '/sobre',
    name: 'Sobre',
  },
  {
    route: '/resumo',
    name: 'Resumo',
  },
  {
    route: '/portfolio',
    name: 'Portfólio',
  },
  {
    route: '/contatos',
    name: 'Contato',
  },
]

export default function NavLinks() {
  return (
    <>
      {navLinks.map((link) => (
        <Link key={link.name} href={link.route}>
          <span className="text-white cursor-pointer text-3xl">
            {link.name}
          </span>
        </Link>
      ))}
    </>
  )
}
