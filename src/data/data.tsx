import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Takitez',
  description: "Want to know me? It's ez.",
 
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Chong Yi Jian.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a student pursuing for a <strong className="text-stone-100">Bachelor of Computer Sciences</strong>, at <strong className="text-stone-100">Universiti Sains Malaysia</strong> 
        . 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      THis website serves as a brief introduction of myself. To know me more, feel free to contact me via any available channels.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: 'As a student in Bachelor of Computer Sciences in Universiti Sains Malaysia,I have a great passion to explore job fields related to latest technologies and always passionate to explore every possibility. Take it easy and keep it easy.',
  aboutItems: [
    {label: 'Location', text: 'Penang, Malaysia', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Malaysian', Icon: FlagIcon},
    {label: 'Interests', text: 'Games, Gym, Food', Icon: SparklesIcon},
    {label: 'Study', text: 'Universiti Sains Malaysia', Icon: AcademicCapIcon},
    {label: 'School', text: 'School of Computer Sciences', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Chinese',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Malay',
        level: 8,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'C++',
        level: 7,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'SQL',
        level: 7,
      },
    ],
  },
  {
    name: 'Data',
    skills: [
      {
        name: 'Data analytic',
        level: 8,
      },
      {
        name: 'Machine Learning',
        level: 7,
      },
      {
        name: 'Deep learning',
        level: 6,
      },
    ],
  },
  
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'October 2022 - Present',
    location: 'USM',
    title: 'Bachelor of Computer Sciences',
    content: <p>Pursuing for Degree in COmputer Sciences majoring in Intelligence Computing. Graduating in October 2026.</p>,
  },
  {
    date: '2021 - 2022',
    location: 'Kolej Matrikulasi Perak',
    title: 'Matrikulasi',
    content: <p>Taking matriculation programme in Module 1. With GPA of 4.0. </p>,
  },
  {
    date: '2015 - 2020',
    location: 'SMK Malim Nawar',
    title: 'Secondary School',
    content: <p>Graduate with SPM result of 10As in year 2021. </p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'October 2024 - Present',
    location: 'Advisor of Event Planning & Culture Development Department',
    title: 'Google Developer Student Clubs USM',
    content: (
      <p></p>
    ),
  },
  {
    date: 'October 2023 - October 2024',
    location: 'Head of Event Planning & Culture Development Department',
    title: '',
    content: (
      <p>
        
      </p>
    ),
  },
  {
    date: 'October 2022 - October 2023',
    location: 'Core team member of Event Planning & Culture Development Department',
    title: '',
    content: (
      <p>
        
      </p>
    ),
  },
  {
    date: '2024',
    location: 'Head of department of Programme department',
    title: 'HackAttack USM X UTAR 2024',
    content: (
      <p></p>
    ),
  },
  {
    date: '2024',
    location: 'Committee of USM',
    title: 'My Universities Hackathon 2024',
    content: (
      <p></p>
    ),
  },
  {
    date: '2023',
    location: 'Top ten finalist as team Trisafe',
    title: 'PYDC Youth Entrepreneurship Challenge 2023',
    content: (
      <p></p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Ezean',
      text: 'As a human, just enjoy the life with the simplest mindset. Do not waste time for unhappiness. Take it easy.',
      image: 'https://mondaymandala.com/wp-content/uploads/Printable-Winking-Face-Emoji_-791x1024.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contact me.',
  description: 'Do not hesitate to approach me if you want to know more about me. ',
  items: [
    {
      type: ContactType.Email,
      text: 'mrchongyijian@gmail.com',
      href: 'mailto:mrchongyijian@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Penang, Malaysia',
      href: 'https://maps.app.goo.gl/agDLbksMhtJ1qwTy5',
    },
    {
      type: ContactType.Instagram,
      text: '@yijian.ezean',
      href: 'https://www.instagram.com/yijian.ezean/',
    },
    {
      type: ContactType.Github,
      text: 'yjezean',
      href: 'https://github.com/yjezean',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/yjezean'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/yi-jian-chong-587653255/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/yijian.ezean/'},
];
