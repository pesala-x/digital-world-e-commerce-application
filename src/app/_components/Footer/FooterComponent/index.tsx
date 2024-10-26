'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Footer } from '../../../../payload/payload-types'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'

import classes from './index.module.scss'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const { pathname } = usePathname()

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map(inclusion => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={classes.icon}
              />

              <h5 className={classes.title}>{inclusion.title}</h5>
              <p>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>

      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <Link href="/">
              <Image src="/logo-white.svg" alt="Logo" width={170} height={50} />
            </Link>

            <p>{footer.copyright}</p>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
