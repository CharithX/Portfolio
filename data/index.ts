// data.ts
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiGithubactions,
  SiKubernetes,
  SiTerraform,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";
import {
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaReact,
} from "react-icons/fa";


import { RiNextjsFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
export const skills = [
  { icon: FaReact, label: "React", color: "#61DAFB" },
  { icon: SiTypescript, label: "Typescript", color: "#3178C6" },
  { icon: FaNodeJs, label: "Node", color: "#339933" },
  { icon: SiTailwindcss, label: "TailwindCSS", color: "#06b6d4 " },
  { icon: SiExpress, label: "Express", color: "#ffffff" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { icon: FaHtml5, label: "HTML", color: "#E34F26" },
  { icon: FaCss3Alt, label: "CSS", color: "#1572B6" },
  { icon: RiNextjsFill, label: "Next.js", color: "#ffffff" },
  { icon: FaGitAlt, label: "Git", color: "#F05032" },
  { icon: SiGithubactions, label: "GitHub Actions", color: "#2088FF" },
  { icon: FaDocker, label: "Docker", color: "#2496ED" },
  { icon: SiKubernetes, label: "Kubernetes", color: "#326CE5" },
  { icon: SiTerraform, label: "Terraform", color: "#7B42BC" },
  { icon: SiPostman, label: "Postman", color: "#FF6C37" },
  { icon: FaAws, label: "AWS", color: "#FF9900" },
  { icon: DiMysql, label: "MySQL", color: "#4479A1" },
];

// data.js
export const stats = [
  {
    id: 1,
    end: 10,  
    label: "Projects Completed"
  },
  {
    id: 2,
    end: 300,  
    label: "Public Commits"
  },
  {
    id: 3,
    end: 1,  
    label: "Years Experience"
  }
];

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Technologies", link: "#technologies" },
  { name: "Projects", link: "#projects" },
  { name: "Experince", link: "#experince" },
  { name: "Contact", link: "#contact" },
];


export const projects = [
  {
    id: 1,
    title: "The Real Estate Management System",
    des: "Dynamic property listings with advanced search by location, budget, and type, and integrated an interactive map for live property viewing with advanced filtering.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/express.svg", "/node.svg", "/fm.svg"],
    link: "https://real-estate-sri-lanka.netlify.app/",
  },
  {
    id: 2,
    title: "The Real Time Food Ordering Platform",
    des: "Developed a robust food ordering platform featuring real-time food updates, restaurant management, responsive interface, and secure payment transactions",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/CharithX/Real-Estate-Backend",
  },
  {
    id: 3,
    title: "Ecommerce Platform for Mobile services",
    des: "E-commerce app with user-friendly authentication, real-time product updates, robust product management, responsive design, and secure payment integration for seamless transactions.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/CharithX/Real-Estate-Backend",
  },
];



export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern @BotCalm",
    desc: "Worked on the subscription-based SaaS product, implementing React and TailwindCSS to create reusable UI components with responsive design.",
    desc2:
      "Implemented RESTful APIs with Node.js and Express, ensuring seamless integration into UI with state management.",
    desc3: "Utilized Git  for version control and Continous Integration with GitHub Actions.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "DevOps Specialist @Freelance platform",
    desc: "Implemented CI/CD pipelines using GitHub Actions to automate build, test, and deployment processes .",
    desc2:
      "Utilized Terraform for infrastructure provisioning and configuration management on muti cloud providers.",
    desc3:
      "Managed container orchestration and scaling using Kubernetes to streamline deployment and management of microservices.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/CharithX",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/charithjay/",
  },
];
