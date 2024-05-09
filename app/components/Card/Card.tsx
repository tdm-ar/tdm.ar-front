import Image from "next/image";
import Link from "next/link";

export function Maincard(props: any) {

    return (
        <Link href={"/contact"}>
        <div className="bg-lightBlue h-80 flex flex-col justify-between items-start transition hover:scale-105">
            <div className="m-5 text-cream">
                <p className="inline">0{props.number} </p>
                <p className="inline">{props.p}</p>
            </div>
            <Image
                src={`/${props.number}.webp`}
                alt="TDM.ar"
                width={268}
                height={152}
                priority
            />
        </div>
        </Link>
    );
}

export function SecondaryCard(props: any) {

    return (
        <div className="group bg-white border text-lightBlue border-lightBlue h-80 flex flex-col justify-between items-start transition hover:scale-105 hover:bg-lightBlue hover:text-white">
            <div className="m-5">
                <p className="inline">0{props.number} </p>
                <p className="inline">{props.p}</p>
            </div>
            <Image
                src={`/${props.number}.webp`}
                alt="TDM.ar"
                width={268}
                height={152}
                priority
                className="transition group-hover:translate-y-[-30px]"
            />
        </div>
    );
}