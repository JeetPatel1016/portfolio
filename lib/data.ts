import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import kanbanImg from "@/public/kanban.jpg";
import stembotixImg from "@/public/stembotix.jpg";
import gradiusImg from "@/public/gradius-js.png";
import upForGrabsImg from "@/public/up-for-grabs.png";

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
    title: "Full Stack Developer",
    location: "Netizens Technologies",
    link: "https://netizenstechnologies.com/",
    description: [
      "Migrated REST APIs with databases from on-premises infrastructure to AWS by implementing CI/CD pipelines to tackle server maintenance cost, reducing the cost to company by 47%.",
      "Created and deployed an in-house TMS (Task Management System) from scratch using Google Firebase and ReactJS, with OpenAI API integration for content suggestion feature.",
      "Led a team of 6 Full stack developers by establishing clear communication channels and organizing workflows using Jira and the in-house TMS.",
    ],
    date: "Sep 2022 - Apr 2023",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Web Developer",
    location: "Jemistry Info Solutions",
    link: "https://www.jemistry.com/",
    description: [
      "Updated ERP Web application for a local prawn farming company using PHP, aligning it with new client processes along with improving audits and reports' accuracy.",
      'Conducted a seminar on "Git and GitHub", providing resources such as guides and presentations, which improved developers\' proficiency with version control.',
      "Participated in client meetings with a Travel Agency to discuss the scope and features of a CMS designed to streamline their travel package creation and management processes.",
    ],
    date: "Jul 2021 - Aug 2022",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "PHP Developer Intern",
    location: "Jemistry Info Solutions",
    link: "https://www.jemistry.com/",
    description: [
      "Developed a responsive website UI using HTML, CSS, and JavaScript that reduced overall page load speed by 15%.",
      "Enhanced the security of existing applications by applying the OWASP standards and best practices.",
    ],
    date: "Jan 2021 - Jul 2021",
    icon: React.createElement(CgWorkAlt),
  },
] as const;

export const projectsData = [
  {
    title: "Up for Grabs",
    description:
      "I revamped the dark mode UI and improved accessibility for this open-source platform that curates Open Source projects.",
    tags: ["Ruby", "Jekyll", "CSS", "JavaScript"],
    imageUrl: upForGrabsImg,
    link: "https://up-for-grabs.net/",
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
    title: "Gradius JS",
    description:
      "Gradius-js is a modern, browser-based remake of the iconic NES game 'Gradius'. This project uses Vanilla TypeScript to recreate the classic space shooter experience.",
    tags: ["HTML Canvas", "TypeScript"],
    imageUrl: gradiusImg,
    link: "https://jeetpatel1016.github.io/gradius-js/",
  },
  {
    title: "Stembotix",
    description:
      "Stembotix is an innovative online learning management system that aims to empower learners of young age. I worked as a full-stack developer on this LMS project",
    tags: ["Express", "Next.js", "PostgreSQL", "Tailwind", "AWS"],
    imageUrl: stembotixImg,
    link: "https://stembotix.in",
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
