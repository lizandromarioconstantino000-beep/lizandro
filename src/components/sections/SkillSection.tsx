import Skills from './Skills'

export default function SkillSection() {
  return (
    <>
      {/** Feaatured Skills */}
      <section className="flex flex-col justify-center  gap-4 items-center w-full m-auto md:h-[100dvh] text-brand-primary md:max-w-[1200px] text-center md:text-start mt-10 md:mt-1">
        <div className="flex justify-between items-center md:w-full w-[85dvw]">
          <p className="text-2xl text-left md:text-4xl font-bold">Servicos</p>
        </div>
        <div className="flex items-center justify-center w-full h-[60dvh]">
          <Skills />
        </div>
      </section>
      {/** Feaatured Skills */}
    </>
  )
}
