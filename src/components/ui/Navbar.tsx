import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Avatar from './../../assets/avatar.png'
import { Button } from './Buttons'
import { Link } from 'react-router-dom'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute w-[90%] md:w-full px-2 pt-6 flex justify-center drop-shadow-2xl shadow-brand-primary">
      {/* Navbar Container */}
      <nav className="relative flex items-center justify-between w-full max-w-[1200px] h-16 px-6 rounded-full bg-brand-neutral shadow-sm border border-black/5">
        {/* 1. Lado Esquerdo: Perfil / Foto + Nome */}
        <div className="flex items-center gap-3">
          <Link to={'/portfolio'} className="flex items-center gap-3">
            <img
              src={Avatar}
              alt="Lizandro Constantino"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold text-brand-primary text-sm sm:text-base">
              Lizandro Constantino
            </span>
          </Link>
        </div>

        {/* 2. Centro: Links de Navegação (Visível apenas em Desktop) */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <li>
            <a href="#work" className="hover:text-black transition-colors">
              Work
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-black transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-black transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* 3. Lado Direito: Botão "Get in Touch" (Desktop) */}
        <a href="#contact" className="hidden md:block">
          <Button variant="primary">Get In Toutch</Button>
        </a>

        {/* 4. Lado Direito: Botão Hambúrguer (Apenas Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-transform active:scale-95 cursor-pointer"
          aria-label="Alternar Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* 5. Dropdown do Menu Mobile (Apenas Mobile quando isOpen === true) */}
        {isOpen && (
          <div className="absolute top-20 left-0 right-0 p-6 bg-brand-neutral border border-black/5 rounded-3xl shadow-xl flex flex-col gap-4 text-center md:hidden z-50">
            <a
              href="#work"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 font-medium py-1 hover:text-black"
            >
              Work
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 font-medium py-1 hover:text-black"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 font-medium py-1 hover:text-black"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full py-3 rounded-full bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-all text-center"
            >
              Get in Touch
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
