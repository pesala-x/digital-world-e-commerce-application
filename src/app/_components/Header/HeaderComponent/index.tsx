import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'

import classes from './index.module.scss'
import { HeaderNav } from '../Nav'


const HeeaderComponent = ({ header }: { header: Header }) => {
  return (
    <nav className={[classes.header]}>
      <Gutter className={classes.wrap}>
        <Link href="/">
          <Image src="/logo-black.svg" alt="logo" width={170} height={50} />
        </Link>

        <HeaderNav header={header} />
        <HeaderMobileNav header={header} />
      </Gutter>
    </nav>
  )
}

export default HeeaderComponent
