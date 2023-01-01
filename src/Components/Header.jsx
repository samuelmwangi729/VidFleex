import React,{useState} from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
   const [activeClass,setActive] = useState("")
  return (
   <>
      <header id="main-header">
         <div className="main-header">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-sm-12">
                     <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <a href="#" className="navbar-toggler c-toggler" data-toggle="collapse"
                           data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                           aria-expanded="false" aria-label="Toggle navigation">
                           <div className="navbar-toggler-icon" data-toggle="collapse">
                              <span className="navbar-menu-icon navbar-menu-icon--top"></span>
                              <span className="navbar-menu-icon navbar-menu-icon--middle"></span>
                              <span className="navbar-menu-icon navbar-menu-icon--bottom"></span>
                           </div>
                        </a>
                           <Link to={"/"}>
                            <img className="img-fluid logo" src="images/logo.png" loading="lazy" />
                           </Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                           <div className="container text-right">
                             <ul className="navbar-nav ml-auto">
                                 <li className={activeClass ? "menu-item active" : "menu-item"} onClick={()=>setActive("active")}>
                                    <Link to={"/"}>Home</Link>
                                 </li>
                                 <li className="menu-item">
                                 <Link to={"/Movies"}>Movies</Link>
                                 </li>
                                 <li className="menu-item">
                                    <Link to={"/About"}>About Us</Link>
                                 </li>
                                 <li className="menu-item">
                                    <Link to={"/Contact"}>Contact Us</Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </header>
   </>
  )
}

export default Header