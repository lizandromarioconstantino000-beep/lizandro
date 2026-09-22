type BadgeType = {
  title: string
}

export function Badge({ title }: BadgeType) {
  return (
    <div className="inline-flex rounded-4xl px-3 py-1.5 h-8 bg-brand-neutral text-brand-primary text-sm font-light  items-center gap-2">
      <div className="rounded-full bg-green-500 h-3 w-3"></div>
      {title}
    </div>
  )
}
