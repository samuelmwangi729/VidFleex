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
  
const Slider = () => {

  return (
   <>
   <Swiper navigation={true} loop={true} slidesPerView={1}>
   <div  className="slider m-0 p-0 swiper-wrapper home-slider">
   <SwiperSlide>
        <div className="swiper-slide  slide swiper-bg" style={{
            backgroundImage: "url(" + "images/slider/slider1.jpg" + ")",
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '80vh',
            position: 'relative',
            }}>
            <div className="container-fluid position-relative h-100">
                <div className="slider-inner h-100">
                    <div className="row align-items-center  iq-ltr-direction h-100 ">
                    <div className="col-lg-7 col-md-12">
                        <a href="javascript:void(0);">
                            <div className="channel-logo" data-iq-gsap="onStart" data-iq-position-x="-150" data-iq-position-y="0" data-iq-duration="1" data-iq-delay=".4">
                                <img src="images/logo.png" className="c-logo" alt="streamit" loading="lazy"/>
                            </div>
                        </a>
                        <h1 className="slider-text big-title title text-uppercase"  data-iq-gsap="onStart" data-iq-position-x="-150" data-iq-position-y="0" data-iq-duration="1" data-iq-delay=".4">Pirates of Sea</h1>
                        <div className="d-flex flex-wrap align-items-center r-mb-23" data-iq-gsap="onStart" data-iq-position-x="-150" data-iq-position-y="0" data-iq-duration="1" data-iq-delay=".4">
                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3" >
                                <ul
                                className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left" >
                                <li>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star-half" aria-hidden="true"></i>
                                </li>
                                </ul>
                                <span className="text-white ml-2">4.7(lmdb)</span>
                            </div>
                            <div className="d-flex align-items-center mt-2 mt-md-3">
                                <span className="badge badge-secondary p-2">NC-17</span>
                                <span className="ml-3">1hrs : 45mins</span>
                            </div>
                            <p data-iq-gsap="onStart" data-iq-position-x="0" data-iq-position-y="150" data-iq-duration="1" data-iq-delay=".5">
                                        Piracy is an act of robbery or criminal violence by ship or boat-borne attackers upon another ship or a coastal area, typically with the goal of stealing cargo and other valuable items or properties.										
                            </p>
                        </div>
                        <div className="trending-list" data-wp_object-in="fadeInUp" data-delay-in="1.2">
                            <div className="text-primary title starring">
                                Starring: <span className="text-body"><a href="cast-karen-gilchrist.html">Karen Gilchrist,</a>
                                <a href="#">James Earl Jones</a>
                                </span>
                            </div>
                            <div className="text-primary title genres">
                                Genres: <span className="text-body"><a href="category-action.html">Action</a></span>
                            </div>
                            <div className="text-primary title tag">
                                Tag: <span className="text-body"><a href="tags/action.html">Action,</a><a href="tags/adventure.html">
                                Adventure,</a><a href="tags/horror.html">Horror</a></span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center r-mb-23" data-iq-gsap="onStart" data-iq-position-x="0" data-iq-position-y="150" data-iq-duration="1" data-iq-delay=".6">
                            <a href="show-details.html" className="btn btn-hover iq-button"><i className="fa fa-play mr-2"
                                aria-hidden="true"></i>Play Now</a>
                        </div>
                    </div>
                    <div className=" col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
                        <a href="video/trailer.mp4" className="video-open playbtn" tabIndex="0">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px"
                            viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                            <polygon class="triangle" fill="none" strokeWidth="7" strokeLinecap="round"
                                strokeLinejoin="round" strokeMiterlimit="10"
                                points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                            <circle class="circle" fill="none" strokeWidth="7" strokeLinecap="round"
                                strokeLinejoin="round" strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3">
                            </circle>
                        </svg>
                            <span className="w-trailor">Watch Trailer</span>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
   </SwiperSlide>
   <SwiperSlide>
        <div className="swiper-slide slide swiper-bg" style={{
            backgroundImage: "url(" + "images/slider/slider2.jpg" + ")",
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '80vh',
            position: 'relative',
        }}>
            <div className="container-fluid position-relative h-100">
                <div className="slider-inner h-100">
                    <div className="row align-items-center  h-100 iq-ltr-direction">
                    <div className="col-lg-7  col-md-12">
                        <a href="javascript:void(0);">
                            <div className="channel-logo" data-iq-gsap="onStart" data-iq-position-x="-150" data-iq-position-y="0" data-iq-duration="1" data-iq-delay=".4">
                                <img src="images/logo.png" className="c-logo" alt="streamit" loading="lazy"/>
                            </div>
                        </a>
                        <h1 className="slider-text big-title title text-uppercase" data-iq-gsap="onStart" data-iq-position-x="-150" data-iq-position-y="0" data-iq-duration="1" data-iq-delay=".4">Sand Dust
                        </h1>
                        <div className="d-flex flex-wrap align-items-center r-mb-23"
                            data-iq-gsap="onStart" data-iq-position-x="-150" data-iq-position-y="0" data-iq-duration="1" data-iq-delay=".4">
                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3">
                                <ul
                                className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                <li>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star-half" aria-hidden="true"></i>
                                </li>
                                </ul>
                                <span className="text-white ml-2">4.7(lmdb)</span>
                            </div>
                            <div className="d-flex align-items-center mt-2 mt-md-3">
                                <span className="badge badge-secondary p-2">16+</span>
                                <span className="ml-3">2hrs : 40mins</span>
                            </div>
                        </div>
                        <p data-iq-gsap="onStart" data-iq-position-x="0" data-iq-position-y="150" data-iq-duration="1" data-iq-delay=".5">
                            Sand and dust storms (SDS), also known as sirocco, haboob, yellow dust, white storms, and the harmattan, are a natural phenomenon linked with land and water management and climate change.										
                        </p>
                        <div className="trending-list" data-wp_object-in="fadeInUp" data-delay-in="1.2">
                            <div className="text-primary title starring">
                                Starring: <span className="text-body"><a href="cast-karen-gilchrist.html">Karen Gilchrist,</a>
                                <a href="#"> James Earl Jones</a>
                                </span>
                            </div>
                            <div className="text-primary title genres">
                                Genres: <span className="text-body"><a href="category-action.html">Action</a></span>
                            </div>
                            <div className="text-primary title tag">
                                Tag: <span className="text-body"><a href="tags/action.html">Action</a><a
                                href="tags/adventure.html">Adventure,</a> <a href="tags/horror.html">
                                Horror
                                </a> </span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center r-mb-23" data-iq-gsap="onStart" data-iq-position-x="0" data-iq-position-y="150" data-iq-duration="1" data-iq-delay=".6">
                            <a href="movie-details.html" className="btn btn-hover iq-button"><i className="fa fa-play mr-2"
                                aria-hidden="true"></i>Play Now</a>
                        </div>
                    </div>
                    <div className=" col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
                        <a href="video/trailer.mp4" className="video-open playbtn" tabIndex="0">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px"
                            viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                            <polygon class="triangle" fill="none" strokeWidth="7" strokeLinecap="round"
                                strokeLinejoin="round" strokeMiterlimit="10"
                                points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                            <circle class="circle" fill="none" strokeWidth="7" strokeLinecap="round"
                                strokeLinejoin="round" strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3">
                            </circle>
                        </svg>
                            <span className="w-trailor">Watch Trailer</span>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
   </SwiperSlide>
   <SwiperSlide>
        <div className="swiper-slide slide swiper-bg" style={{backgroundImage: "url(" + "images/slider/slider3.jpg" + ")",
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '80vh',
            position: 'relative',}}>
            <div className="container-fluid position-relative h-100">
                <div className="slider-inner h-100">
                    <div className="row align-items-center  h-100 iq-ltr-direction">
                    <div className="col-lg-7  col-md-12">
                        <a href="javascript:void(0);">
                            <div className="channel-logo" data-iq-gsap="onStart" data-iq-position-x="-150" data-iq-position-y="0" data-iq-duration="1" data-iq-delay=".4">
                                <img src="images/logo.png" className="c-logo" alt="streamit" loading="lazy" />
                            </div>
                        </a>
                        <h1 className="slider-text big-title title text-uppercase" data-iq-gsap="onStart" data-iq-position-x="-150" data-iq-position-y="0" data-iq-duration="1" data-iq-delay=".4">Shadow
                        </h1>
                        <div className="d-flex flex-wrap align-items-center r-mb-23"
                            data-iq-gsap="onStart" data-iq-position-x="-150" data-iq-position-y="0" data-iq-duration="1" data-iq-delay=".4">
                            <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3">
                                <ul
                                className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                <li>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star-half" aria-hidden="true"></i>
                                </li>
                                </ul>
                                <span className="text-white ml-2">4.9(lmdb)</span>
                            </div>
                            <div className="d-flex align-items-center mt-2 mt-md-3">
                                <span className="badge badge-secondary p-2">NC-17</span>
                                <span className="ml-3">1hrs : 58mins</span>
                            </div>
                        </div>
                        <p data-iq-gsap="onStart" data-iq-position-x="0" data-iq-position-y="150" data-iq-duration="1" data-iq-delay=".5">
                            A shadow is a dark (real image) area where light from a light source is blocked by an opaque object. It occupies all of the three-dimensional volume behind an object with light in front of it. A shadow is a dark (real image) area where light from a light source is blocked by an opaque object.										
                        </p>
                        <div className="trending-list" data-wp_object-in="fadeInUp" data-delay-in="1.2">
                            <div className="text-primary title starring">
                                Starring: <span className="text-body"><a href="cast-karen-gilchrist.html">Karen Gilchrist, </a>
                                James Earl Jones</span>
                            </div>
                            <div className="text-primary title genres">
                                Genres: <span className="text-body"><a href="category-action.html">Action</a></span>
                            </div>
                            <div className="text-primary title tag">
                                Tag: <span className="text-body"><a href="tags/action.html">Action,</a>
                                <a href="tags/adventure.html">Adventure, </a>
                                <a href="tags/horror.html">Horror </a></span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center r-mb-23" data-iq-gsap="onStart" data-iq-position-x="0" data-iq-position-y="150" data-iq-duration="1" data-iq-delay=".5">
                            <a href="movie-details.html" className="btn btn-hover iq-button"><i className="fa fa-play mr-2"
                                aria-hidden="true"></i>Play Now</a>
                        </div>
                    </div>
                    <div className=" col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
                        <a href="video/trailer.mp4" className="video-open playbtn" tabIndex="0">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px"
                            viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                            <polygon class="triangle" fill="none" strokeWidth="7" strokeLinecap="round"
                            strokeLinejoin="round" strokeMiterlimit="10"
                            points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                            <circle class="circle" fill="none" strokeWidth="7" strokeLinecap="round"
                            strokeLinejoin="round" strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3">
                            </circle>
                        </svg>
                            <span className="w-trailor">Watch Trailer</span>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </SwiperSlide>
    </div>
  </Swiper>
   </>
  )
}

export default Slider