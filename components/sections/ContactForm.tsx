"use client";

import { useForm } from "react-hook-form"

type ContactFormData = {
    name: string
    email: string
    message: string
}

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
        reset,
    } = useForm<ContactFormData>()

    const onSubmit = (data: ContactFormData) => {
        console.log(data)
    }

    return (
        <section className="mb-12 px-4">
            <div className="container-adipa p-12 rounded-2xl bg-dark text-white shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Formulario de Contacto</h2>
                {
                    isSubmitSuccessful && (
                        <div className="mb-4 p-4 rounded-md bg-green-500 text-white text-center font-medium">
                            ¡Mensaje enviado correctamente!
                        </div>
                    )
                }
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4 flex-col md:flex-row">
                            <div className="flex flex-col gap-2 w-full md:w-1/2">
                                <label htmlFor="name" className="text-base font-semibold">Nombre</label>
                                <input type="text" id="name" className="w-full p-2 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Ingrese su nombre"  {...register("name", { required: "El nombre es requerido", minLength: { value: 2, message: "El nombre debe tener al menos 2 caracteres" } })} />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                            </div>
                            <div className="flex flex-col gap-2 w-full md:w-1/2">
                                <label htmlFor="email" className="text-base font-semibold">Email</label>
                                <input type="email" id="email" className="w-full p-2 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Ingrese su email"  {...register("email", { required: "El email es requerido", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "El email no es válido" } })} />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-base font-semibold">Mensaje</label>
                            <textarea id="message" className="w-full p-2 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Ingrese su mensaje"  {...register("message", { required: "El mensaje es requerido", minLength: { value: 10, message: "El mensaje debe tener al menos 10 caracteres" } })} />
                            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                        </div>
                    </div>
                    <button type="submit" className="w-full p-2 rounded-md bg-secondary text-white font-medium hover:bg-secondary/80 transition-all duration-300 cursor-pointer mt-4">Enviar mensaje</button>
                </form>
            </div>
        </section>
    );
}