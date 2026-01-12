import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
 
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/dev_x_aura/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/profile.php?id=61586122544558",
  },
] as const;

export const FRONTEND_SKILL = [


] as const;

export const BACKEND_SKILL = [



] as const;

export const FULLSTACK_SKILL = [
] as const;

export const OTHER_SKILL = [

] as const;

export const PROJECTS = [
  {
    title: "Equran Lms Portal",
    
    image: "/projects/project-4.webp",
    link: "https://equran-ten.vercel.app/",
  },
  {
    title: "Tekisky – The Future of Tech",

    image: "/projects/project-2.webp",
    link: "https://tekisky.com/",
  },
  {
    title: "Speedline Auto Parts – The Future of Auto Parts",
   
    image: "/projects/project-3.webp",
    link: "https://speedlineautoparts.netlify.app/",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [

      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/mrjanplayspro",
      },

    ],
  },
  {
    title: "Social Media",
    data: [

      {
     name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/dev_x_aura/",
      },
    ],
  },
  {
    title: "About",
    data: [
   
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:arrahmanofficial9@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
   title: "Contact me",
    link: "#contact",
  },
  
] as const;


