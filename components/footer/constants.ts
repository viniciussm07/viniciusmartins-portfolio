import { IconType } from "react-icons/lib";

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export interface footerSocialLinksProps {
  label: string
  link: string,
  icon: IconType
}

export const footerSocialLinks: footerSocialLinksProps[] = [
  {
    label: 'Github Profile',
    link: 'https://github.com/viniciussm07',
    icon: FaGithub
  },
  {
    label: 'Linkedin Profile',
    link: 'https://www.linkedin.com/in/vinicius-marttins/',
    icon: FaLinkedin
  },
  {
    label: 'Mail Me',
    link: 'mailto:vini.soares.martins@gmail.com',
    icon: SiGmail
  },
]
