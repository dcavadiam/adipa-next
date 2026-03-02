"use client";

import { useState } from "react";

import { courses } from "@/lib/data/courses";
import { Course } from "@/types/course";

import CourseCard from "../ui/CourseCard";
import FilterPill from "../ui/FilterPill";

const CATEGORY_OPTIONS: { value: Course["category"] | "Todos"; label: string }[] = [
    { value: "Todos", label: "Todos" },
    { value: "Psicología Clínica", label: "Psicología Clínica" },
    { value: "Psicología Organizacional", label: "Psicología Organizacional" },
    { value: "Neurociencias", label: "Neurociencias" },
];

export default function CourseCatalog() {
    const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

    const filteredCourses =
        selectedCategory === "Todos"
            ? courses
            : courses.filter((course) => course.category === selectedCategory);

    return (
        <section id="cursos">
            <div className="container-adipa px-4 py-16">
                <h2 className="text-2xl font-bold mb-6 text-primary">Catálogo de Cursos</h2>

                {/* Pills de categorías */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {CATEGORY_OPTIONS.map((option) => (
                        <FilterPill key={option.value} value={option.value} label={option.label} selectedCategory={selectedCategory} setSelectedCategory={(value) => setSelectedCategory(value)} />
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
}