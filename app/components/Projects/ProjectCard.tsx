'use client'

import Image from "next/image";
import { Button } from "../Button/Button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import Link from "next/link";

export function ProjectCard() {
    const [proyects, setProyects] = useState<any[]>([]);

    useEffect(() => {
        fetchData()
            .then(response => {
                console.log(response);
                if (response && response.data && response.data.length > 0) {
                    const proyectsData = response.data.map((item: { attributes: any; }) => ({
                        ...item.attributes,
                        isHovered: false
                    }));
                    console.log(proyectsData);
                    setProyects(proyectsData);
                } else {
                    console.error('No se encontraron proyectos.');
                }
            })
            .catch(error => {
                console.error('Error al obtener proyectos:', error);
            });
    }, []);

    function fetchData() {
        const { URL = "https://backend.tdm.ar/api/proyects?populate=*" } = process.env;
        return fetch(URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los proyectos');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error al obtener proyectos:', error);
                return [];
            });
    }

    function handleMouseEnter(index: number) {
        const updatedProyects = [...proyects];
        updatedProyects[index].isHovered = true;
        setProyects(updatedProyects);
    }

    function handleMouseLeave(index: number) {
        const updatedProyects = [...proyects];
        updatedProyects[index].isHovered = false;
        setProyects(updatedProyects);
    }

    return (
        <>
            {proyects.map((project: any, index: number) => (
                <div className="bg-lightBlue h-96 flex relative flex-col justify-evenly items-start transition p-4 pt-0 max-w-72 text-white"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                >
                    <div className="flex z-20 gap-x-4">
                        <Image src={`https://backend.tdm.ar${project.cover.data.attributes.url}`} height={35} width={20} alt={""} className="z-20 " />
                        <h3 className="text-xl z-20">{project.title}</h3>
                    </div>
                    <p className="z-20">{project.subtitle}</p>
                    <motion.div
                        initial={{ opacity: 0, translateX: 70 }}
                        animate={{ opacity: project.isHovered ? 1 : 0, translateX: project.isHovered ? 0 : 70 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={`flex flex-col items-end text-start z-20 gap-4 ${project.isHovered ? 'visible' : 'invisible'}`}
                    >
                        <p>{project.description}</p>
                        <Link href={`/projects/${project.title}`}>
                            <Button type="secondary">Ver Mas</Button>
                        </Link>
                    </motion.div>
                    <motion.div
                        className={`absolute w-full h-full bg-[#000] bg-opacity-30 top-0 right-0 ${project.isHovered ? 'visible' : 'invisible'}`}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        animate={{ opacity: project.isHovered ? 1 : 0 }}
                    ></motion.div>
                    <div className="absolute w-full h-full bg-gradient-to-t from-transparent to-[rgba(0,0,0,0.3)] top-0 right-0 "></div>
                </div>
            ))}
        </>
    );
}
