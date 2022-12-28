import React from 'react'
import {Header,Footer,Homepage,Genres,Videos} from './Components'
import {Routes, Route, Outlet} from 'react-router-dom'
const App = () => {
  return (
    <>
      <Header/>
      <Routes>
      <Route index element={<Homepage/>}/>
      <Route path='/Genres' element={<Genres/>}/>
      <Route path='/Movies' element={<Videos/>}/>
      </Routes>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default App