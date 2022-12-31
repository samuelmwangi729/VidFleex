import axios from 'axios'
import React,{useState,useEffect} from 'react'

const Featured = () => {
   const [loading,isLoading] = useState(true)
   const [movie,setMovie] = useState([])
   const getFeatured = async () =>{
      await axios.get("/MoY").then((response)=>{
         setMovie(response.data)
         isLoading(false)
      })
   }
   useEffect(()=>{
      getFeatured()
   },[])
  return (
    <>
    <section id="parallex" class="parallax-window row-fluid" style={{marginTop:-150,
      backgroundImage:`url(${movie.Banner})` ,
      backgroundPosition: 'top right',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position: 'relative', 
   }}>
      {loading ? (
         <h4>Loading Movie of the Year</h4>
      ) : (
         <div class="container-fluid h-100">
            <div class="row align-items-center justify-content-center h-100 parallaxt-details">
               <div class="col-xl-5 col-lg-12 col-md-12 r-mb-23">
                  <div class="text-left">
                     <a href="javascript:void(0);">
                     <img src={movie.Image} loading="lazy" class="img-fluid" alt="bailey"/>
                     </a>
                     <div class="parallax-ratting d-flex align-items-center mt-3 mb-3">
                        <ul
                           class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                           <li><a href="javascript:void(0);" class="text-primary"><i class="fa fa-star"
                              aria-hidden="true"></i></a></li>
                           <li><a href="javascript:void(0);" class="pl-2 text-primary"><i class="fa fa-star"
                              aria-hidden="true"></i></a></li>
                           <li><a href="javascript:void(0);" class="pl-2 text-primary"><i class="fa fa-star"
                              aria-hidden="true"></i></a></li>
                           <li><a href="javascript:void(0);" class="pl-2 text-primary"><i class="fa fa-star"
                              aria-hidden="true"></i></a></li>
                        </ul>
                        <span class="text-white ml-3">{movie.StarRatings} (lmdb)</span>
                     </div>
                     <div class="movie-time d-flex align-items-center mb-3 iq-ltr-direction">
                        <div class="badge badge-secondary mr-3">{movie.CoR}</div>
                        <h6 class="text-white">
                        {Math.floor(movie.MovieLength/60)} 
                        {Math.floor(movie.MovieLength/60)==1 ? ( " Hr ") : (" Hrs ")} 
                        {Math.floor(movie.MovieLength%60)} Mins
                        </h6>
                     </div>
                     <h4 class="iq-title mb-2">
                        Movie of the year 
                     </h4>
                     <p class="iq-title-desc mb-5">
                        {movie.Description}
                     </p>
                     <div class="parallax-buttons">
                        <a href="movie-details.html" class="btn btn-hover"><i class="fa fa-play mr-1"
                           aria-hidden="true"></i>Play Now</a>
                     </div>
                  </div>
               </div>
               <div class="col-xl-7 col-lg-12 col-md-12 mt-5 mt-xl-0">
                  <div class="parallax-img">
                     <a href="movie-details.html">
                     <img src={movie.Banner} class="img-fluid w-100" loading="lazy" alt="bailey" style={{
                     }}/>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      )}
         </section>
    </>
  )
}

export default Featured