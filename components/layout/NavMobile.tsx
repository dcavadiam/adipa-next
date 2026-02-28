import { Link, XIcon } from "lucide-react";

import { useBreakpoint } from "@/lib/hooks/useBreakpoints"; 

interface NavMobileProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    navLinks: { href: string, label: string }[];
    pathname: string;
}

export default function NavMobile( { isOpen, setIsOpen, navLinks, pathname }: NavMobileProps ) {
    const { isMobile, isTablet } = useBreakpoint();

    return (
        <div
            className={`${isMobile || isTablet ? "fixed" : "hidden"} top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <div className="flex justify-end items-center px-6 py-5">
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-dark transition-colors cursor-pointer"
                    aria-label="Cerrar menú"
                >
                    <XIcon className="w-6 h-6 text-primary" />
                </button>
            </div>

            <nav className="flex flex-col ">
                {navLinks.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className={`px-6 py-4 text-base font-semibold border-b border-gray-100 transition-colors duration-200 ${pathname === href ? "text-primary" : "text-dark hover:text-primary"
                            }`}
                    >
                        {label}
                    </Link>
                ))}
            </nav>

            {/* Botones al fondo */}
            <div className="px-6 py-6 flex flex-col gap-3">
                <button className="w-full bg-primary text-white px-4 py-3 rounded-lg font-semibold hover:bg-primary/80 transition-colors duration-300 cursor-pointer">
                    Iniciar sesión
                </button>
            </div>
        </div>
    )
}