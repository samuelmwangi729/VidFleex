import React from 'react'
import {Header,Slider,Latest,Upcoming, Top,Suggested,Featured,Trending, Recommended,Footer} from './Components'
const App = () => {
  return (
    <>
      <Header/>
      <Slider/>
      <div className="main-content">
        <Latest/>
        <Upcoming/>
        <Top/>
        <Suggested/>
        <Featured/>
        <Trending/>
        <Recommended/>
        <Footer/>
      </div>
    </>
  )
}

export default App