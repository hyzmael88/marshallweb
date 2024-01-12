import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Acerca from '@/components/Acerca'
import HotspotImage from '@/components/HotspotImage'
import Proceso from '@/components/Proceso'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main className='w-full h-full max-w-[1444px] mx-auto relative'>
    <Navbar/>
    <Hero/>
    <Acerca/>
    <HotspotImage/>
    <Proceso/>
   </main>
  )
}
