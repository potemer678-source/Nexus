export default function Feed() {
  // Placeholder feed with glass cards and photo grid
  const posts = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    user: `user${i + 1}`,
    caption: 'A nice photo from my feed',
    imgs: ['/sample1.jpg', '/sample2.jpg'].slice(0, (i % 3) + 1)
  }))

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Home Feed</h1>
        <div className="text-sm text-slate-400">Dark • Smooth</div>
      </div>

      <div className="space-y-4">
        {posts.map((p) => (
          <article key={p.id} className="bg-[rgba(255,255,255,0.02)] p-4 rounded-xl border border-[rgba(255,255,255,0.03)]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-slate-700" />
              <div>
                <div className="font-medium">{p.user}</div>
                <div className="text-xs text-slate-400">2h</div>
              </div>
            </div>
            <div className="mb-3 text-slate-200">{p.caption}</div>
            <div className="grid grid-cols-3 gap-2">
              {p.imgs.map((src, idx) => (
                <div key={idx} className="aspect-square bg-slate-600 rounded-md" />
              ))}
            </div>
            <div className="mt-3 flex items-center gap-4 text-sm text-slate-400">
              <button>Like</button>
              <button>Comment</button>
              <button>Save</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
