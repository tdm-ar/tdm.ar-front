import Image from "next/image";
import { Button } from "../../components/Button/Button";
import { Landing } from "../../components/Landing/Landing";
import { ImageProjects } from "@/app/components/Projects/ImageProjects";
import { TextProjects } from "@/app/components/Projects/TextProjects";


function fetchData(id: number) {
  const { URL = `https://backend.tdm.ar/api/proyects/${id}?populate=*` } = process.env;
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

export default async function Page({params}:any) {
  const blog = await fetchData(params.id);
  console.log(blog)

  return (
    <section className="min-h-screen text-center ">
      <Landing
        h2={blog.data.attributes.title}
        description={blog.data.attributes.description} />
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
