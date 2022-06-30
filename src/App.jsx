import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Dashboard />
    </div>
  )
}

export default App
