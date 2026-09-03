export default function RightDrawer() {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] rounded-xl p-4 h-full border border-[rgba(255,255,255,0.03)]">
      <div className="h-32 rounded-md bg-gradient-to-tr from-indigo-900 to-slate-800 mb-3"></div>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-slate-700" />
        <div>
          <div className="font-medium">username</div>
          <div className="text-xs text-slate-400">Online</div>
        </div>
      </div>
      <div className="text-sm text-slate-400">Shared Media</div>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-square bg-slate-600 rounded-md" />
        ))}
      </div>
    </div>
  )
}
