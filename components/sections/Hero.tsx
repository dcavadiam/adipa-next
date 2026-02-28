import Image from "next/image";

export default function Hero() {
    return (
        <section className="font-montserrat bg-linear-to-r from-primary to-secondary text-white">
            <div className="container-adipa px-4 py-16 flex items-center justify-center gap-10">
                <div className="flex flex-col items-center justify-center">
                    <span
                        className="mb-4 px-4 py-1.5 rounded-full text-sm font-semibold border border-white/30 backdrop-blur-sm bg-white/15"
                    >
                        ✦ Certificados Oficiales 2026  
                    </span>
                    <h1 className="text-4xl font-bold mb-4">Cursos de Psicología con Certificado en 2026</h1>
                    <p className="text-lg text-white mb-8">Mira los mejores cursos de psicología para realizar en el 2026. Recibe certificado oficial al finalizar. ¡Conoce Adipa Chile!</p>
                    <button className="bg-white text-primary px-6 py-3 rounded-full shadow-lg font-semibold">Ver Cursos</button>
                </div>
                {/* <Image src="/hero-image.png" alt="Hero Image" width={1000} height={1000} className="w-full h-full object-cover" /> */}
            </div>
        </section>
    )
}