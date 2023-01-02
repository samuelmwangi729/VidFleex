import React , {useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import { Link } from 'react-router-dom'
// import Swiper core and required modules
import SwiperCore, {
    Navigation
  } from 'swiper';
import axios from 'axios';
  
  // install Swiper modules
  SwiperCore.use([Navigation]);
  
const Suggested = () => {
   const [loading,isLoading] = useState(true)
   const [suggested,setSuggested] = useState([])
   const getSuggested = async () =>{
      await axios.get("/Suggested").then((response)=>{
         setSuggested(response.data)
         isLoading(false)
      })
   }
   useEffect(()=>{
      getSuggested()
   },[])
  return (
    <React.Fragment>
       <section id="iq-favorites" style={{marginTop:-150}}>
            <div className="container-fluid">
               <div className="row">
                  <div className="col-sm-12 overflow-hidden">
                     <div className="d-flex align-items-center justify-content-between">
                        <h4 className="main-title">Suggested for You</h4>
                        <a href="view-all.html" className="text-primary iq-view-all">View All</a>
                     </div>
                  </div>
               </div>
               <div className="favourite-slider">
                  <div  className="swiper pt-2 pt-md-4 pt-lg-4 iq-rtl-direction" data-swiper="common-slider">
                  <Swiper navigation={true} loop={true} slidesPerView={7}>
                     <ul className="swiper-wrapper p-0 m-0 ">
                        {loading ? (
                             <h4 className="main-title text-danger">Keep Calm as we Load the Movies...</h4>
                        ) : (
                           <>
                           {suggested.map((item,index)=>(
                              <SwiperSlide key={index}>
                                 <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative ">
                                       <div className="img-box">
                                          <img src={item.Image} className="img-fluid" alt="" loading="lazy" width={220+"px"} height={150 +"px !important"}/>
                                       </div>
                                       <div className="block-description">
                                          <h6 className="iq-title"><a href="show-detail.html" style={{fontSize:15+"px",whiteSpace:'normal',float:'left'}}>{item.Title}</a></h6>
                                          <div className="movie-time d-flex align-items-center my-2">
                                             <span className="text-white"> 
                                             {Math.floor(item.MovieLength/60)}
                                             {Math.floor(item.MovieLength/60) == 1 ? (
                                                " Hr "
                                             ) : (
                                                " Hrs "
                                             )}
                                              {item.MovieLength % 60} Mins
                                             </span>
                                          </div>
                                          <div className="hover-buttons">
                                          <Link to={`${"/Details/"+item.RandomId}`} className="btn btn-hover">
                                             <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                             Play Now
                                          </Link>
                                          </div>
                                       </div>
                                       <div className="block-social-info">
                                          
                                       </div>
                                    </div>
                                 </li>
                              </SwiperSlide>
                           ))}
                           </>
                        )}
                     </ul>
                  </Swiper>
                  </div>
               </div>
            </div>
      </section>
      
       
    </React.Fragment>
  )
}

export default Suggested