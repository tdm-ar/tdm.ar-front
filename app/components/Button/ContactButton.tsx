import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";

export function ContactButton() {
    return (
    <><Link href={'/contact'}>
            <Button className="z-20">Contacto</Button>
        </Link></>
    );
}
