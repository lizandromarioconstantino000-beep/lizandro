import { services, tools } from '../../data'

export default function Skills() {
  return (
    <div className="grid place-items-center md:grid-cols-2 w-[85dvw] md:w-full h-full">
      <div className="flex flex-col items-start justify-center w-full h-full gap-4 pr-4">
        {/**1 */}
        <p className="md:text-6xl md:font-bold text-3xl text-start">
          Design de produto focado em resultados reais
        </p>

        <p className="md:text-2xl text-xl text-start">Minhas Ferramentas</p>

        <div className="flex gap-2">
          {tools.map((item) => (
            <div
              className="flex justify-center rounded-2xl overflow-hidden p-2 h-[58px] w-[58px]"
              key={item.id}
            >
              <img
                src={item.icon}
                alt=""
                className="border-[1px] shadow-md rounded-lg p-1"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-5 w-full h-full">
        {services.map((item, key) => (
          <div className="flex px-8 gap-[6px] text-start">
            <p className="md:text-2xl text-xl font-medium" key={key}>
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
