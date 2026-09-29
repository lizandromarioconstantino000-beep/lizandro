import Img from '../../assets/li.png'

export function Cards() {
  return (
    <div className="relative w-[500px] h-[322px] flex justify-center bg-brand-primary rounded-3xl overflow-hidden">
      {/* Imagem de Fundo */}
      <img
        src={Img}
        alt="imagem do Li"
        className="absolute inset-0 w-full h-full object-cover object-[70%_24%]"
      />

      {/* Componente Filho */}
      <div className="relative z-10 w-full h-[40%] mt-auto px-6 py-4 flex flex-col justify-end gap-2 text-white">
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
        <p className="text-2xl font-bold tracking-wide">Title</p>

        <div className="flex gap-2">
          <span className="px-3 py-1 text-xs bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            tag1
          </span>
        </div>
      </div>
    </div>
  )
}
