import { Link } from 'react-router-dom'
import { profile, social } from '../../data'

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-black text-brand-neutral">
      <div className="w-[85dvw] md:w-[1200px] h-full flex flex-col items-start justify-start pt-[100px] md:pt-[150px]">
        <p className=" text-4xl md:text-7xl font-black mb-8">
          Vamos Construir Produtos digitais
        </p>

        <div className="grid md:grid-cols-2 w-full gap-4">
          <div id="contact" className="flex flex-col w-full gap-4 ">
            <div>
              <p className="opacity-50">email</p>
              <p className="">{profile.email}</p>
            </div>
            <div>
              <p className="opacity-50">Contactos</p>
              <p>{profile.tel}</p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-4">
            <div>
              <p className="opacity-50">Menu</p>
              <div className="flex gap-2">
                <p>Work</p>
                <p>About</p>
                <Link to={'/'}>
                  <p>Contact</p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="opacity-50">Social Midea</p>
              <div className="flex gap-3">
                {social.map((item, key) => (
                  <a className="border-1 p-2 rounded-full" href={item.link}>
                    <img src={item.icon} key={key} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-center w-full my-5">
          &copy; {new Date().getFullYear()} - Lizandro Constantino
        </p>
      </div>
      <div className="text-9xl md:text-[350px] overflow-hidden ">
        <p className="text-9xl md:text-[350px] overflow-hidden ">Constantino</p>
      </div>
    </div>
  )
}
