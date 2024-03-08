import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Acerca from '@/components/Acerca'
import HotspotImage from '@/components/HotspotImage'
import Proceso from '@/components/Proceso'
import Productos from '@/components/Productos'
import Testimonios from '@/components/Testimonios'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'
import Jaizmora from '@/components/Jaizmora'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='w-full h-full max-w-[1444px] mx-auto relative min-w-[354px]'>
     <Navbar/>
     <Hero/>
     <Acerca/>
     <HotspotImage/>
     <Proceso/>
     <Productos/>
     <Testimonios/>
     <Contacto/>
     <Footer/>
     <Jaizmora/>
     <a href="https://wa.me/+525517935266?text=Hola!%20me%20podrías%20dar%20mas%20información?" 
        style={{position: 'fixed', bottom: '50px', right: '50px', padding: '10px', backgroundColor: '#25D366', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', textDecoration: 'none'}}>
       <img src="/images/whatsapp.svg" alt="WhatsApp" style={{width: '48px', height: '48px'}}/>
     </a>
    </main>
   )
}
