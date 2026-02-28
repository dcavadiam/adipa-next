import Image from "next/image";

import { Course } from "@/types/course";
import Badge from "./Badge";
import { Calendar, Monitor, MapPin, Video } from "lucide-react"

const modalities = {
    "Online": {
        bg: "bg-orange/50",
        text: "Online",
        icon: <Monitor className="w-4 h-4 text-white" strokeWidth={2.5} />,
    },
    "En Vivo": {
        bg: "bg-pink/50",
        text: "En Vivo",
        icon: <Video className="w-4 h-4 text-white" strokeWidth={2.5} />,
    },
    "Presencial": {
        bg: "bg-secondary/50",
        text: "Presencial",
        icon: <MapPin className="w-4 h-4 text-white" strokeWidth={2.5} />,
    },
}

const priceWithDiscount = (price: number, discount: number) => {
    return price - (price * discount / 100);
}

export default function CourseCard({ course }: { course: Course }) {
    return (
        <article className="bg-white rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 radius-card relative">
            <Image src={course.image} alt={course.title} width={100} height={100} className="w-full h-48 object-cover rounded-t-card" />
            {/* Badge de la modalidad */}
            <Badge bgColor={modalities[course.modality].bg}>
                {modalities[course.modality].icon}
                <span>{modalities[course.modality].text}</span>
            </Badge>
            {/* Contenido del curso */}
            <div className="px-4 py-6 flex flex-col gap-2 justify-between h-[320px]">
                <div className="flex flex-col gap-2">
                    

                    {/* Titulo */}
                    <h3 className="text-lg font-bold">{course.title}</h3>

                    {/* Instructor */}
                    <p className="text-gray-600 ">Por: {course.instructor}</p>

                    <div className="flex items-center gap-2 mb-2">
                        {/* Fecha de inicio */}
                        <Calendar className="w-5 h-5 text-primary" strokeWidth={2.5} />
                        <span>Inicio: {course.startDate}</span>
                    </div>

                    {
                        course.discount > 0 && (
                            <>
                                {/* Precio con descuento */}
                                <span className="text-3xl font-bold">${priceWithDiscount(course.originalPrice, course.discount)}</span>

                                {/* Precio original */}
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-600 text-lg line-through">${course.originalPrice}</span>
                                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-md">Ahorro: ${course.originalPrice - priceWithDiscount(course.originalPrice, course.discount)}</span>
                                </div>
                            </>
                        )
                    }
                    {
                        course.discount === 0 && (
                            <div className="flex items-center gap-2">
                                <span className="text-3xl font-bold">${course.originalPrice}</span>
                            </div>
                        )
                    }
                </div>
                
                {/* Botón */}
                <button className="bg-primary text-white px-4 py-2 rounded-md shadow-lg font-semibold hover:bg-secondary transition-all duration-200 cursor-pointer">Ver Curso</button>
            </div>
        </article>
    );
}