import Image from "next/image";
import { motion } from "framer-motion"

export function ImageProjects(props: any ) {
    return (
        <section className="h-min w-full object-contain bg-lightBlue">
            <Image className=" w-full" src={props.img} alt={props.alt} width={1000} height={1000}/>
        </section>
    );
}