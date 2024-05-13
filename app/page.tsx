import Image from "next/image";
import { Button } from "./components/Button/Button";
import { Landing } from "./components/Landing/Landing";
import { Projects } from "./components/Landing/Projects/ContentProjects";
import { Information } from "./components/Landing/Information";
import { Comments } from "./components/Landing/Comments/ContentComments";
import { Contact } from "./components/Landing/Contact/Contact";

export default function Home() {
  return (
    <main className="min-h-screen text-center">
      <Landing
      h2="Llevemos tu idea o producto al siguiente nivel"
      description="Con nuestro equipo experto en iteración de producto y desarrollo de MVP podemos crear la solución ideal para tu idea o proyecto."/>
      <Projects/>
      <Information/>
      <Comments/>
      <Contact/>
    </main>
  );
}
