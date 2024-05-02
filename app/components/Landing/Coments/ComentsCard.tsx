'use client'

import Image from "next/image";
import { Button } from "../../Button/Button";
import { motion } from "framer-motion";

const coments = [
    { name: 'Gorge Villaruel', text: 'son unos copados me ayudaron un monton a poder hacer mi pagina', busisnes: 'Empresa' },
    { name: 'Gorge Villaruel', text: 'son unos copados me ayudaron un monton a poder hacer mi pagina son unos copados me ayudaron un monton a poder hacer mi pagina', busisnes: 'Empresa' },
    { name: 'Gorge Villaruel', text: 'son unos copados me ayudaron un monton a poder hacer mi pagina', busisnes: 'Empresa' },
    { name: 'Gorge Villaruel', text: 'son unos copados me ayudaron un monton a poder ayudaron un monton a poder hacer mi pagina', busisnes: 'Empresa' },
    { name: 'Gorge Villaruel', text: 'son unos copados me ayudaron un monton a poder hacer mi pagina', busisnes: 'Empresa' },
    { name: 'Gorge Villaruel', text: 'son unos copados me ayudaron un monton a poder hacer mi pagina son unos copados me ayudaron un hacer mi pagina', busisnes: 'Empresa' },
    { name: 'Gorge Villaruel', text: 'son unos copados me ayudaron un monton a poder hacer mi pagina', busisnes: 'Empresa' },
    { name: 'Gorge Villaruel', text: 'son unos copados me ayudaron un monton a poder hacer mi pagina son unos copados me ayudaron un monton a poder hacer mi pagina', busisnes: 'Empresa' },
    { name: 'Gorge Villaruel', text: 'son unos copados me ayudaron un monton a poder hacer mi pagina', busisnes: 'Empresa' },
    { name: 'Gorge Villaruel', text: 'son unos copados me ayudaron un monton a poder hacer mi pagina son unos copados me ayudaron un monton a poder pagina', busisnes: 'Empresa' },
]

export function ComentsCard() {

    return (
        <><section className="flex gap-8 flex-wrap justify-center">
            {coments.map((coment) => (
                <div className="bg-white border border-lightBlue text-black flex relative gap-6 flex-col text-start p-4 w-72 h-min">
                    <p>{`<p> ${coment.text} <p/>`}</p>
                    <div className="flex gap-4 items-center">
                        <Image src={"/avatar.jpg"} height={40} width={40} alt={""} priority className="h-14 w-14 border border-black rounded-full object-cover"></Image>
                        <div>
                            <b>{coment.name}</b>
                            <p>{coment.busisnes}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
        </>
    );
}