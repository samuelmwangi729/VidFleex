import React from 'react'
import Slider from './Slider'
import Latest from './Latest'
import Upcoming from './Upcoming'
import Top from './Top'
import Suggested from './Suggested'
import Featured from './Featured'
import Trending from './Trending'
import Recommended from './Recommended'
const Homepage = () => {
  return (
    <>
    <Slider/>
    <div className="main-content">
        <Latest/>
        <Upcoming/>
        <Top/>
        <Suggested/>
        <Featured/>
        <Trending/>
        <Recommended/>
    </div>
    </>
  )
}

export default Homepage