import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import conf from './conf/conf'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(conf.appWriteUrl);
  console.log(conf.productId);
  return (
    <>
     <h1> Blog posting app </h1>

    </>
  )
}

export default App
