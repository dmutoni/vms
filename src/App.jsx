import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Dashboard />
    </div>
  )
}

export default App
