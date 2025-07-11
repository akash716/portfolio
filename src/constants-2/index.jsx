import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS = [
  {
    id: 1,
    name: "Introduction to Front-End Development",
    description:
      "Completed the Introduction to Front-End Development course on Coursera with a verified account and a grade of 99% in December 2024. Gained a strong foundation in HTML, CSS, and JavaScript, along with essential concepts in modern frontend development.",
    image: projectImage1,
    githubLink: "https://www.coursera.org/account/accomplishments/verify/AKF0HC3OYHNZ",
  },
  {
    id: 2,
    name: " Programming with JavaScript",
    description:
      "Completed the Programming with JavaScript course on Coursera in December 2024 with a verified account and a grade of 97.73%. Gained in-depth knowledge of JavaScript fundamentals, including variables, functions, objects, arrays, and control flow for building interactive web applications.",
    image: projectImage2,
    githubLink: "https://www.coursera.org/account/accomplishments/verify/B514FBUTOX7E",
  },
  {
    id: 3,
    name: "React Basics",
    description:
      "Completed the React Basics course on Coursera in December 2024 with a verified account and a grade of 95.71%. Learned core React concepts such as components, props, state, and JSX to build dynamic and interactive user interfaces.",
    image: projectImage3,
    githubLink: "https://www.coursera.org/account/accomplishments/verify/F94ZO6QBOTCY",
  },
  {
    id: 4,
    name: "Foundations of User Experience (UX)",
    description:
      "Completed the Foundations of User Experience (UX) Design course on Coursera in January 2025 with a verified account and a grade of 97.77%. Gained a solid understanding of UX principles, design thinking, user research, and the importance of creating user-centered digital experiences.",
    image: projectImage4,
    githubLink: "https://www.coursera.org/account/accomplishments/verify/8NSCTWBHN0K5",
  },
  {
    id: 5,
    name: "Start the UX Design Process",
    description:
      "Completed the Start the UX Design Process: Empathize, Define, and Ideate course on Coursera in March 2025 with a verified account and a grade of 84.37%. Learned key UX design stages including user research, defining user needs, and generating effective design solutions through ideation.",
    image: projectImage5,
    githubLink: "https://www.coursera.org/account/accomplishments/verify/L7T2GK72BD7K",
  },
  {
    id: 6,
    name: "Build Wireframes and Low-Fidelity Prototypes",
    description:
      "Completed the Build Wireframes and Low-Fidelity Prototypes course on Coursera in January 2025 with a verified account and a grade of 94.97%. Gained practical skills in sketching, wireframing, and creating low-fidelity prototypes to visualize and test user-centered design ideas effectively.",
    image: projectImage6,
    githubLink: "https://www.coursera.org/account/accomplishments/verify/WLNVNK514CFN",
  },
];




export const EDUCATION = [
  {
    id: 1,
    degree: "Master Of Computer Application",
    institution: "Ramdeobaba University",
    duration: "2024-2026",
    description:
      "Pursuing Master of Computer Application (2024–2026) at Ramdeobaba University, with a focus on software development, web technologies, and building real-world applications through hands-on projects and industry-relevant skills",
  },
  {
    id: 2,
    degree: "Bachelor Of Commerce with Computer Application ",
    institution: "Govt Arts And Commerce College Naveen Bhopal",
    duration: "2020-2023",
    description:
      "Completed Bachelor of Commerce with Computer Application from Govt Arts and Commerce College Naveen, Bhopal, gaining foundational knowledge in business principles along with practical skills in computer applications and programming.",
  },
  {
    id: 3,
    degree: "Senior Secondary ",
    institution: "Prerna kiran Public School Bhopal ",
    duration: "2019-2020",
    description:
      "Completed Senior Secondary from Prerna Kiran Public School, Bhopal, with a focus on core academic subjects and the fundamentals that laid the groundwork for my interest in technology and development.",
  },
];


