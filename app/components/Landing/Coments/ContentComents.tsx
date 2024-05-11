'use client'

import { motion } from "framer-motion";
import { ComentsCard } from "./ComentsCard";

export function Coments() {

  return (
    <section className="min-h-screen relative flex items-center flex-col justify-center md:gap-y-16 gap-y-8 py-16 bg-white">
      <motion.h3
          className="md:text-6xl text-4xl text-darkBlue"
          initial={{ opacity: 0, translateY: -60 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, translateY: 0 }}>
          Lo que dicen quienes han trabajado <br/> con nosotros
        </motion.h3>
      <div className="slider">
        <div className="slide-track">
        <ComentsCard/>
        </div>
      </div>
    </section>
  );
}