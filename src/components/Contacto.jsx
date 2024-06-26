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

 


  const sendEmail = (e) => {
      e.preventDefault();

      const terms = document.getElementById('terms').checked;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY; 
   
    

  if (!terms) {
    alert('Debes aceptar los términos y condiciones');
    return;
  }
  if(name.length> 3  && email.length>3 && message.length>3){
    console.log("entre")
    try {
      emailjs.send('service_elxnwr3', 'template_ih6zja7', { name, email, message }, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setName("")
        setEmail("")
        setMessage("")
      }, (err) => {
        console.log('FAILED...', err);
      });
      
    } catch (error) {
      console.log(error)
    }
    
  }
  else{
    alert('Debes rellenar todos los campos');
    return;
  }
}
const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });

    const [ref, inView] = useInView({
      triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
    });
    const [ref2, inView2] = useInView({
      triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
    });
    const [ref3, inView3] = useInView({
      triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
    });

    const variantsImage = !isLarge ? {
        hidden: { scale: 0.9 },
        visible: { 
          scale: 1,
          transition: { duration: 3, ease: "easeOut" }
        }
      }
      : {
        hidden: { scale: 1.1 },
        visible: { 
          scale: 1,
          transition: { duration: 3, ease: "easeOut" }
        }
      };

      const variantsInputs = !isLarge ? {
        hidden: { scale: 0.9 },
        visible: { 
          scale: 1,
          transition: { duration: 3, ease: "easeOut" }
        }
      }
      : {
        hidden: { scale: 0.9 },
        visible: { 
          scale: 1,
          transition: { duration: 3, ease: "easeOut" }
        }
      };

    const variantsH1 = !isLarge ? {
        hidden: { opacity: 0, y:0 },
        visible: { 
          y:0,
          opacity: 1,
          transition: { duration: 3, ease: "easeOut" }
        }
      } : {
        hidden: { y: -100,
        opacity: 0},
        visible: { 
          y: 0,
          opacity: 1,
          transition: { duration: 3, ease: "easeOut" }
        }
      } 
     ;

    return (
        <section id='Contacto' className='w-full h-full lg:h-[968px] bg-brand-secondary flex flex-col-reverse lg:flex-row px-4 lg:px-10 2xl:px-14 gap-[48px] lg:gap-[0px] py-[64px] lg:py-[0px]'>
                <div className='w-full h-full flex flex-col justify-center items-center'>

                <motion.div 
                 initial="hidden"
             animate={inView ? "visible" : "hidden"}
             variants={variantsImage} className='h-[335px] lg:h-[734px] w-full 2xl:w-[616px]  rounded-[20px] lg:rounded-[69px]'>

<Image src='/images/Contact/Contact.png' width={1000} height={1000} className='w-full h-full  object-contain lg:object-cover ' alt='contactImage'/>
             </motion.div>
                </div>
                <div className='w-full h-full flex flex-col justify-center lg:items-center  2xl:items-start  text-white gap-[32px]'>
                        <motion.div 
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={variantsH1}
                        className='flex flex-col gap-[20px] text-center lg:text-start  '>
                        <h5 className='text-[18px] font-header'>Cotiza nuestro producto o mándanos tus dudas.</h5>
                        <h3 className='text-[48px] font-header font-bold'>Contáctanos</h3>
                        <h5 className='text-[18px] font-header'>Experimenta la calidad de nuestras soluciones de limpieza.</h5>
                        </motion.div>
                        <motion.div
                ref={ref2}
                initial="hidden"
                animate={inView2 ? "visible" : "hidden"}
                variants={variantsInputs}
                id='form' 
                className='w-full flex flex-col items-center  2xl:items-start gap-[24px]'
                onSubmit={sendEmail}
            >
                <div className=' flex flex-col  gap-[8px]' >
                    <label>Nombre</label>
                    <input 
                        className=' w-[350px] lg:w-[480px] 2xl:w-[616px] h-[48px] rounded-[4px] xl:rounded-[14px] text-black font-paragraph px-4 '
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div> 
                <div className='flex flex-col gap-[8px]'>
                    <label>Email</label>
                    <input 
                        className=' w-[350px] lg:w-[480px] 2xl:w-[616px] h-[48px] rounded-[4px] xl:rounded-[14px] text-black font-paragraph px-4'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <label>Mensaje</label>
                    <textarea 
                        className=' w-[350px] lg:w-[480px] 2xl:w-[616px] h-[183px] rounded-[4px] xl:rounded-[14px] text-black font-paragraph px-4'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
            <div className='flex items-center'>
                <input type='checkbox' id='terms' className='mr-4 scale-150' />
                <label htmlFor='terms'>Acepto los términos y condiciones</label>
            </div>
            <div className='w-full flex flex-row justify-center'>
            <button 
onClick={() => {
  sendEmail();
  sendGTMEvent('contacto', 'click', 'contacto');
}}            className='w-[99px] h-[48px] bg-brand-primary rounded-[8px] lg:rounded-[14px] uppercase hover:scale-110 transition-all duration-300 '>Enviar</button>
            </div>
     
    </motion.div>
    </div>
       
        </section>
  )
}

export default Contacto