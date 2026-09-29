import React from 'react'
import { Button } from '../ui/Buttons'
import { Badge } from '../ui/Badge'
import { chat } from '../../data'

export default function Contacts() {
  return (
    <>
      {/** Feaatured Contact */}
      <section className="flex flex-col justify-center  gap-4 items-center w-full m-auto mb-8 text-brand-primary md:max-w-[1200px] text-center md:text-start mt-10 md:mt-0">
        <div className="flex flex-col justify-between gap-8 md:w-full w-[85dvw] ">
          <p className="text-3xl text-left md:text-6xl font-bold">
            Entre em Contacto.
          </p>
          <div className="flex flex-col gap-6 md:flex-row mb-16">
            {chat.map((item) => {
              const Icon = item.icon

              return (
                <div className="flex flex-col max-w-sm">
                  <div className="flex flex-row items-center gap-4 ">
                    <Icon />
                    <p className="font-black text-xl">{item.title}</p>
                  </div>
                  <p className="text-start text-brand-primary/50">
                    {item.paragrafo}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:w-full w-[85dvw]  text-left ">
          <div className="bg-brand-neutral shadow-2xl w-full rounded-2xl h-full ">
            <div className="flex flex-col items-start justify-center w-full h-full p-6 gap-2">
              <div className="w-full h-full bg-brand-primary rounded-xl mb-2"></div>
              <Badge title="Disponibilidade flexivel" />
              <p className="text-2xl font-bold text-brand-primary">
                Inicie o seu Projeto
              </p>
              <p className="text-start">
                Comunicação direta e foco total no seu projeto.
              </p>
            </div>
          </div>
          <div className="bg-brand-neutral p-8 grid gap-3 shadow-2xl rounded-2xl md:col-span-2 w-full">
            <div className="flex flex-col">
              <p className="text-3xl font-bold mb-4">Colaboração Contínua</p>
              <p className="text-sm">
                Design contínuo para produtos digitais em evolução. <br /> Ideal
                para startups e equipas que precisam de consistência.
              </p>
            </div>
            <hr className="opacity-20" />
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-bold mb-4">Preço sob consulta</p>
              <ul className="list-disc flex flex-col  md:flex-row md:gap-5">
                <div>
                  <li className="md:text-sm">Sem compromisso de longo prazo</li>
                  <li className="md:text-sm">Ajustes e melhorias contínuas</li>
                </div>
                <div>
                  <li className="md:text-sm">Sem compromisso de longo prazo</li>
                  <li className="md:text-sm">Entregas rapidas</li>
                </div>
              </ul>
              <div className="mb">
                <Button variant="primary">Vamos Conversar</Button>
              </div>
            </div>
          </div>
          <div className="bg-brand-primary shadow-2xl rounded-2xl md:col-span-3 w-full">
            <div className="flex flex-col items-center justify-between text-start w-full h-full p-8">
              <p className="text-3xl font-bold text-brand-secondary text-start w-full mb-6">
                Projecto Unico
              </p>
              <div className="flex flex-col items-center justify-between md:flex-row gap-8 w-full h-full ">
                <span className="text-brand-secondary">
                  Solução completa para um projeto específico. <br /> Ideal para
                  apps, website
                </span>

                <ul className="list-disc flex flex-col text-brand-secondary  md:flex-row md:gap-5">
                  <div>
                    <li className="md:text-sm">
                      Escopo definido antecipadamente
                    </li>
                    <li className="md:text-sm">
                      prazo de entrega estabelecido{' '}
                    </li>
                  </div>
                  <div>
                    <li className="md:text-sm">3 Revisões incluídas</li>
                    <li className="md:text-sm">Preço sob consulta</li>
                  </div>
                </ul>

                <Button variant="secondary">Solicitar Orcamento</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/** Feaatured Skills */}
    </>
  )
}
