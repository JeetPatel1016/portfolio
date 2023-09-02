import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import kanbanImg from "@/public/kanban.jpg";
import protappImg from "@/public/protapp.jpg";
import stembotixImg from "@/public/stembotix.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "PHP Developer",
    location: "Jemistry Info Solutions",
    link: "https://www.jemistry.com/",
    description: [
      "Developed ERP and CRM projects using PHP, HTML, CSS and JavaScript.",
      "Integrated client feature requests to deliver inventory-auditing systems and content delivery applications.",
      "Performed troubleshooting of technical issues within development and production environments.",
      "Maintained and reviewed code deliveries for multiple projects regularly using VCS such as GitLab and GitHub.",
    ],
    date: "Jan 2022 - July 2022",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Full Stack Intern",
    location: "Netizens Technologies",
    link: "https://netizenstechnologies.com/",
    description: [
      "Worked with senior developers and designers on multiple software systems such as LMS, Chat Application and E-Commerce Application.",
      "Learned new emerging technologies and took initiative to offer technical direction and creative solutions.",
      "Led team of front-end and back-end developers to realize client's business idea into functioning application",
    ],
    date: "Oct 2022 - Mar 2023",
    icon: React.createElement(CgWorkAlt),
  },
] as const;

export const projectsData = [
  {
    title: "Stembotix",
    description:
      "Stembotix is an innovative online learning management system that aims to empower learners of young age. I worked as a full-stack developer on this LMS project",
    tags: ["Express", "Next.js", "PostgreSQL", "Tailwind", "AWS"],
    imageUrl: stembotixImg,
    link: "https://stembotix.in",
  },
  {
    title: "Kanban Board",
    description:
      "A project management software for my previous organization that manages the projects and its tasks using kanban drag and drop.",
    tags: ["ReactJS", "Tailwind", "Vite", "Firebase"],
    imageUrl: kanbanImg,
    link: "https://netizens-kanban.web.app",
  },
  {
    title: "ProTapp",
    description:
      "ProTapp is a project that allows user to own customizable digital business card accesible through NFC technology. I worked as a front-end developer",
    tags: ["PHP", "Bootstrap", "jQuery", "AJAX"],
    imageUrl: protappImg,
    link: "https://protapp.co",
  },
] as const;

export const skillsData = [
  "ReactJS",
  "NextJS",
  "Redux",
  "TypeScript",
  "Tailwind",
  "Bootstrap",
  "Svelte",
  "NodeJS",
  "PHP",
  "PostgreSQL",
  "Express",
  "SocketIO",
  "PassportJS",
  "Git",
  "Vite",
  "AWS",
  "Figma",
  "Docker",
  "Python",
] as const;
