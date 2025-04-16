import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AvisoDePrivacidad() {
  return (
    <>
      <Head>
        <title>Aviso de Privacidad | Productos Industriales Marshall</title>
        <meta name="description" content="Aviso de Privacidad de Productos Industriales Marshall. Conoce cómo manejamos tus datos personales." />
      </Head>
      
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <Link href="/" className="text-brand-primary hover:underline flex items-center gap-1 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Volver al inicio
              </Link>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 relative inline-block">
              Aviso de Privacidad
              <div className="absolute -bottom-1 left-0 h-1 bg-brand-primary rounded-full w-full" />
            </h1>
            
            <div className="bg-white rounded-lg shadow-sm p-6 lg:p-10 mb-10">
              <p className="mb-6 text-sm text-gray-500">
                Última actualización: {new Date().toLocaleDateString('es-MX', {day: 'numeric', month: 'long', year: 'numeric'})}
              </p>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">1. Identidad y Domicilio del Responsable</h2>
                <p className="text-gray-700 mb-3">
                  Productos Industriales Marshall, con domicilio en [DIRECCIÓN COMPLETA], es responsable del tratamiento 
                  de sus datos personales conforme a este aviso de privacidad.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">2. Datos Personales que Recabamos</h2>
                <p className="text-gray-700 mb-3">
                  Para las finalidades señaladas en el presente aviso, podemos recabar sus datos personales de distintas formas:
                </p>
                <ul className="list-disc ml-6 mb-4 text-gray-700">
                  <li className="mb-2">Cuando usted nos los proporciona directamente a través de nuestro formulario de contacto.</li>
                  <li className="mb-2">Cuando visita nuestro sitio web y utiliza nuestros servicios en línea.</li>
                  <li className="mb-2">Cuando obtenemos información a través de otras fuentes permitidas por la ley.</li>
                </ul>
                <p className="text-gray-700 mb-2">Los datos personales que recabamos incluyen:</p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li className="mb-1">Nombre completo</li>
                  <li className="mb-1">Correo electrónico</li>
                  <li className="mb-1">Teléfono de contacto</li>
                  <li className="mb-1">Empresa (en caso de representar a una)</li>
                  <li className="mb-1">Mensajes que nos envía</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">3. Finalidades del Tratamiento</h2>
                <p className="text-gray-700 mb-3">
                  Sus datos personales serán utilizados para las siguientes finalidades:
                </p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li className="mb-2">Procesar solicitudes de información y cotizaciones sobre nuestros productos.</li>
                  <li className="mb-2">Establecer comunicación para dar seguimiento a consultas o pedidos.</li>
                  <li className="mb-2">Enviar información relevante sobre nuestros productos y servicios.</li>
                  <li className="mb-2">Realizar evaluaciones periódicas de nuestros productos y servicios para mejorar la calidad.</li>
                  <li className="mb-2">Cumplir con obligaciones contraídas con nuestros clientes.</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">4. Transferencia de Datos</h2>
                <p className="text-gray-700 mb-3">
                  Sus datos personales pueden ser transferidos y tratados dentro y fuera del país, por personas 
                  distintas a esta empresa. En ese sentido, su información puede ser compartida con proveedores de 
                  servicios para dar cumplimiento a las finalidades establecidas en el presente aviso de privacidad.
                </p>
                <p className="text-gray-700">
                  Nos comprometemos a no transferir su información personal a terceros sin su consentimiento, 
                  salvo las excepciones previstas en el artículo 37 de la Ley Federal de Protección de Datos 
                  Personales en Posesión de los Particulares.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">5. Medios para Ejercer Derechos ARCO</h2>
                <p className="text-gray-700 mb-3">
                  Usted tiene derecho a acceder, rectificar y cancelar sus datos personales, así como a oponerse 
                  al tratamiento de los mismos o revocar el consentimiento que para tal fin nos haya otorgado.
                </p>
                <p className="text-gray-700">
                  Para ejercer estos derechos, es necesario que envíe la solicitud al correo electrónico [CORREO_DERECHOS_ARCO], 
                  cumpliendo con los requisitos establecidos en la Ley Federal de Protección de Datos Personales en 
                  Posesión de los Particulares.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">6. Uso de Cookies y Web Beacons</h2>
                <p className="text-gray-700 mb-3">
                  Las cookies son archivos de texto que son descargados automáticamente y almacenados en el disco duro 
                  del equipo de cómputo del usuario al navegar en una página de Internet específica, que permiten recordar 
                  al servidor de Internet algunos datos sobre este usuario, entre ellos, sus preferencias para la visualización 
                  de las páginas en ese servidor, nombre y contraseña.
                </p>
                <p className="text-gray-700">
                  Por su parte, las web beacons son imágenes insertadas en páginas o portales de Internet así como en correos 
                  electrónicos, que pueden ser utilizadas para monitorear el comportamiento de un visitante, como almacenar 
                  información sobre la dirección IP del usuario, duración del tiempo de interacción en dicha página y el tipo 
                  de navegador utilizado, entre otros.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">7. Cambios al Aviso de Privacidad</h2>
                <p className="text-gray-700 mb-3">
                  Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente 
                  aviso de privacidad, para la atención de novedades legislativas, políticas internas o nuevos requerimientos 
                  para la prestación u ofrecimiento de nuestros servicios o productos.
                </p>
                <p className="text-gray-700">
                  Estas modificaciones estarán disponibles al público a través de nuestra página web [URL_SITIO_WEB].
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3">8. Contacto</h2>
                <p className="text-gray-700">
                  Si tiene alguna duda sobre este aviso de privacidad, puede contactarnos en:
                </p>
                <ul className="list-disc ml-6 text-gray-700 mt-2">
                  <li>Correo electrónico: saidmarshall@aol.com</li>
                  <li>Teléfono: +52 (55) 1793 5266</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </>
  );
} 