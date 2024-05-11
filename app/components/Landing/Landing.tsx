'use client'

import Image from "next/image";
import { ContactButton } from "../Button/ContactButton"
import styles from "./Landing.module.css"
import { Button } from "../Button/Button";
import { motion } from "framer-motion";


export function Landing(props: any) {

  return (
    <section className="min-h-screen  flex items-center flex-col justify-center py-32 2xl:gap-y-16 gap-y-8 2xl:px-[20%] px-8 sticky top-0 -z-20">
      <div className="flex flex-col items-center gap-4 z-20">
        <motion.h2
          className="md:text-7xl text-5xl"
          initial={{ opacity: 0, translateY: -60 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, translateY: 0 }}>
          {props.h2}
        </motion.h2>
        <motion.div initial={{ opacity: 0, translateY: 60 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, translateY: 0 }}>
          <Image
            src="/decoration.svg"
            alt="TDM.ar"
            width={283}
            height={18}
            priority
          />
        </motion.div>
      </div>
      <motion.p
        className="text-xl md:w-9/12 z-20 "
        initial={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 1, }}
        whileInView={{ opacity: 1, scale: 1 }}>
        {props.description}
      </motion.p>
      <motion.div initial={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}>
        <ContactButton />
      </motion.div>
      <Image
        src="/mouse.svg"
        alt="TDM.ar"
        width={20}
        height={20}
        priority
        className="absolute 2xl:bottom-16 bottom-8 z-20"
      />
      <div className="bg-gradient-to-t from-darkBlue to-white absolute bottom-0 w-full h-96 opacity-30 z-0"></div>
    </section>
  );
}