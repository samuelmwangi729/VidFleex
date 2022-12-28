import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {
    Navigation
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Navigation]);
  
const Suggested = () => {
  return (
    <React.Fragment>
      <section id="iq-favorites" style={{marginTop:50}}>
            <div className="container-fluid">
               <div className="row">
                  <div className="col-sm-12 overflow-hidden">
                     <div className="d-flex align-items-center justify-content-between">
                        <h4 className="main-title">Suggested Movies</h4>
                        <a href="view-all.html" className="text-primary iq-view-all">View All</a>
                     </div>
                  </div>
               </div>
               <div className="favourite-slider">
                  <div  className="swiper pt-2 pt-md-4 pt-lg-4 iq-rtl-direction" data-swiper="common-slider">
      <Swiper navigation={true} loop={true} slidesPerView={3}>
                     <ul className="swiper-wrapper p-0 m-0 ">
                     <SwiperSlide>
                        <li className="swiper-slide slide-item">
                           <div className="block-images position-relative ">
                              <div className="img-box">
                                 <img src="images/video/01.jpg" className="img-fluid" alt="" loading="lazy"/>
                              </div>
                              <div className="block-description">
                                 <h6 className="iq-title"><a href="show-detail.html">Shadow Warrior</a></h6>
                                 <div className="movie-time d-flex align-items-center my-2">
                                    <span className="text-white">1hr : 50mins</span>
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
                     <SwiperSlide>
                        <li className="swiper-slide slide-item">
                           <div className="block-images position-relative ">
                              <div className="img-box">
                                 <img src="images/video/02.jpg" className="img-fluid" alt="" loading="lazy"/>
                              </div>
                              <div className="block-description">
                                 <h6 className="iq-title"><a href="show-detail.html">Narnia</a></h6>
                                 <div className="movie-time d-flex align-items-center my-2">
                                    <span className="text-white">3hr : 10mins</span>
                                 </div>
                                 <div className="hover-buttons">
                                    <a href="show-detail.html" role="button" className="btn btn-hover">
                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
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
                                       <span className="count-box">0</span>
                                    </li>
                                    <li><span><i className="ri-add-line"></i></span></li>
                                 </ul>
                              </div>
                           </div>
                        </li>
                     </SwiperSlide>
                     <SwiperSlide>
                        <li className="swiper-slide slide-item">
                           <div className="block-images position-relative ">
                              <div className="img-box">
                                 <img src="images/video/06.jpg" className="img-fluid" alt="" loading="lazy"/>
                              </div>
                              <div className="block-description">
                                 <h6 className="iq-title"><a href="show-detail.html">Narnia</a></h6>
                                 <div className="movie-time d-flex align-items-center my-2">
                                    <span className="text-white">3hr : 10mins</span>
                                 </div>
                                 <div className="hover-buttons">
                                    <a href="show-detail.html" role="button" className="btn btn-hover">
                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
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
                                       <span className="count-box">0</span>
                                    </li>
                                    <li><span><i className="ri-add-line"></i></span></li>
                                 </ul>
                              </div>
                           </div>
                        </li>
                     </SwiperSlide>
                     <SwiperSlide>
                        <li className="swiper-slide slide-item">
                           <div className="block-images position-relative">
                              <div className="img-box">
                                 <img src="images/video/07.jpg" className="img-fluid" alt="" loading="lazy"/>
                              </div>
                              <div className="block-description">
                                 <h6 className="iq-title"><a href="show-detail.html">X-Men</a></h6>
                                 <div className="movie-time d-flex align-items-center my-2">
                                    <span className="text-white">1hr : 45mins</span>
                                 </div>
                                 <div className="hover-buttons">
                                    <a href="show-detail.html" role="button" className="btn btn-hover">
                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
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
                                       <span className="count-box">25+</span>
                                    </li>
                                    <li><span><i className="ri-add-line"></i></span></li>
                                 </ul>
                              </div>
                           </div>
                        </li>
                     </SwiperSlide>
                     <SwiperSlide>
                        <li className="swiper-slide slide-item">
                           <div className="block-images position-relative">
                              <div className="img-box">
                                 <img src="images/video/08.jpg" className="img-fluid" alt="" loading="lazy"/>
                              </div>
                              <div className="block-description">
                                 <h6 className="iq-title"><a href="show-detail.html">Logan</a></h6>
                                 <div className="movie-time d-flex align-items-center my-2">
                                    <span className="text-white">1hr : 22mins</span>
                                 </div>
                                 <div className="hover-buttons">
                                    <a href="show-detail.html" role="button" className="btn btn-hover">
                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
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
                                       <span className="count-box">0</span>
                                    </li>
                                    <li><span><i className="ri-add-line"></i></span></li>
                                 </ul>
                              </div>
                           </div>
                        </li>
                     </SwiperSlide>
                     <SwiperSlide>
                        <li className="swiper-slide slide-item">
                           <div className="block-images position-relative">
                              <div className="img-box">
                                 <img src="images/video/09.jpg" className="img-fluid" alt="" loading="lazy"/>
                              </div>
                              <div className="block-description">
                                 <h6 className="iq-title"><a href="show-detail.html">Black Queen</a></h6>
                                 <div className="movie-time d-flex align-items-center my-2">
                                    <span className="text-white">1h 45mins</span>
                                 </div>
                                 <div className="hover-buttons">
                                    <a href="show-detail.html" role="button" className="btn btn-hover">
                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
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
                                       <span className="count-box">0</span>
                                    </li>
                                    <li><span><i className="ri-add-line"></i></span></li>
                                 </ul>
                              </div>
                           </div>
                        </li>
                     </SwiperSlide>
                     <SwiperSlide>
                        <li className="swiper-slide slide-item">
                           <div className="block-images position-relative">
                              <div className="img-box">
                                 <img src="images/video/03.jpg" className="img-fluid" alt="" loading="lazy"/>
                              </div>
                              <div className="block-description">
                                 <h6 className="iq-title"><a href="show-detail.html">X-Men</a></h6>
                                 <div className="movie-time d-flex align-items-center my-2">
                                    <span className="text-white">1hr : 45mins</span>
                                 </div>
                                 <div className="hover-buttons">
                                    <a href="show-detail.html" role="button" className="btn btn-hover">
                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
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
                                       <span className="count-box">25+</span>
                                    </li>
                                    <li><span><i className="ri-add-line"></i></span></li>
                                 </ul>
                              </div>
                           </div>
                        </li>
                     </SwiperSlide>
                     <SwiperSlide>
                        <li className="swiper-slide slide-item">
                           <div className="block-images position-relative">
                              <div className="img-box">
                                 <img src="images/video/04.jpg" className="img-fluid" alt="" loading="lazy"/>
                              </div>
                              <div className="block-description">
                                 <h6 className="iq-title"><a href="show-detail.html">Logan</a></h6>
                                 <div className="movie-time d-flex align-items-center my-2">
                                    <span className="text-white">1hr : 22mins</span>
                                 </div>
                                 <div className="hover-buttons">
                                    <a href="show-detail.html" role="button" className="btn btn-hover">
                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
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
                                       <span className="count-box">0</span>
                                    </li>
                                    <li><span><i className="ri-add-line"></i></span></li>
                                 </ul>
                              </div>
                           </div>
                        </li>
                     </SwiperSlide>
                     <SwiperSlide>
                        <li className="swiper-slide slide-item">
                           <div className="block-images position-relative">
                              <div className="img-box">
                                 <img src="images/video/05.jpg" className="img-fluid" alt="" loading="lazy"/>
                              </div>
                              <div className="block-description">
                                 <h6 className="iq-title"><a href="show-detail.html">Black Queen</a></h6>
                                 <div className="movie-time d-flex align-items-center my-2">
                                    <span className="text-white">1h 45mins</span>
                                 </div>
                                 <div className="hover-buttons">
                                    <a href="show-detail.html" role="button" className="btn btn-hover">
                                    <i className="fa fa-play mr-1" aria-hidden="true"></i>
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
                                       <span className="count-box">0</span>
                                    </li>
                                    <li><span><i className="ri-add-line"></i></span></li>
                                 </ul>
                              </div>
                           </div>
                        </li>
                     </SwiperSlide>
                     <SwiperSlide>
                        <li className="swiper-slide slide-item">
                           <div className="block-images position-relative ">
                              <div className="img-box">
                                 <img src="images/video/10.jpg" className="img-fluid" alt="" loading="lazy"/>
                              </div>
                              <div className="block-description">
                                 <h6 className="iq-title"><a href="show-detail.html">Shadow Warrior</a></h6>
                                 <div className="movie-time d-flex align-items-center my-2">
                                    <span className="text-white">1hr : 50mins</span>
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