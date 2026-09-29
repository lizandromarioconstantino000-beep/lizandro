import type { ReactNode } from 'react'

export type TagsTypes = {
  name: string
  icon?: ReactNode
}

export function Tags({ name, icon }: TagsTypes) {
  return (
    <div className="inline-flex items-center justify-center gap-[6px] rounded-4xl px-3 py-1.5 h-8 bg-brand-neutral text-brand-primary text-sm font-light   ">
      <span>{name}</span>
      {icon}
    </div>
  )
}
