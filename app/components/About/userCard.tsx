import Image from "next/image";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export function UserCard(props: any) {

    return (
        <>
            <div className="md:w-96 w-full bg-white backdrop-blur border-2 border-lightBlue flex text-left transition relative">
                <Image
                    src={props.src}
                    alt="TDM.ar"
                    width={115}
                    height={115}
                    priority
                    className="w-28 h-28 object-cover"
                />
                <div className="pt-3 pl-4">
                    <h3 className="text-xl">{props.name}</h3>
                    <p>{props.rol}</p>
                </div>
                <div className="absolute bottom-3 right-4 flex gap-4">
                    <a target="_blank" href={props.gitHub}>
                        <IconBrandGithub />
                    </a>
                    <a target="_blank" href={props.linkedin}>
                        <IconBrandLinkedin />
                    </a>
                </div>
            </div>
        </>
    );
}

