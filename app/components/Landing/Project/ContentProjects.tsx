'use client'

import Link from "next/link";
import { Button } from "../../Button/Button";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { carousel } from "../../../lib/images";
import { motion } from "framer-motion";


export function Projects() {

  return (
    <section className="min-h-screen relative flex items-center flex-col justify-center md:gap-y-16 gap-y-8 py-16 px-[5%] border-b border-gray-500 ">
      <motion.h3
        className="md:text-6xl text-4xl text-darkBlue"
        initial={{ opacity: 0, translateY: -60 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, translateY: 0 }}>
        Diseñar grandes productos es difícil.<br />Hemos hecho más de 10 de ellos.
      </motion.h3>
      <div className="w-full flex md:flex-row flex-col justify-center gap-8 md:px-16 px-[5%]">
        <div className="h-[450px] md:w-1/3 bg-darkBlue flex flex-col items-center justify-center relative p-8">
          <h3 className="text-cream text-9xl">+10</h3>
          <Link className="absolute bottom-16" href={'/projects'}>
            <Button type="secondary">Ver Proyectos</Button>
          </Link>
        </div>
        <Swiper
          className="md:w-[800px] md:h-[450px] h-[250px] w-full border border-black mySwiper"
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {carousel.map((image, index) => (
            <SwiperSlide key={index}>
              <Image src={image.scr} alt={"project"} className="w-full h-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}