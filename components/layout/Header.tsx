"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="container mx-auto p-4 flex justify-between items-center font-montserrat">
            <Link href="/">
                <Image src="/logo-adipa.svg" alt="Adipa Chile" width={200} height={200} />
            </Link>
            <nav className="flex gap-4 text-lg font-semibold">   
                <Link href="/cursos" className={`${pathname === "/cursos" ? "text-primary" : "text-dark"} duration-300 hover:underline`}>Cursos</Link>
                <Link href="/diplomados" className={`${pathname === "/diplomados" ? "text-primary" : "text-dark"} duration-300 hover:underline`}>Diplomados</Link>
                <Link href="/recursos" className={`${pathname === "/recursos" ? "text-primary" : "text-dark"} duration-300 hover:underline`}>Recursos</Link>
                <Link href="/contacto" className={`${pathname === "/contacto" ? "text-primary" : "text-dark"} duration-300 hover:underline`}>Contacto</Link>
            </nav>
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 transition-colors duration-300 font-semibold cursor-pointer">Iniciar sesión</button>
        </header>
    );
}