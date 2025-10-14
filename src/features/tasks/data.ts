import type { Task } from "./types";

export const SAMPLE_TASKS: Task[] = [
  {
    id: "t1",
    title: "Glosario",
    description: "Diseñar un glosario de términos.",
    status: "completada",
    tags: [""],
    dueDate: "2025-07-19",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop",
    attachments: [
      { type: "pdf", label: "Documento", url: "/docs/glosario.pdf" }
     
    ],
  },
  {
    id: "t2",
    title: "Pagina Web-Hoja de Vida",
    description: "Portafolio personal.",
    status: "completada",
    tags: ["React", "Node","javaScript"],
    dueDate: "2025-07-25",
    attachments: [
      { type: "link", label: "Url", url: "https://danielbrn89.github.io/home.html" }
    ]
  },
  {
    id: "t3",
    title: "investigacion sobre elementos html",
    description: "Investigación sobre los diferentes elementos HTML y su uso.",
    status: "completada",
    tags: [],
    dueDate: "2025-08-01",
    attachments: [
      { type: "pdf", label: "Documento", url: "/docs/elementos-formulario.pdf" }
    ]
  },
  {
    id: "t4",
    title: "Formulario Html",
    description: "Formulario para la solicitud de informacion y guardado de datos.",
    status: "completada",
    tags: ["html", "CSS", "javaScript"],
    attachments: [
      { type: "link", label: "Formulario", url: "https://practica-formulario-omega.vercel.app/" }
    ]
  },
  {
    id: "t5",
    title: "Diseño Responsive",
    description: "Flujo de diseño adaptable.",
    status: "completada",
    tags: [""],
    attachments: [
     { type: "link", label: "Pagina", url: "https://pryecto-dise-o.vercel.app/" }
    ]
  },
];
