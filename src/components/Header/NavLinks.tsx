/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import router, { useRouter } from 'next/router'
import { useWindowScroll } from 'react-use'
export const navLinks = [
  {
    route: '/',
    name: 'Home',
  },
  {
    route: '/about',
    name: 'About',
  },
  {
    route: '/services',
    name: 'Services',
  },
  {
    route: '/portfolio',
    name: 'Portfólio',
  },
  {
    route: '/blog',
    name: 'Blog',
  },
  {
    route: '/contact',
    name: 'Contact',
  },
]

export default function NavLinks() {
  const { y } = useWindowScroll()
  const router = useRouter()

  return (
    <>
      {navLinks.map((link) => (
        <Link key={link.name} href={link.route}>
          <span
            className={`cursor-pointer text-xl ${y > 0 ? 'text-white' : 'text-white'
              } ${router.asPath === link.route ? 'active-link' : ''}`}
          >
            {link.name}
          </span>
        </Link>
      ))}
    </>
  )
}
