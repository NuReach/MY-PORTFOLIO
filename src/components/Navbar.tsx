import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between p-3 w-full'>
        <div>
            Hong Nnureach
        </div>
        <div className='flex gap-3'>
            <Link href={`/`}>Home</Link>
            <Link href={`/project`}>Project</Link>
            <Link href={`/about`}>About</Link>
            <Link href={`/contact`}>Contact</Link>
        </div>
    </div>
  )
}
