// Lightweight client-side call widget placeholder demonstrating UI controls for WebRTC
import { useState } from 'react'

export default function CallWidget() {
  const [mic, setMic] = useState(true)
  const [cam, setCam] = useState(true)
  const [sharing, setSharing] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 bg-[rgba(10,12,16,0.8)] p-3 rounded-xl backdrop-blur-sm border border-[rgba(255,255,255,0.03)]">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 rounded-md bg-slate-700" />
        <div>
          <div className="font-medium">Call with user</div>
          <div className="text-xs text-slate-400">00:02:15</div>
        </div>
      </div>
      <div className="flex gap-2">
        <button onClick={() => setMic((s) => !s)} className="px-3 py-1 rounded-md bg-[rgba(255,255,255,0.03)]">{mic ? 'Mute' : 'Unmute'}</button>
        <button onClick={() => setCam((s) => !s)} className="px-3 py-1 rounded-md bg-[rgba(255,255,255,0.03)]">{cam ? 'Cam Off' : 'Cam On'}</button>
        <button onClick={() => setSharing((s) => !s)} className="px-3 py-1 rounded-md bg-[rgba(255,255,255,0.03)]">{sharing ? 'Stop Share' : 'Share'}</button>
      </div>
    </div>
  )
}
