import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaAws, FaFigma } from 'react-icons/fa'
import { SiNextDotJs, SiGraphql, SiTypescript } from 'react-icons/si'
import { ImGit } from 'react-icons/im'
import getExperienceTime from '../../utils/getExperienceTime'
import { SkillsInterface } from '../../components/section/skills/types'

const skills: SkillsInterface[] = [
  {
    name: 'React.js',
    expTime: () => getExperienceTime(new Date("2021-04-01")),
    icon: FaReact
  },
  {
    name: 'Next.js',
    expTime: () => getExperienceTime(new Date("2021-04-01")),
    icon: SiNextDotJs
  },
  {
    name: 'Node.js',
    expTime: () => getExperienceTime(new Date("2022-07-19")),
    icon: FaNodeJs
  },
  {
    name: 'Git',
    expTime: () => getExperienceTime(new Date("2021-07-12")),
    icon: ImGit
  },
  {
    name: 'Typescript',
    expTime: () => getExperienceTime(new Date("2024-02-07")),
    icon: SiTypescript
  },
  {
    name: 'HTML',
    expTime: () => getExperienceTime(new Date("2021-04-01")),
    icon: FaHtml5
  },
  {
    name: 'CSS',
    expTime: () => getExperienceTime(new Date("2021-04-01")),
    icon: FaCss3
  },
  {
      name: 'Figma',
      expTime: () => getExperienceTime(new Date("2021-04-01")),
      icon: FaFigma
    },
  {
      name: 'AWS Services',
      expTime: () => getExperienceTime(new Date("2022-12-07")),
      icon: FaAws
    },
]


export default skills
