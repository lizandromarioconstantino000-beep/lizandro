import Img from '../assets/Home Link.png'
import { Link2 } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '../components/ui/Buttons'
import { social } from '../data'
import Badges from '../assets/icons/badge.png'

export default function Home() {
  return (
    /* 1. min-h-screen garante centralização vertical em qualquer ecrã */
    /*    p-4 garante uma margem de segurança nos telemóveis */
    <div className="w-full min-h-screen p-4 flex items-center justify-center bg-zinc-950">
      {/* 2. max-w-[464px] impede o overflow em mobile e h-auto / max-h ajustam a altura */}
      <div className="relative w-full max-w-[464px] h-[95vh] max-h-[1200px] flex justify-center items-center rounded-3xl overflow-hidden shadow-2xl">
        {/* Imagem de Fundo com posicionamento estável */}
        <img
          src={Img}
          alt="Me"
          className="absolute inset-0 w-full h-full object-cover object-[50%_15%]"
        />

        {/* CONTEÚDO */}
        <div className="absolute flex flex-col mt-[60%] mx-auto z-20 gap-4 w-[85%] text-brand-secondary justify-end">
          <div className="flex flex-col items-start ">
            <div className="flex flex-row gap-2">
              <p className="text-2xl sm:text-3xl font-bold tracking-wide inline-flex justify-center items-center ">
                Lizandro Constantino
              </p>
              <img src={Badges} className="w-10 h-10" />
            </div>
            <span className="text-sm md:text-[16px] line-clamp-2">
              A Web Devloper & UX/UI Designer focused on intuitive user
              experiences.
            </span>
          </div>

          <div className="flex flex-wrap gap-1 items-center justify-center">
            {social.map((item, key) => (
              <a
                key={key}
                href={item.link}
                className="px-3 py-1 text-xs rounded-full"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="w-6 h-6 object-contain "
                />
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4 items-center justify-center w-full m-auto">
            <div className="flex gap-4 items-center justify-center w-full">
              <Link to="/portfolio">
                <Button variant="secondary">
                  <Link2 /> Website
                </Button>
              </Link>
              <Link to="/ignite">
                <Button variant="secondary">
                  <Link2 /> Ignite
                </Button>
              </Link>
            </div>
            <Button variant="principal">Get in Toutch</Button>
            <div>
              <p className="mt-20">feito com lizandro_constantino</p>
            </div>
          </div>
        </div>

        {/* Efeito */}
        <div className="relative z-10 w-full h-auto min-h-[60%] mt-auto px-6 py-6 flex flex-col justify-end gap-3 text-white">
          {/* CAMADA 1: Gradiente de Escurecimento */}
          <div className="absolute inset-0 -z-20 bg-linear-to-t from-black/90 via-black/80 to-transparent" />

          {/* CAMADA 2: Efeito Gaussiano em Gradiente */}
          <div
            className="absolute inset-0 -z-10 backdrop-blur-lg"
            style={{
              WebkitMaskImage:
                'linear-gradient(to top, black 0%, transparent 100%)',
              maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
