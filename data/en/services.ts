import { FaServer, FaCloud } from 'react-icons/fa'
import { GiSmartphone } from 'react-icons/gi'
import { MdDesktopWindows } from 'react-icons/md'
import { MdLaptopMac } from 'react-icons/md'
import { ServicesInterface } from '../../components/section/services/types'

const services: ServicesInterface[] = [
  {
    name: 'Website Creation',
    description: 'Development of professional websites, web systems, blogs and online stores focused on results.',
    icon: MdDesktopWindows
  },
  {
    name: 'Responsive Websites',
    description: 'Creating responsive websites for the best viewing on mobile devices with quality on all screens.',
    icon: MdLaptopMac
  },
  {
    name: 'Mobile Applications',
    description: 'Development of multi-platform apps, using modern like React Native, Expo and Firebase.',
    icon: GiSmartphone
  },
  {
    name: 'APIs Development',
    description: 'Developing APIs using modern technologies like GraphQL and REST. Always with a good and clean code.',
    icon: FaServer
  },
  {
      name: 'Cloud Services',
      description: 'Provisioning and managing AWS EC2 Instances, Route 53, S3 Buckets, RDS, and other cloud services.',
      icon: FaCloud
    },
]


export default services
