import { ArrowRight } from "lucide-react";
import Projectos from "./Projectos";
import { Tags } from "../ui/Tags";

export default function Works() {
  return (
    <>
      {/** Feaatured Works */}
      <section
        id="work"
        className="flex flex-col justify-center  gap-4 items-center w-full m-auto md:h-[100dvh] text-brand-primary md:max-w-[1200px] text-center md:text-start pt-12"
      >
        <div className="flex justify-between items-center mb-16 md:w-full w-[85dvw]">
          <p className="text-2xl text-left md:text-4xl font-bold">
            Featured Works
          </p>
          <Tags name="All Works" icon={<ArrowRight />} />
        </div>
        <div className="flex items-center justify-center w-full bor">
          <Projectos />
        </div>
      </section>
      {/** Feaatured Works */}
    </>
  )
}
