import Head from 'next/head';
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
import Script from 'next/script';
import { GoogleTagManager, sendGTMEvent } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>

        <title>Productos Industriales Marshall</title>
        <meta name="description" content="Experimenta la más alta calidad de trapo industrial en el mercado, que harán la diferencia en tu negocio gracias a nuestra eficacia y versatilidad mejorando la productividad y eficiencia de tus instalaciones." />
        <meta name="keywords" content="trapo, trapo industrial, trapo tipo camiseta, trapo unido, trapo color" />
        <meta property="og:title" content="Productos Industriales Marshall" />
        <meta property="og:description" content="Experimenta la más alta calidad de trapo industrial en el mercado, que harán la diferencia en tu negocio gracias a nuestra eficacia y versatilidad mejorando la productividad y eficiencia de tus instalaciones." />
        <meta property="og:image" content="/images/ogimage.png" />
        <meta property="og:url" content="www.productosindustrialesmarshall.com" />
        <meta name="twitter:card" content="/images/ogimage.png" />
      </Head>
      <main className='w-full h-full max-w-[1444px] mx-auto relative min-w-[354px] overflow-hidden'>
      
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
        className='animate-pulse transition-all duration-700 hover:animate-none hover:scale-110 '
          style={{position: 'fixed', bottom: '25px', right: '25px', padding: '10px', backgroundColor: '#25D366', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', textDecoration: 'none'}}
          onClick={() => {
            if (typeof window !== 'undefined') {
              sendGTMEvent('whatsapp', 'click', 'whatsapp');
            }
          }}
          >
          <Image src="/images/whatsapp.svg" alt="WhatsApp" width={100} height={100}
          
          style={{width: '48px', height: '48px'}}/>
        </a>
      </main>
    </>
  )
}