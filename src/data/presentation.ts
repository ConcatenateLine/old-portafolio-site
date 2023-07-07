type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "concatenateline@gmail.com",
  title: "Hi, I’m Bin.Josue 👋",
  description: "Recién he terminado mis estudios en *Ing. Sistemas computacionales* con conocimientos en *programación, redes, bases de datos y desarrollo web*. Tengo experiencia en prácticas profesionales donde realicé tareas de soporte técnico, administración de sistemas y creación de aplicaciones. Me considero una persona *responsable, creativa, proactiva, eficiente y con capacidad de aprendizaje*. Mi objetivo es incorporarme a una empresa donde pueda aplicar mis habilidades y seguir creciendo profesionalmente.",
  socials: [
    {
      label: "Twiiter",
      link: "https://twitter.com/ConcatenateLine",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/concatenate-line-368513282"
    },
    {
      label: "Github",
      link: "https://github.com/ConcatenateLine",
    },
    {
      label: "Descargar CV",
      link: "/public/Josue-Morales-Pascual.pdf",
    },
  ],
};

export default presentation;
