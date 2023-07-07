export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Portafolio site",
    techs: ["Astro", "Tailwindcss"],
    link: "https://github.com/ConcatenateLine/portafolio-site",
  },
  {
    title: "To-do site",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
