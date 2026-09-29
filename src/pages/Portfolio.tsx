import { ArrowRight } from 'lucide-react'
import Projectos from '../components/sections/Projectos'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Buttons'
import { Tags } from '../components/ui/Tags'
import { chat, profile } from '../data'
import Skills from '../components/sections/Skills'
import { BsWhatsapp } from 'react-icons/bs'
import Hero from '../components/sections/Hero'
import Works from '../components/sections/Works'
import SkillSection from '../components/sections/SkillSection'
import Contacts from '../components/sections/Contacts'
import Cta from '../components/sections/Cta'

export default function Portfolio() {
  return (
    <>
      <Hero />
      <Works />
      <SkillSection />
      <Contacts />
      <Cta />
    </>
  )
}
