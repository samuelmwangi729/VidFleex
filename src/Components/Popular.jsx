import React ,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from 'react-router-dom'
import "swiper/css/navigation"
import SwiperCore, {
    Navigation
  } from 'swiper';
import axios from 'axios';
  SwiperCore.use([Navigation]);
const Popular = () => {
   const [loadingp,isLoadingp] =useState(true)
   const [loadings,isLoadings] =useState(true)
   const [popular,setPopular] = useState([])
   const [special,setSpecial] = useState([])
   const getPopular = async ()=>{
      await axios.get("Popular/").then((response)=>{
         setPopular(response.data)
         isLoadingp(false)
      })
   }
   const getSpecial = async ()=>{
      await axios.get("Special/").then((response)=>{
         setSpecial(response.data)
         isLoadings(false)
      })
   }
   useEffect(()=>{
      getPopular()
      getSpecial()
   },[])
  return (
    <>
      <section id="iq-favorites" className="iq-rtl-direction" style={{marginTop:-150}}>
         <div className="container-fluid ">
            <div className="row">
               <div className="col-sm-12 overflow-hidden">
                  <div className="iq-ltr-direction d-flex align-items-center justify-content-between">
                     <h4 className="main-title ">Popular Videos</h4>
                     <a href="view-all-video.html" className="text-primary iq-view-all">View All</a>
                  </div>
               </div>
            </div>
            <div className="favourite-slider">
                  <div  className="swiper pt-2 pt-md-4 pt-lg-4 iq-rtl-direction" data-swiper="common-slider">
                     <ul className="swiper-wrapper m-0 p-0">
                        {loadingp ? "Loading Popular Videos" : (
                        <Swiper navigation={true} loop={true} slidesPerView={8}>
                           {popular && popular.map((item,index)=>(
                              <SwiperSlide>
                                 <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative ">
                                       <div className="img-box">
                                          <img src={item.Image} className="img-fluid" alt="" loading="lazy"/>
                                       </div>
                                       <div className="block-description">
                                          <h6 className="iq-title"><a href="video-detail.html">{item.Title}</a></h6>
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
                                    </div>
                                 </li>
                              </SwiperSlide>
                           ))}
                        </Swiper>
                        )}
                     </ul>
               </div>
            </div>
         </div>
      </section>
      <section id="iq-favorites" className="iq-rtl-direction" style={{marginTop:-150}}>
         <div className="container-fluid ">
            <div className="row">
               <div className="col-sm-12 overflow-hidden">
                  <div className="iq-ltr-direction d-flex align-items-center justify-content-between">
                     <h4 className="main-title">Specials & Latest Videos</h4>
                     <a href="view-all-video.html" className="text-primary">View All</a>
                  </div>
               </div>
            </div>
            <div className="favourite-slider">
                  <div  className="swiper pt-2 pt-md-4 pt-lg-4 iq-rtl-direction" data-swiper="common-slider">
                  <ul className="swiper-wrapper m-0 p-0">
                        {loadings ? "Loading Special Videos" : (
                        <Swiper navigation={true} loop={true} slidesPerView={8}>
                           {special && special.map((item,index)=>(
                              <SwiperSlide>
                                 <li className="swiper-slide slide-item">
                                    <div className="block-images position-relative ">
                                       <div className="img-box">
                                          <img src={item.Image} className="img-fluid" alt="" loading="lazy"/>
                                       </div>
                                       <div className="block-description">
                                          <h6 className="iq-title"><a href="video-detail.html">{item.Title}</a></h6>
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
                                                More Details
                                             </Link>
                                          </div>
                                       </div>
                                    </div>
                                 </li>
                              </SwiperSlide>
                           ))}
                        </Swiper>
                        )}
                     </ul>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default Popular