'use client'

import { motion } from "framer-motion";
import { Button } from "../Button/Button";
import { ContactButton } from "../Button/ContactButton"

export function Information() {

  return (
    <section className="min-h-screen relative flex items-center flex-col justify-center md:gap-y-16 gap-y-8 py-8 md:px-[5%] px-16 border-b border-gray-500">
      <motion.h3
        className="md:text-6xl text-4xl  text-darkBlue"
        initial={{ opacity: 0, translateY: -60 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, translateY: 0 }}>
        Llevamos sus ideas innovadoras<br />a la realidad
      </motion.h3>
      <p className="md:w-7/12 text-xl">Nuestro equipo multidisciplinario de desarrolladores,
        diseñadores UX/UI con amplia experiencia en startups trabaja
        en estrecha colaboración para entregar soluciones digitales
        que superan las expectativas. Usamos las últimas tecnologías
        y mejores prácticas de la industria para generar resultados excepcionales.</p>
      <motion.div
        className="w-full flex md:flex-row flex-col justify-center gap-8"
        initial={{ opacity: 0, translateY: 60 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, translateY: 0 }}>
        <div className="md:w-[30%] bg-cream border border-lightBlue flex flex-col items-center justify-between gap-4 py-8 px-7 transition hover:scale-[1.02]">
          <h3 className="text-lightBlue text-4xl">Desarrollo de MVPs</h3>
          <p className="text-lightBlue text-base">
            Transformamos sus ideas visionarios en aplicaciones funcionales y
            atractivas que contienen las funciones principales para ser validadas
            en el mercado lo antes posible. Sistema de diseño e identidad de marca.
          </p>
          <ContactButton />
        </div>
        <div className="md:w-[45%] bg-cream border border-lightBlue flex flex-col items-center justify-center gap-4 py-8 px-7 transition hover:scale-[1.02]">
          <h3 className="text-lightBlue text-4xl">Rediseño de aplicaciones existentes</h3>
          <p className="text-lightBlue text-base">
            Analizamos exhaustivamente la experiencia de usuario actual de su aplicación.
            Identificamos puntos de fricción y oportunidades de mejora. Rediseñamos interfaces
            intuitivas y atractivas, priorizando la usabilidad. Optimizamos el flujo de
            interacción para brindar una experiencia excepcional. Actualizamos el look and
            feel de su aplicación con un diseño moderno y cautivador.
          </p>
          <ContactButton />
        </div>
      </motion.div>
    </section>
  );
}