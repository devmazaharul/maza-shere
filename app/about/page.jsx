import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div className='text-center'>
        <h1 className='text-2xl text-purple-600 font-semibold py-6'>Welcome to about page</h1>
        <p className='text-justify md:w-[50%] mx-auto leading-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut omnis a asperiores reprehenderit totam perspiciatis. Exercitationem cumque eveniet eligendi qui commodi sint molestias, voluptates eius excepturi corrupti animi amet corporis.</p>
        <Link href={'/'} className='bg-purple-600 text-white py-2 px-14 hover:bg-purple-700 rounded-md shadow-xl'><button className='mt-6'>Home</button></Link>
    </div>
  )
}
