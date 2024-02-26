const image2 = "/images/image2.jpg";
const image6 = "/images/image6.jpg";
const image4 = "/images/image4.jpg";
const image3 = "/images/image3.jpg";
const image7 = "/images/image7.jpg";

export interface Project {
  technologies: string[];
  _id: string;
  title: string;
  image: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    _id: "5f8360241",
    title: "E-commerce Website",
    image: image2,
    description:
      "An E-commerce website using React for the frontend and Node.js for the backend, with MongoDB as the database.",
    link: "https://example.com/e-commerce",
  },
  {
    technologies: ["React", "Firebase"],
    _id: "5f8360242",
    title: "Real-time Chat Application",
    image: image7,
    description:
      "A real-time chat application built with React and Firebase for authentication and real-time database.",
    link: "https://example.com/chat-app",
  },
  {
    technologies: ["Vue.js", "Vuetify", "Firebase"],
    _id: "5f8360243",
    title: "Personal Portfolio",
    image: image4,
    description:
      "A personal portfolio website showcasing projects and skills, built with Vue.js and styled with Vuetify.",
    link: "https://example.com/portfolio",
  },
  {
    technologies: ["Angular", "TypeScript", "Sass"],
    _id: "5f8360244",
    title: "Task Management Tool",
    image: image3,
    description:
      "A task management tool for organizing and tracking tasks, developed using Angular and TypeScript.",
    link: "https://example.com/task-manager",
  },
  {
    technologies: ["Python", "Flask", "SQLAlchemy"],
    _id: "5f8360245",
    title: "Expense Tracker",
    image: image6,
    description:
      "An expense tracker application to monitor personal finances, built with Python, Flask, and SQLAlchemy.",
    link: "https://example.com/expense-tracker",
  },
];
