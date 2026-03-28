import { useState } from 'react'
import { Home } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center text-gray-900">
      <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center gap-6 max-w-sm w-full">
        <div className="p-4 bg-indigo-100 text-indigo-600 rounded-full">
          <Home size={48} />
        </div>
        
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Hello World!
        </h1>
        
        <p className="text-gray-600 text-center text-sm">
          Welcome to your new React + Vite + Tailwind CSS application.
        </p>

        <button
          className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors shadow-sm active:scale-95"
          onClick={() => setCount((count) => count + 1)}
        >
          Clicked {count} times
        </button>
      </div>
    </div>
  )
}

export default App
