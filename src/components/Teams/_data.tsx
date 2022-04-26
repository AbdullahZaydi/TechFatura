import LouisElliot from '../../assets/images/LouisElliot.png';
import TrevorFleming from '../../assets/images/TrevorFleming.png';
import RaymondBaker from '../../assets/images/RaymondBaker.png';
import GeorgeTornes from '../../assets/images/GeorgeTornes.png';
import DaisyFerguson from '../../assets/images/DaisyFerguson.png';
import ToddSummers from '../../assets/images/ToddSummers.png';

export interface Member {
  role: string
  image: string
  name: string
  twitter: string
  github: string
  linkedin: string
  description: string
}

export const members = [
  {
    role: 'Founder and CEO',
    image:
      LouisElliot,
    name: 'Louise Elliot',
    twitter: 'camilyx',
    linkedin: '#',
    github: '#',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    role: 'CTO',
    image:
      TrevorFleming,
    name: 'Trevor Fleming',
    twitter: 'markysy',
    linkedin: '#',
    github: '#',
    description: 'Habitant morbi tristique senectus et netus et malesuada fames. Vestibulum morbi',
  },
  {
    role: 'Software Engineer',
    image:
      RaymondBaker,
    name: 'Raymond Baker',
    twitter: 'kkynx',
    linkedin: '#',
    github: '#',
    description: 'Quis risus sed vulputate odio ut enim blandit volutpat. Amet cursus sit amet.',
  },
  {
    role: 'UX Designer',
    image:
      GeorgeTornes,
    name: 'George Torres',
    twitter: 'margon_biz',
    linkedin: '#',
    github: '#',
    description:
      'Consectetur libero id faucibus nisl tincidunt eget nullam fringilla urna porttitor.',
  },
  {
    role: 'Content Writer',
    image:
      DaisyFerguson,
    name: 'Daisy Ferguson',
    twitter: 'life3coder',
    linkedin: '#',
    github: '#',
    description:
      'Mi eget mauris pharetra et ultrices neque ornare aenean massa eget egestas purus.',
  },
  {
    role: 'Digital Marketer',
    image:
      ToddSummers,
    name: 'Todd Summers',
    twitter: 'yas4joy',
    linkedin: '#',
    github: '#',
    description: 'Diam maecenas sed enim ut sem viverra aliquet eget magna ac placerat vestibulum.',
  },
]
