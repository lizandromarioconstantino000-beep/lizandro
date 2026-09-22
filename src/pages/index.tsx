{
  /**
  import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Buttons'
import { Cards } from '../components/ui/Cards'
import { Navbar } from '../components/ui/Navbar'
import { Tags } from '../components/ui/Tags' */
}
import Img from '../assets/Home Link.png'

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-[464px] h-[1024px] flex justify-center items-center rounded-3xl overflow-hidden">
        {/* Imagem de Fundo */}
        <img
          src={Img}
          alt="Me"
          className="absolute inset-0 w-full h-full object-cover object-top sm:object-[50%_20%]"
        />
        {/* Componente Filho */}
        <div className="relative z-10 w-full h-[70%] mt-auto px-6 py-4 flex flex-col justify-end gap-2 text-white">
          {/* CAMADA 1: Gradiente de Escurecimento (Preto) */}
          <div className="absolute inset-0 -z-20 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

          {/* CAMADA 2: Efeito Gaussiano em Gradiente (Blur Progressivo) */}
          <div
            className="absolute inset-0 -z-10 backdrop-blur-lg"
            style={{
              WebkitMaskImage:
                'linear-gradient(to top, black 0%, transparent 100%)',
              maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
            }}
          />

          {/* CONTEÚDO */}
          <p className="text-2xl font-bold tracking-wide">LumeX</p>

          <div className="flex gap-2">
            <span className="px-3 py-1 text-xs bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              UX/UI
            </span>
            <span className="px-3 py-1 text-xs bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              Web Design
            </span>
            <span className="px-3 py-1 text-xs bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              Frontend
            </span>
          </div>
        </div>
      </div>
    </div>
    /**
    <section className="max-w-5xl flex m-auto items-center justify-center flex-col gap-3 ">
      <h1>Components</h1>
      <Navbar />
      <Button variant="principal">Get in Toutch </Button>
      <Tags name="All Works" />

      <Badge title="Aberto para novos trabalhos" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </section> */
  )
}
