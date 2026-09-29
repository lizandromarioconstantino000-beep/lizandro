import { profile } from '../../data'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Buttons'
import HeroImg from '../../assets/hero/Hero.png'

export default function Hero() {
  return (
    <>
      {/** Hero */}
      <div className="flex flex-col items-center justify-center w-full h-dvh sm:w-full py-4 ">
        <img
          className="absolute hidden md:block object-cover w-full h-full"
          src={HeroImg}
          alt="laptop"
        />
        <section
          className="flex flex-col justify-center gap-4 items-start w-[300px] md:w-full h-full text-brand-primary 
          md:max-w-[1200px] text-center md:text-start"
        >
          <div className="w-[100%] md:w-[45%] flex flex-col gap-4  ">
            <div className="flex justify-center md:justify-start">
              <Badge title={profile.availability} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              {profile.titleHero}
            </h1>
            <p className="text-base text-brand-primary">
              {profile.subtitleHero}
            </p>
            <div className="flex flex-1 items-center justify-center md:items-center md:justify-start gap-4">
              <Button variant="primary">Get In Toutch</Button>
              <Button variant="secondary">View Projects</Button>
            </div>
          </div>
        </section>
      </div>
      {/** Hero */}
    </>
  )
}
