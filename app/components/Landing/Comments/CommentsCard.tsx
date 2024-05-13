import Image from "next/image";
import { Button } from "../../Button/Button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

async function DataBase() {
    const { URL = "https://backend.tdm.ar/api/testimonials" } = process.env
    const res = await fetch(URL)
    if (!res.ok) {
        throw new Error('error')
    }
    const { data } = await res.json()
    return data
}

export function CommentsCard() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchData()
            .then(response => {
                console.log(response);
                if (response && response.data && response.data.length > 0) {
                    const commentsData = response.data.map((item: { attributes: any; }) => item.attributes);
                    setComments(commentsData);
                } else {
                    console.error('No se encontraron comentarios.');
                }
            })
            .catch(error => {
                console.error('Error al obtener comentarios:', error);
            });
    }, []);


    function fetchData() {
        const { URL = "https://backend.tdm.ar/api/testimonials" } = process.env;
        return fetch(URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los comentarios');
                }
                return response.json();
            })
            .then(data => data)
            .catch(error => {
                console.error('Error al obtener comentarios:', error);
                return [];
            });
    }


    return (
        <section className="flex gap-8 flex-wrap justify-center">
            {comments.map((comment: any) => (
                <div className="bg-white border border-lightBlue text-black flex relative gap-6 flex-col text-start p-4 w-72 h-min" key={comment.id}>
                    <p>{comment.testimonial}</p>
                    <div className="flex gap-4 items-center">
                        <Image src={"/avatar.jpg"} height={40} width={40} alt={""} priority className="h-14 w-14 border border-black rounded-full object-cover" />
                        <div>
                            <b>{comment.name}</b>
                            <p>{comment.job_title}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}