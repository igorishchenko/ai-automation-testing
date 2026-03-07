import { useState } from 'react'
import { Button } from './components/Button'

function App() {
  const [clicked, setClicked] = useState(false)

  return (
    <div className="rounded-lg bg-slate-100 p-6 shadow-sm">
      <h1 className="text-2xl font-semibold text-slate-800">Hello, React!</h1>
      <p className="text-slate-600">This is testing automation</p>
      <div className="mt-4 flex flex-col items-center gap-4">
        <Button onClick={() => setClicked(true)} aria-label="Trigger click message">
          Click me
        </Button>
        {clicked && (
          <p className="text-slate-800" role="status">
            Button clicked!
          </p>
        )}
      </div>
    </div>
  )
}

export default App
