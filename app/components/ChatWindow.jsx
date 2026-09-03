import { useEffect, useState } from 'react'
import io from 'socket.io-client'

let socket

export default function ChatWindow({ roomId = 'global' }) {
  const [msgs, setMsgs] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    socket = io(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000')
    socket.emit('join', roomId)
    socket.on('message', (m) => setMsgs((s) => [...s, m]))
    return () => socket.disconnect()
  }, [roomId])

  const send = () => {
    if (!text) return
    socket.emit('message', { roomId, from: 'me', text })
    setText('')
  }

  return (
    <div className="flex flex-col h-full bg-[rgba(255,255,255,0.015)] rounded-xl p-4">
      <div className="flex-1 overflow-auto mb-4">
        {msgs.map((m, i) => (
          <div key={i} className="mb-2">
            <div className="text-xs text-slate-400">{m.from}</div>
            <div className="bg-[rgba(255,255,255,0.03)] inline-block p-2 rounded-md">{m.text}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input value={text} onChange={(e) => setText(e.target.value)} className="flex-1 rounded-md bg-[#0f1724] p-2" />
        <button onClick={send} className="px-4 py-2 bg-blue-600 rounded-md">Send</button>
      </div>
    </div>
  )
}
