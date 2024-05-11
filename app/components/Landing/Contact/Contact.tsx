'use client'

import { motion } from "framer-motion";
import { Maincard, SecondaryCard } from "./Card";

export function Contact() {

    return (
        <section className="min-h-screen relative flex items-center flex-col justify-center md:px-[5%] px-8 py-16 md:gap-y-16 gap-y-8 bg-white">
            <motion.h3
                className="md:text-6xl text-4xl text-darkBlue"
                initial={{ opacity: 0, translateY: -60 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, translateY: 0 }}>
                Su camino hacia el éxito del producto<br />comienza aquí
            </motion.h3>
            <p className="md:w-5/12 text-xl">Obtenga un presupuesto gratuito y sugerencias para su proyecto.</p>
            <motion.div
                className="flex gap-8 md:flex-row flex-col"
                initial={{ opacity: 0, translateY: 60 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, translateY: 0 }}>
                <Maincard
                    number="1"
                    p="Contacto"
                />
                <SecondaryCard
                    number="2"
                    p="Conócenos en línea"
                />
                <SecondaryCard
                    number="3"
                    p="Estimación gratuita"
                />
                <SecondaryCard
                    number="4"
                    p="Trabajar juntos"
                />
            </motion.div>
        </section>
    );
}

