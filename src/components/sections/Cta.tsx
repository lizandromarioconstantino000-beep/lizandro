import { profile } from '../../data'
import { Button } from '../ui/Buttons'
import { BsWhatsapp } from 'react-icons/bs'

export default function Cta() {
  return (
    <>
      {/** Feaatured Contact */}
      <section
        id="contacts"
        className="flex flex-col justify-center  gap-4 items-center w-full m-auto mt-52 h-[90dvh] text-brand-primary  text-center md:text-start pt-12 bg-brand-secondary"
      >
        <div className="flex justify-between items-center justify-center mb-16 md:w-full w-[85dvw]">
          <div className="flex flex-col items-center justify-center ">
            <img src={profile.Image} alt="Lizandro" className="w-24" />
            <div className="flex flex-col gap-2 items-center justify-center">
              <p className="text-3xl font-black"> Tem um Projecto em Mente?</p>
              <span>Vamos falar e transformar a sua ideia em algo real</span>
              <div>
                <Button variant="primary">
                  <BsWhatsapp width={32} />
                  Vamos Conversar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/** Feaatured Contact */}
    </>
  )
}
