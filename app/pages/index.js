import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import RightDrawer from '../components/RightDrawer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0d10] text-slate-100">
      <Head>
        <title>Nexus — Feed</title>
      </Head>
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 p-4">
        <aside className="col-span-2">
          <Sidebar />
        </aside>
        <main className="col-span-7">
          <Feed />
        </main>
        <aside className="col-span-3">
          <RightDrawer />
        </aside>
      </div>
    </div>
  )
}
