export function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full h-16 px-8 rounded-4xl bg-brand-neutral">
      <section className="flex items-center justify-between w-full">
        <div className="rounded-4xl bg-gray-400 h-8 w-8"></div>
        <ul className="flex gap-4">
          <a href="#">Work</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </ul>
        <div>button</div>
      </section>
    </nav>
  )
}
