import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className=' grid grid-cols-4 grid-rows-2 gap-8 '>

        <div className='relative bg-black py-80 px-32 rounded-2xl row-span-2'>
          <div className=' absolute left-0 top-0 bg-teal-300 py-20 px-32 rounded-2xl'></div>
        </div>
        <div className='bg-black p-3 rounded'></div>
        <div className='bg-black p-3 rounded'></div>
        <div className='bg-black p-3 rounded'></div>
        <div className='bg-black p-3 rounded'></div>
        <div className='bg-black p-3 rounded'></div>
        <div className='bg-black p-3 rounded'></div>

      </div>
    </div>
  )
}
