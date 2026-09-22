export type TagsTypes = {
  name: string
}

export function Tags({ name }: TagsTypes) {
  return (
    <div className="inline-flex rounded-4xl px-3 py-1.5 h-8 bg-brand-neutral text-brand-primary text-sm font-light   ">
      {name}
    </div>
  )
}
