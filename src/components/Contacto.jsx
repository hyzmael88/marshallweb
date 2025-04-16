import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer'; // Importa useInView
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { sendGTMEvent } from '@next/third-parties/google';


function Contacto() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const terms = document.getElementById('terms').checked;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY; 
  
    if (!terms) {
      alert('Debes aceptar los términos y condiciones');
      return;
    }
    
    if(name.length > 3 && email.length > 3 && message.length > 3) {
      try {
        emailjs.send('service_elxnwr3', 'template_ih6zja7', { name, email, message }, publicKey)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
          setIsFormSubmitted(true);
          
          // Track successful form submission
          if (typeof window !== 'undefined') {
            sendGTMEvent('contacto', 'submit', 'email-form');
          }
        }, (err) => {
          console.log('FAILED...', err);
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('Debes rellenar todos los campos');
      return;
    }
  }
  
  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variantsImage = !isLarge ? {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  } : {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const variantsInputs = !isLarge ? {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }
    }
  } : {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }
    }
  };

  const variantsH1 = !isLarge ? {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  } : {
    hidden: { y: -30, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleWhatsAppClick = (message) => {
    window.open(`https://wa.me/+525517935266?text=${encodeURIComponent(message)}`, "_blank");
    if (typeof window !== 'undefined') {
      sendGTMEvent('whatsapp', 'click', 'whatsapp-contacto');
    }
  };

  return (
    <section id='Contacto' className='w-full py-16 bg-brand-secondary flex flex-col-reverse lg:flex-row px-4 lg:px-10 2xl:px-14 gap-[48px] lg:gap-[80px] overflow-hidden'>
      <div className='w-full lg:w-1/2 flex flex-col justify-center items-center'>
        <motion.div 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variantsImage} 
          className='h-[335px] lg:h-[600px] w-full rounded-[20px] lg:rounded-[30px] overflow-hidden shadow-lg'
          ref={ref}
        >
          <Image 
            src='/images/Contact/Contact.png' 
            width={1000} 
            height={1000} 
            className='w-full h-full object-contain lg:object-cover hover:scale-105 transition-all duration-700' 
            alt='contactImage'
            priority
          />
        </motion.div>
      </div>
      <div className='w-full lg:w-1/2 flex flex-col justify-center text-white gap-[32px]'>
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variantsH1}
          className='flex flex-col gap-[20px] text-center lg:text-start'
        >
          <h5 className='text-[18px] font-header'>Cotiza nuestro producto o mándanos tus dudas.</h5>
          <h3 className='text-[48px] font-header font-bold relative'>
            Contáctanos
            <motion.div 
              className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:-translate-x-0 h-1 bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: isLarge ? '40%' : '80%' }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </h3>
          <h5 className='text-[18px] font-header'>Experimenta la calidad de nuestras soluciones de limpieza.</h5>
          
          <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2'>
            <motion.a 
              href="https://wa.me/+525517935266?text=Hola!%20me%20interesa%20cotizar%20trapos%20industriales" 
              target="_blank"
              className='flex items-center justify-center gap-2 bg-[#25D366] shadow-brand rounded-[10px] text-white px-[16px] py-[12px] hover:scale-105 transition-all duration-300 font-bold'
              onClick={() => {
                if (typeof window !== 'undefined') {
                  sendGTMEvent('whatsapp', 'click', 'whatsapp-contacto');
                }
              }}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Cotiza por WhatsApp</span>
              <Image src="/images/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
            </motion.a>
            
          </div>
        </motion.div>
        
        {isFormSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-green-700 bg-opacity-30 rounded-xl p-6 text-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h4 className="text-xl font-bold mb-2">¡Mensaje enviado con éxito!</h4>
            <p className="mb-4">Nos pondremos en contacto contigo pronto.</p>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => handleWhatsAppClick("Hola! Ya envié un mensaje a través del formulario, pero prefiero chatear por WhatsApp.")}
              className="bg-[#25D366] rounded-lg px-6 py-3 font-bold flex items-center justify-center gap-2 mx-auto"
            >
              <span>Continuar en WhatsApp</span>
              <Image src="/images/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
            </motion.button>
          </motion.div>
        ) : (
          <motion.form
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={variantsInputs}
            id='form' 
            className='w-full flex flex-col gap-[24px]'
            onSubmit={sendEmail}
          >
            <motion.div className='flex flex-col gap-[8px] w-full' variants={inputVariants}>
              <label>Nombre</label>
              <input 
                className='w-full h-[48px] rounded-[8px] text-black font-paragraph px-4 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
              />
            </motion.div> 
            <motion.div className='flex flex-col gap-[8px] w-full' variants={inputVariants}>
              <label>Email</label>
              <input 
                className='w-full h-[48px] rounded-[8px] text-black font-paragraph px-4 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="correo@ejemplo.com"
                type="email"
              />
            </motion.div>
            <motion.div className='flex flex-col gap-[8px] w-full' variants={inputVariants}>
              <label>Mensaje</label>
              <textarea 
                className='w-full h-[183px] rounded-[8px] text-black font-paragraph px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu mensaje o solicitud de cotización aquí..."
              />
            </motion.div>
            <motion.div className='flex items-center w-full' variants={inputVariants}>
              <input type='checkbox' id='terms' className='mr-4 scale-150' />
              <label htmlFor='terms'>Acepto los términos y condiciones</label>
            </motion.div>
            <motion.div className='w-full flex flex-col sm:flex-row justify-center lg:justify-start gap-4'>
              <motion.button 
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                type="submit"
                className='px-[32px] py-[12px] bg-brand-primary rounded-[8px] font-bold transition-all duration-300 flex items-center justify-center gap-2'
              >
                <span>Enviar mensaje</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </motion.button>
              <motion.button 
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                type="button"
                onClick={() => handleWhatsAppClick("Hola! Prefiero contactarlos directamente por WhatsApp.")}
                className='px-[32px] py-[12px] bg-[#25D366] rounded-[8px] font-bold transition-all duration-300 flex items-center justify-center gap-2'
              >
                <span>O contacta por WhatsApp</span>
                <Image src="/images/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
              </motion.button>
            </motion.div>
            <motion.p className="text-sm text-center lg:text-left mt-2">
              También puedes llamarnos directamente al <a href="tel:+525517935266" className="underline hover:text-brand-primary">+52 55 1793 5266</a>
            </motion.p>
          </motion.form>
        )}
      </div>
    </section>
  )
}

export default Contacto