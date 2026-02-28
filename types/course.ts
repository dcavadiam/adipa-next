export interface Course {
  id: number;
  image: string;
  title: string;
  instructor: string;
  startDate: string;
  originalPrice: number;
  discount: number;
  modality: "Online" | "En Vivo" | "Presencial";
  category:
    | "Psicología Clínica"
    | "Psicología Organizacional"
    | "Neurociencias";
}
