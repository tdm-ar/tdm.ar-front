'use client'

import Image from "next/image";
import { Button } from "../Button/Button";
import { useState } from "react";
import { motion } from "framer-motion"
import Link from "next/link";


export function ProjectCard(project: any ) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div className="bg-lightBlue h-96 flex relative flex-col justify-evenly items-start p-4 pt-0 max-w-72 text-white"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                    <div className="flex z-20 gap-x-4">
                <Image src={project.src} height={35} width={20} alt={""} className="z-20 "/>
                <h3 className="text-xl z-20">{project.name}</h3>
                </div>
                <p className="z-20">{project.subtitle}</p>
                <motion.div
                    initial={{ opacity: 0, translateX: 70 }}
                    animate={{ opacity: isHovered ? 1 : 0, translateX: isHovered ? 0 : 70 }}
                    transition={{ duration: 0.3 }}
                    className={`flex flex-col items-end text-start z-20 gap-4 ${isHovered ? 'visible' : 'invisible'}`}
                >
                    <p>{project.description}</p>
                    <Link href={`/projects/${project.id}`}>
                    <Button type="secondary">Ver Mas</Button>
                    </Link>
                </motion.div>
                <motion.div
                className={`absolute w-full h-full bg-[#000] bg-opacity-30 top-0 right-0 ${isHovered ? 'visible' : 'invisible'}`}
                initial={{ opacity: 0, translateX: 10 }}
                animate={{ opacity: isHovered ? 1 : 0, translateX: isHovered ? 0 : 10 }}
                ></motion.div>
                <div className="absolute w-full h-full bg-gradient-to-t from-transparent to-[rgba(0,0,0,0.3)] top-0 right-0 "></div>
            </div>
            
        </>
    );
}