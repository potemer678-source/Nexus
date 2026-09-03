import Link from 'next/link'

const items = [
  { name: 'DMs', href: '#' },
  { name: 'Groups', href: '#' },
  { name: 'Feed', href: '/' },
  { name: 'Explore', href: '#' },
  { name: 'Settings', href: '#' }
]

export default function Sidebar() {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] rounded-xl p-4 h-full backdrop-blur-sm border border-[rgba(255,255,255,0.03)]">
      <div className="mb-6 text-center font-bold text-lg">Nexus</div>
      <nav className="space-y-2">
        {items.map((it) => (
          <Link key={it.name} href={it.href}>
            <a className="block px-3 py-2 rounded-md hover:bg-[rgba(255,255,255,0.03)]">{it.name}</a>
          </Link>
        ))}
      </nav>
    </div>
  )
}
