import Image from "next/image";
import { Button } from "../../components/Button/Button";
import { Landing } from "../../components/Landing/Landing";
import { ImageProjects } from "@/app/components/Projects/ImageProjects";
import { TextProjects } from "@/app/components/Projects/TextProjects";

export default function Page() {
  return (
    <section className="min-h-screen text-center">
      <Landing
        h2="Tap Wise"
        description="Descripción un poco mas detallada sobre lo realizado
        en en el proyecto y que aportamos a al mismo
        Y bueno esto es un poco de relleno para alargar el texto" />
    <ImageProjects img="/test.webp"/>
    <TextProjects 
    h3="El reto"
    p="TapWise se acercó a nosotros con un problema claro, Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Por eso, desde TDM.ar asignamos un equipo dedicado a lograr un 
    producto dentro de los más altos estándares de calidad, en un corto periodo de tiempo."/>
    <ImageProjects img="/test.webp"/>
    </section>
  );
}
