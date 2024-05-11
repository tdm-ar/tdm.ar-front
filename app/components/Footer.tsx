'use client'

import { motion } from "framer-motion";
import { ContactButton } from "./Button/ContactButton"
import Image from "next/image";
import { IconBrandInstagram, IconBrandX, IconBrandLinkedin, IconBrandFigma } from "@tabler/icons-react";
import { IconAnimation } from "@/app/components/IconAnimation/IconAnimation";

export function Footer() {
  const icons = [<IconBrandInstagram key={0} />, <IconBrandX key={1}/>, <IconBrandLinkedin key={2} />, <IconBrandFigma key={3} />];

  return (
    <motion.footer
    initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1}}
          className="relative flex items-center flex-col justify-center gap-y-6 mt-16"
    >
      <p>¿Queres iniciar un proyecto?</p>
      <IconAnimation/>
      <ContactButton/>
      <section className="w-full flex md:justify-between justify-center items-center border-t border-[#ddd] mt-8 p-16 gap-x-8">
        <div className="flex gap-4">
          {icons.map((icon, index) => (
            <div key={index}>{icon}</div>
          ))}
        </div>
        <div>
          <p>tomas@tdm.ar</p>
        </div>
      </section>
    </motion.footer>
  );
}