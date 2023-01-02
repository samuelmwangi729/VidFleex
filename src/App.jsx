import React from 'react'
import {Header,Footer,Homepage,Genres,Videos,Blog,About,Contact,Single} from './Components'
import {Routes, Route, Outlet} from 'react-router-dom'
const App = () => {
  return (
    <>
      <Header/>
      <Routes>
      <Route index element={<Homepage/>}/>
      {/* <Route path='/Genres' element={<Genres/>}/> */}
      <Route path='/Movies' element={<Videos/>}/>
      {/* <Route path='/Blog' element={<Blog/>}/> */}
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Details/:movieId' element={<Single/>}/>
      </Routes>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default App