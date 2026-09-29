// src/layouts/AppLayout.tsx
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar'
import Footer from '../components/sections/Footer'

export function AppLayout() {
  return (
    <div className=" flex flex-col mx-auto w-full md:max-w-full pt-0">
      {/* Navegação fixa da aplicação */}
      <header className="flex justify-center w-full md:p-0">
        <Navbar />
      </header>

      {/* O conteúdo das rotas filhas será injetado exatamente aqui */}
      <main className="content">
        <Outlet />
      </main>

      <footer className="flex items-center justify-center w-full h-[75dvh]">
        <Footer />
      </footer>
    </div>
  )
}
