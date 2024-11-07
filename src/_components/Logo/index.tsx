import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href="/" className=''>
    <Image
      src="https://readymadeui.com/readymadeui.svg"
      alt="logo"
      width={144}
      height={36}
      className="w-36"
    />
  </Link>
  )
}

export default Logo