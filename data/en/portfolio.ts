import { ProjectsInterface } from '../../components/section/portfolio/types'

const projects: ProjectsInterface[] = [
  {
    name: 'Sustento Energia Solar Website + Blog',
    description:
      'Website and blog made focused in SEO and have a good performance in fotovoltaic integrating field.',
    imgSource: '/images/projects/sustento-website-min.webp',
    skills: ['React.js', 'Next.js', 'Styled-components', 'Figma', 'Git'],
    websiteUrl: 'https://sustentoenergiasolar.com.br/'
  },
  {
    name: 'Tripppin Platform',
    description:
      "Configuration and deployment of an EC2 instance on AWS for running the platform application, including the setup of a Route 53 configuration to link the domain with the instance. Additionally, I've created a bash script to automate the deployment process",
    imgSource: '/images/projects/tripppin-platform-min.webp',
    skills: ['AWS', 'EC2', 'Route53', 'Bash'],
    websiteUrl: 'https://tripppin.com/'
  },
  {
    name: 'MG Energia Solar Landing Page',
    description:
      'The landing page is developed using Figma for prototyping, Git for versioning and team collaboration, while React and Next.js accelerate the development and deployment process. To ensure continuous updates, the site is deployed on Vercel, complemented by the configuration of Analytics scripts.',
    imgSource: '/images/projects/mgsolar-landing-page-min.webp',
    skills: ['React.js', 'Next.js', 'Git', 'Figma', 'Styled-components'],
    websiteUrl: 'https://lp.mgesolar.com.br/'
  },
  {
    name: 'Rep Our Website',
    description:
      'Personal project to create a website for a student fraternity. The website is developed using React and Next.js, incorporating Tailwind for styling. The project is versioned using Git and deployed on Vercel. Additionally, the website is integrated with both Google Analytics and Google Tag Manager.',
    imgSource: '/images/projects/republica-our-website-min.webp',
    skills: ['React.js', 'Next.js', 'Git', 'Tailwind'],
    websiteUrl: 'https://republicaour.vercel.app/',
    githubUrl: 'https://github.com/viniciussm07/repour'
  }
]

export default projects
