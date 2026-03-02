"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { MenuIcon } from "lucide-react";
import NavMobile from "./NavMobile";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/cursos", label: "Cursos" },
        { href: "/diplomados", label: "Diplomados" },
        { href: "/recursos", label: "Recursos" },
        { href: "/contacto", label: "Contacto" },
    ];

    return (
        <header className="font-montserrat">
            <section className="container-adipa">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image src="/logo-adipa.svg" alt="Adipa Chile" width={180} height={180} />
                    </Link>

                    {/* Nav desktop */}
                    <nav className="hidden lg:flex gap-4 text-base font-semibold">
                        {navLinks.map(({ label }) => (
                            <span
                                key={label}
                                className={`cursor-pointer duration-300 hover:text-primary`}
                            >
                                {label}
                            </span>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <button className="hidden lg:block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 transition-colors duration-300 font-semibold cursor-pointer">
                            Iniciar sesión
                        </button>

                        <button
                            className="flex lg:hidden flex-col justify-center items-center w-9 h-9 gap-1.5 cursor-pointer "
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Abrir menú"
                        >
                            <MenuIcon className={`w-6 h-6 text-primary ${isOpen ? "hidden" : "block"} transition-all duration-300`} />
                        </button>
                    </div>
                </div>

                {/* Overlay */}
                {isOpen && (
                    <div
                        className="fixed lg:hidden inset-0 bg-black/40 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                )}

                {/* Nav móvil — panel lateral derecho */}
                <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} navLinks={navLinks} />
            </section>

        </header>
    );
}