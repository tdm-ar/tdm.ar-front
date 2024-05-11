'use client'

import Image from "next/image";

import { Landing } from "../components/Landing/Landing";
import { CardInformation } from "../components/About/CardInformation";
import { motion } from "framer-motion";
import { UserCard } from "../components/About/userCard";

export default function Home() {

  return (
    <main className="min-h-screen text-center">
      <Landing
        h2="Sobre Nosotros"
        description="En nuestra agencia, nos dedicamos a convertir tus sueños en realidades tangibles, utilizando creatividad, pasión y un enfoque personalizado en cada proyecto." />
      <section className="min-h-screen w-full bg-gray-100">
        <div className="h-screen w-full flex items-center justify-center sticky top-0">
          <motion.h2
            className="md:text-7xl text-5xl"
            animate={{
              color: ["#000", "#274EE9", "#000"]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            En TDM <br /> transformamos ideas <br /> en experiencias
          </motion.h2>
        </div>
        <div className="min-h-screen flex flex-col justify-center items-center gap-36">
          <CardInformation />
          <div className="h-screen"></div>
        </div>
      </section>
      <section className="min-h-screen relative flex flex-col items-center gap-16 py-16 flex-wrap md:px-[5%] px-8 bg-white ">
        <motion.h3
          className="md:text-6xl text-4xl text-darkBlue"
          initial={{ opacity: 0, translateY: -60 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, translateY: 0 }}>
          Nuestro equipo de Trabajo
        </motion.h3>
        <div className="md:flex-row flex flex-col items-center gap-16 justify-center w-full flex-wrap">
          <UserCard 
          src="/avatar.jpg"
          name="Tomas Di Mauro"
          rol="Fundador"
          gitHub="https://github.com/TomasDmArg"
          linkedin="https://github.com/TomasDmArg"
          />
        </div>
      </section>
    </main>
  );
}
