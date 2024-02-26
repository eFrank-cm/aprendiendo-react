// import { useState } from 'react'
import './App.css'
import { FollowMouse } from './components/FollowMouse'

export const App = () => {
  // const [mounted, setMounted] = useState(true)

  return (
    <main>
      <FollowMouse />
      {/* {mounted && <FollowMouse /> } */}
      {/* <button onClick={() => setMounted(!mounted)}>Toggle mounted FollowMouse component</button> */}
    </main>
  )
}
