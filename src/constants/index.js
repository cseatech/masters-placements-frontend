import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { CC, Experience, GFG, Hackerrank, InterviewLogo, Leetcode, Preparation } from '../assets';

export const types = [
  {
    id: "all",
    title: "All",
  },
  {
    id: "intern",
    title: "Intern",
  },
  {
    id: "placement",
    title: "Placement",
  },
];

export const navLinks = [
  {
    id: "/",
    title: "Home",
    location: "remaining",
  },
  {
    id: "/about",
    title: "About",
    location: "home",
  },
  {
    id: "/preparation",
    title: "Preparation",
    location: "all",
  },
  {
    id: "/experience",
    title: "Experiences",
    location: "all",
  },
  {
    id: "/post",
    title: "Post",
    location: "all",
  },
  {
    id: "/faq",
    title: "FAQ",
    location: "home",
  },
  {
    id: "/contact",
    title: "Contact",
    location: "home",
  },
];

export const getStartedCards = [
  {
    title: 'Preparation Tips',
    description: 'The secret to getting ahead is getting started. Placement being a key to unlock your future, it needs both hard and smart work to be shown in preparation. To give you an edge, here are some guidelines to prepare you for the big day!',
    image: Preparation,
    link: "preparation",
  },
  {
    title: 'Interview Experience',
    description: "Placement being the most crucial juncture of one's life, makes the transformation from being a student to being professional. Hence to help you get started, the experiences of several seniors placed in top companies are listed in order to pave the way for your success journey.",
    image: InterviewLogo,
    link: "experience",
  },
  {
    title: 'Give your Experience',
    description: 'Experience, when shared with others, has a greater impact. Shared experiences enable your peers to integrate information and empower them to own their ideas. Do you want to keep the learning alive and encourage future growth?',
    image: Experience,
    link: "post",
  },
];

export const AccordionCards = [
  {
    id: '1',
    label: "Which programming language should I use?",
    content: "Companies typically give you the option of choosing your preferred programming language, in which case you can do so. If you list a language on your resume, your interviewer can ask you a question about it. As a result, keep that in mind! Make it clear on your resume if you aren't completely confident in a language. Put less-stronger languages under a heading like 'Working Knowledge' or give them a star ranking.",
  },
  {
    id: '2',
    label: "What if I draw a blank and can't answer a question?",
    content: "It is ok to not know. The interview process mainly tests the thinking process/ logical ability rather than providing correct answers. If you are struck, ask your interviewer for help or hint. Don't give up!",
  },
  {
    id: '3',
    label: "How should I behave in a face to face interview?",
    content: "Give a firm handshake after entering and greet the interviewers. Be friendly and respectful. Don't argue with the interviewer. Be confident and drive your own interview.",
  },
  {
    id: '4',
    label: "What should I wear for the interview?",
    content: "Wear neat and formal dress. Avoid using bright colours.",
  },
];

export const footerCards = {
  footerSocialMedia: [
    { 
      name: 'Facebook', 
      link: 'https://www.facebook.com/csea.ceg',
      icon: FaFacebookF,
    },
    { 
      name: 'Instagram',
      link: 'https://www.instagram.com/csea_ceg/',
      icon: FiInstagram,
    },
    { 
      name: 'Linkedin',
      link: 'https://www.linkedin.com/company/csea-ceg/mycompany/', 
      icon: FaLinkedinIn ,
    },
  ],
  footerGetInTouch: [
    { 
      name: 'Sunil Kumar S',
      phno: '+91 6383 123 505' 
    },
    { 
      name: 'Smrithi Prakash',
      phno: '+91 80728 69255' 
    },
  ],
  footerLinks: [
    { 
      name: 'About Us',
      link: 'about',
    },
    { 
      name: 'Preparation Tips',
      link: 'preparation', 
    },
    { 
      name: 'Interview Experience',
      link: 'experience',
    },
    { 
      name: 'FAQ',
      link: 'faq', 
    },
  ],
};

export const PracticeCards = [
  { 
    name: 'GeeksForGeeks', 
    image: GFG, 
    link: 'https://www.geeksforgeeks.org/',
  },
  { name: 'LeetCode', 
    image: Leetcode, 
    link: 'https://leetcode.com/',
  },
  { 
    name: 'Hackerrank',
    image: Hackerrank,
    link: 'https://www.hackerrank.com/', 
  },
  { 
    name: 'CodeChefs',
    image: CC, 
    link: 'https://www.codechef.com/',
  },
];

export const designersCards = [
  { 
    name: 'Selva Rathinam M',
    year: '2021 - 2025', 
    link: 'https://www.linkedin.com/in/selvarathinam-m/', 
  },
  { 
    name: 'Ragul S', 
    year: '2021 - 2025', 
    link: 'https://www.linkedin.com/in/ragul-s-301b40252/', 
  },
  { 
    name: 'Narendran G', 
    year: '2021 - 2025', 
    link: 'https://www.linkedin.com/in/narendran-g/', 
  },
];