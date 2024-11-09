import { socialLinks } from '@/constant'
import Link from 'next/link'
import React from 'react'

function SoicalMedia() {
  return (
    <div>
        <ul className="flex gap-4 flex-col text-[#0a4275]">
              {socialLinks.map((platform) => (
                <li key={platform.platform}>
                  <Link href={platform.url} passHref>
                     <platform.icon size={20}/>
                  </Link>
                </li>
              ))}
            </ul>
    </div>
  )
}

export default SoicalMedia