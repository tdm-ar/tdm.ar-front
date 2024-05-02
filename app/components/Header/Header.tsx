'use client'

import Image from "next/image";
import { HeaderButtons } from "./HeaderButtons";
import { useState } from "react";
import styles from "./Header.module.css"
import Link from "next/link";

export function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header>
            <div className="h-24 backdrop-blur z-30 bg-white bg-opacity-60 border-b border-gray-500 flex items-center justify-between p-16 fixed w-full">
                <Link href={'/'}>
                    <Image
                        src="/logo.svg"
                        alt="TDM.ar"
                        width={130}
                        height={72}
                        priority
                    />
                </Link>
                <div onClick={toggleMenu} className="bg-darkBlue p-2 cursor-pointer transition hover:scale-105">
                    <Image
                        src="/hamburger.svg"
                        alt="TDM.ar"
                        width={34}
                        height={34}
                        priority
                    />
                </div>
            </div>
            <nav className={`z-50 text-white h-screen bg-darkBlue flex items-center fixed flex-col w-full top-0 md:pt-6 pt-20 ${menuOpen ? styles.menu_open : styles.menu_closed}`}>
                <Image
                    src="/textLogo.svg"
                    alt="TDM.ar"
                    width={469}
                    height={140}
                    priority
                    className="pt-6"
                />
                <div onClick={toggleMenu} className="absolute top-10 right-16 border-2 border-white p-2 cursor-pointer transition hover:scale-105">
                    <Image
                        src="/exit.svg"
                        alt="exit.ar"
                        width={30}
                        height={30}
                        priority
                    />
                </div>
                <HeaderButtons onCloseMenu={closeMenu} />
            </nav>
        </header>
    );

}