"use client";

import Link from "next/link";
import Image from "next/image";

import { FaFacebookF, FaInstagram, FaYoutube, FaSpotify, FaTiktok, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
       <>
            <footer className="font-montserrat bg-dark text-white py-4">
                <section className="container-adipa flex justify-between items-center flex-col gap-6 lg:flex-row">
                    <div className="flex flex-col gap-2 items-center lg:items-start">
                        <Link href="/">
                            <Image src="/logo-adipa-white.svg" alt="Adipa Chile" width={200} height={200} />
                        </Link>
                        <p className="text-sm">© Adipa {new Date().getFullYear()} - Todos los derechos reservados.</p>
                    </div>
                        <ul className="flex flex-col gap-2 items-center lg:flex-row lg:gap-4 lg:items-start">
                            <li><Link href="/cursos">Cursos</Link></li>
                            <li><Link href="/diplomados">Diplomados</Link></li>
                            <li><Link href="/recursos">Recursos</Link></li>
                            <li><Link href="/contacto">Contacto</Link></li>
                        </ul>
                    <div className="flex flex-col gap-2 items-center lg:items-start">
                        Síguenos en nuestras redes sociales
                        <div className="flex gap-3">
                            <a href="https://www.facebook.com/Adipa-102577181991776" target="_blank" rel="noopener noreferrer" className="text-white rounded-full p-2 bg-white">
                                <FaFacebookF size={20} className="text-dark" />
                            </a>
                            <a href="https://www.instagram.com/adipa.cl/" target="_blank" rel="noopener noreferrer" className="text-white rounded-full p-2 bg-white">
                                <FaInstagram size={20} className="text-dark" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCSx-fxlxiMHExaWwyHT8P8A" target="_blank" rel="noopener noreferrer" className="text-white rounded-full p-2 bg-white">
                                <FaYoutube size={20} className="text-dark" />
                            </a>
                            <a href="https://www.linkedin.com/company/academia-digital-de-psicologia-y-aprendizaje-adipa/" target="_blank" rel="noopener noreferrer" className="text-white rounded-full p-2 bg-white">
                                <FaLinkedinIn size={20} className="text-dark" />
                            </a>
                            <a href="https://open.spotify.com/show/4mwZlXLYaGdr9WIqiuSHup" target="_blank" rel="noopener noreferrer" className="text-white rounded-full p-2 bg-white">
                                <FaSpotify size={20} className="text-dark" />
                            </a>
                            <a href="https://www.tiktok.com/@somosadipa" target="_blank" rel="noopener noreferrer" className="text-white rounded-full p-2 bg-white">
                                <FaTiktok size={20} className="text-dark" />
                            </a>
                        </div>
                    </div>
                    
                </section>
            </footer>
        
       </>
    )
}