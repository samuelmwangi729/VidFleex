import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {
    Navigation
  } from 'swiper';
import axios from 'axios';
  
  // install Swiper modules
  SwiperCore.use([Navigation]);
const Upcoming = () => {
   const [loading,setLoading] = useState(true)
   const [upcoming, setUpcoming] = useState([])
   const fetchUpcoming =  async () =>{
      await axios.get("/Upcoming").then((response)=>{
         setUpcoming(response.data)
         setLoading(false)
      })
   }
   useEffect(()=>{
      fetchUpcoming()
   },[])
  return (
    <React.Fragment>
      <section id="iq-favorites" style={{marginTop:-150}}>
            <div className="container-fluid">
               <div className="row">
                  <div className="col-sm-12 overflow-hidden">
                     <div className="d-flex align-items-center justify-content-between">
                        <h4 className="main-title">Upcoming Movies</h4>
                        <a href="view-all.html" className="text-primary iq-view-all">View All</a>
                     </div>
                  </div>
               </div>
               <div className="favourite-slider">
                  <div  className="swiper pt-2 pt-md-4 pt-lg-4 iq-rtl-direction" data-swiper="common-slider">
                  <Swiper navigation={true} loop={true} slidesPerView={7}>
                     <ul className="swiper-wrapper p-0 m-0 ">
                        {loading ? (
                             <h4 className="main-title text-danger">Loading Upcoming Movies...</h4>
                        ) : (
                           <>
                           {upcoming.map((item,index)=>(
                              <SwiperSlide key={index}>
                                 <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative ">
                                       <div className="img-box">
                                          <img src={item.Image} className="img-fluid" alt="" loading="lazy" width={200+"px"} height={150 +"px !important"}/>
                                       </div>
                                       <div className="block-description">
                                          <h6 className="iq-title"><a href="show-detail.html">{item.Title}</a></h6>
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
                                             <a href="show-detail.html" role="button" className="btn btn-hover"><i
                                                className="fa fa-play mr-1" aria-hidden="true"></i>
                                             Play Now
                                             </a>
                                          </div>
                                       </div>
                                       <div className="block-social-info">
                                          <ul className="list-inline p-0 m-0 music-play-lists">
                                             <li className="share">
                                                <span><i className="ri-share-fill"></i></span>
                                                <div className="share-box">
                                                   <div className="d-flex align-items-center">
                                                      <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                         target="_blank" rel="noopener noreferrer" className="share-ico" tabindex="0"><i
                                                         className="ri-facebook-fill"></i></a>
                                                      <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                         target="_blank" rel="noopener noreferrer" className="share-ico" tabindex="0"><i
                                                         className="ri-twitter-fill"></i></a>
                                                      <a href="#"
                                                         data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                         className="share-ico iq-copy-link" tabindex="0"><i
                                                         className="ri-links-fill"></i></a>
                                                   </div>
                                                </div>
                                             </li>
                                             <li>
                                                <span><i className="ri-heart-fill"></i></span>
                                                <span className="count-box">2+</span>
                                             </li>
                                             <li><span><i className="ri-add-line"></i></span></li>
                                          </ul>
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

export default Upcoming