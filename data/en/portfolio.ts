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
  }
]

export default projects
