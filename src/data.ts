import { LaptopMinimal, MessagesCircle, PackageOpen } from 'lucide-react'

import Avatar from './assets/avatar.png'
import Project01 from './assets/li.png'
import Project02 from './assets/li.png'
import Project03 from './assets/li.png'
import Project04 from './assets/li.png'

import linkedinIcon from './assets/icons/logo-linkedin.png'
import instagramIcon from './assets/icons/logo-instagram.png'
import behanceIcon from './assets/icons/logo-behance.png'
import dribbbleIcon from './assets/icons/dribble.png'
import GitHub from './assets/icons/logo-github.png'
import GitHubW from './assets/icons/white/ligo-github.svg'
import LinkedInW from './assets/icons/white/logo-linkedIn.svg'
import InstagramW from './assets/icons/white/logo-instagram.svg'
import BehanceW from './assets/icons/white/logo-behance.svg'
import DribbleW from './assets/icons/white/logo-dribble.svg'

import ae from './assets/icons/ae.png'
import ai from './assets/icons/ai.png'
import atom from './assets/icons/atom.png'
import chatgpt from './assets/icons/chatgpt.png'
import css from './assets/icons/css.png'

import whatsapp from './assets/icons/whatsapp.png'

export const profile = {
  name: 'Web Devloper & UX/UI Designer',
  role: 'Técnico de Informática',
  availability: 'Disponível para novas Parcerias',
  titleHero: 'Design que pensa. Codigo que funciona',
  subtitleHero:
    'Crio websites e experiencias digitais que combinam UX, Design e tecnologia para transformar ideias em produtos que funcionam.',
  email: 'lizandro.mario.constantino000@gmail.com',
  whatsapp: 'https://wa.me/244945223130',
  tel: ['+244 933 395 997'],
  Image: Avatar,
}

export const social = [
  {
    name: 'LinkedIn',
    icon: GitHubW,
    link: 'https://linkedin.com/in/lizandro-constantino-b3b302275/',
  },
  {
    name: 'LinkedIn',
    icon: LinkedInW,
    link: 'https://linkedin.com/in/lizandro-constantino-b3b302275/',
  },
  {
    name: 'Instagram',
    icon: InstagramW,
    link: 'https://www.instagram.com/lizandro_constantino/',
  },
  {
    name: 'Behance',
    icon: BehanceW,
    link: 'https://www.behance.net/lizandrconstan1',
  },
  {
    name: 'Dribbble',
    icon: DribbleW,
    link: 'https://dribbble.com/lizandro-constantino',
  },
]

export const projects = [
  {
    id: 1,
    title: 'Mercado Cripto em Tempo Real',
    category: ['Frontend', 'React', 'Js'],
    image: Project01,
    link: 'https://dev-currency-theta.vercel.app/',
  },
  {
    id: 2,
    title: 'Mercado Cripto em Tempo Real',
    category: ['Frontend', 'React', 'Js'],
    image: Project02,
    link: 'https://dev-currency-theta.vercel.app/',
  },
  {
    id: 3,
    title: 'Mercado Cripto em Tempo Real',
    category: ['Frontend', 'React', 'Js'],
    image: Project03,
    link: 'https://dev-currency-theta.vercel.app/',
  },
  {
    id: 4,
    title: 'Mercado Cripto em Tempo Real',
    category: ['Frontend', 'React', 'Js'],
    image: Project04,
    link: 'https://dev-currency-theta.vercel.app/',
  },
]

export const tools = [
  { tool: 'Photoshop', icon: ae, id: 1 },
  { tool: 'Adobe Illustrator', icon: ai, id: 2 },
  { tool: 'Atom', icon: atom },
  { tool: 'ChatGPT', icon: chatgpt, id: 3 },
  { tool: 'CSS', icon: css, id: 4 },
]

export const services = [
  'Desenvolvimento Web',
  'Suporte Técnico e Help Desk',
  'Redes e Infraestrutura',
  'Administração de Sistemas',
  'Boas Práticas de Segurança',
]

export const chat = [
  {
    id: 1,
    icon: MessagesCircle,
    title: 'Inicio',
    paragrafo:
      'comecamos com uma conversa para alinhar objectivos e necessidades.',
  },
  {
    id: 2,
    icon: LaptopMinimal,
    title: 'Desenvolvimento',
    paragrafo:
      'Desenvolvo a interface com foco em clareza, usabilidade e esultado.',
  },
  {
    id: 3,
    icon: PackageOpen,
    title: 'Entrega',
    paragrafo: 'Recebe as propostas e ajustamentos ate chegar a melhor solucao',
  },
]
