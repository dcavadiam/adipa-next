"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useBreakpoint } from "@/lib/hooks/useBreakpoints";

import { MenuIcon } from "lucide-react";
import NavMobile from "./NavMobile";

export default function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { isMobile, isTablet } = useBreakpoint();

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
                        <Image src="/logo-adipa.svg" alt="Adipa Chile" width={200} height={200} />
                    </Link>

                    {/* Nav desktop */}
                    <nav className={`${isMobile || isTablet ? "hidden" : "flex"} gap-4 text-lg font-semibold`}>
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`${pathname === href ? "text-primary" : "text-dark"} duration-300 hover:underline`}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <button className={`${isMobile || isTablet ? "hidden" : "block"} bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 transition-colors duration-300 font-semibold cursor-pointer`}>
                            Iniciar sesión
                        </button>

                        <button
                            className={`${isMobile || isTablet ? "flex" : "hidden"} flex-col justify-center items-center w-9 h-9 gap-1.5 cursor-pointer `}
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
                        className={`${isMobile || isTablet ? "fixed" : "hidden"} inset-0 bg-black/40 z-40`}
                        onClick={() => setIsOpen(false)}
                    />
                )}

                {/* Nav móvil — panel lateral derecho */}
                <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} navLinks={navLinks} pathname={pathname} />
            </section>

        </header>
    );
}