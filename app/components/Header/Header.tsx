'use client'

import Image from "next/image";
import { HeaderButtons } from "./HeaderButtons";
import { useEffect, useState } from "react";
import styles from "./Header.module.css"
import Link from "next/link";
import { motion } from "framer-motion";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollPos > currentScrollPos;
            prevScrollPos = currentScrollPos;
            setShowHeader(visible);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <header>
             <motion.div 
                className={`h-24 backdrop-blur z-30 bg-white bg-opacity-60 flex items-center justify-between md:px-[5%] px-8 fixed w-full`}
                initial={{ opacity: 0, translateY: -60 }}
                animate={{ opacity: showHeader ? 1 : 0, translateY: showHeader? 0 : -60 }}
                transition={{ duration: 0.3 }}
            >
                <Link href={'/'}>
                    <Image
                        src="/logo.svg"
                        alt="TDM.ar"
                        width={110}
                        height={61}
                        priority
                    />
                </Link>
                <div onClick={toggleMenu} className="p-2 cursor-pointer transition hover:scale-105">
                    <Image
                        src="/hamburger.svg"
                        alt="TDM.ar"
                        width={34}
                        height={34}
                        priority
                    />
                </div>
            </motion.div>
            <nav className={`z-50 text-white h-screen bg-darkBlue flex items-center fixed flex-col w-full top-0 md:pt-6 pt-20 ${menuOpen ? styles.menu_open : styles.menu_closed}`}>
                <Image
                    src="/textLogo.svg"
                    alt="TDM.ar"
                    width={455}
                    height={133}
                    priority
                    className="pt-6 md:px-0 px-[5%]"
                />
                <div onClick={toggleMenu} className="absolute top-6 right-[5%] border-2 border-white p-2 cursor-pointer transition hover:scale-105">
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