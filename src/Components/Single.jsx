import axios from 'axios'
import React ,{useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import { FacebookShareButton,FacebookIcon,TwitterIcon,TwitterShareButton,LinkedinShareButton,LinkedinIcon,WhatsappShareButton, WhatsappIcon } from 'react-share'
const Single = () => {
    const {movieId} = useParams()
    const currentUrl = window.location.href
    const [details,setDetails] = useState('')
    const [loading,setLoading] = useState(true)
    const [loadingt,setLoadingt] = useState(true)
    const [trailer,setTrailer] = useState([])
    let pUrl = `${"Details/"+movieId}`
    let tUrl = `${"Trailer/"+movieId}`
    const getDetails = async () =>{
      axios.get(pUrl).then((response)=>{
        setDetails(response.data)
        setLoading(false)
      })
    }
    const getTrailer = async ()=>{
      await axios.get(tUrl).then((response)=>{
        setTrailer(response.data)
        setLoadingt(false)
      })
    }
    useEffect(()=>{
      getDetails()
      getTrailer()
    },[])
  return (
    <>
    {loading ? "Loading the Video Details" : (
      <div className="main-content">
         <div className="show-movie">
            <div className="container-fluid" >
               <div className="banner-wrapper overlay-wrapper iq-main-slider" style={{
                    backgroundImage:`url(${details.Banner})`,
                    backdropFilter:'initial',
                    backgroundColor:'red',
                    marginTop:20+"px"
                  }}>
                  <div className="banner-caption">
                     <div className="movie-detail" >
                        <div className="row-fluid">
                           <div className="col-lg-12">
                              <div className="trending-info p-0">
                                 <h1 className="trending-text big-title text-uppercase mt-0">{details.Title}</h1>
                                 <div className="slider-ratting d-flex align-items-center" data-animation-in="fadeInLeft">
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
                                    </ul>
                                    <span className="text-white ml-3">{details.StarRatings} Stars (imdb)</span>
                                 </div>
                                 <ul className="p-0 mt-2 list-inline d-flex flex-wrap movie-content">
                                  {details.Genres.map((item,index)=>(
                                    <li className="trending-list">
                                      <Link to={"/"} className="text-primary title"> {item}</Link>
                                      </li>
                                  ))}
                              </ul>
                                 <div className="d-flex flex-wrap align-items-center text-white text-detail sesson-date">
                                    <span className="p-2" style={{backgroundColor:'red'}}>
                                       {details.CoR}
                                      </span>
                                    <span className="trending-year">Released {details.YoR}</span> 
                                 </div>
                                 <div className="trending-dec">
                                    <p className="m-0">
                                      {details.Description}
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="position-relative">
                        <a href="show-detail.html"
                           className="d-flex align-items-center">
                           <div className="play-button">
                              <i className="ri-play-fill"></i>
                           </div>
                           <h4 className="w-name text-white font-weight-700">
                            Watch  For <br></br>
                            {Math.floor(details.MovieLength/60)}
                                             {Math.floor(details.MovieLength/60) == 1 ? (
                                                " Hr "
                                             ) : (
                                                " Hrs "
                                             )}
                                              {details.MovieLength % 60} Mins                           
                           </h4>
                        </a>
                     </div>
                     <div className="row">
                        <div className="col-12 mt-auto mb-auto">
                           <ul className="list-inline p-0 m-0 share-icons music-play-lists">
                              <li className="share mb-0">
                                 <span><i className="ri-share-fill"></i></span>
                                 <div className="share-box">
                                    <div className="d-flex align-items-center">
                                      <FacebookShareButton url={currentUrl}>
                                        <FacebookIcon size={40}/>
                                      </FacebookShareButton>
                                      <TwitterShareButton url={currentUrl}>
                                        <TwitterIcon  size={40}/>
                                      </TwitterShareButton>
                                      <LinkedinShareButton url={currentUrl}>
                                              <LinkedinIcon  size={40}/>
                                      </LinkedinShareButton>
                                      <WhatsappShareButton url={currentUrl} >
                                        <WhatsappIcon size={40} />
                                      </WhatsappShareButton>
                                    </div>
                                 </div>
                              </li>
                              <li className="mb-0">
                                 <span><i className="ri-heart-fill"></i></span>
                              </li>
                              <li className="mb-0">
                                 <span><i className="ri-add-line"></i></span>
                              </li>
                           </ul>
                           <ul
                              className="p-0 list-inline d-flex flex-wrap align-items-center movie-content movie-space-action flex-wrap iq_tag-list">
                              <li className="text-primary text-lable"><i className="fa fa-tags font-Weight-900"
                                    aria-hidden="true"></i>TAGS:</li>
                                    {details.MovieKeywords.map((item,index)=>(
                                      <li key={index}> 
                                       <Link className='tag-list'>
                                        {item}
                                       </Link>
                                      </li>
                                    ))}
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="trailor-video  text-sm-right p-3  col-md-3 col-12">
                     <a href="#trailer"
                        className="video-open playbtn block-images position-relative playbtn_thumbnail ">
                        <img width="1920" height="1080" src={details.Banner}
                           className="attachment-medium-large size-medium-large wp-post-image" alt={details.Description}  loading="lazy"/>
                            <span className="content btn btn-transparant iq-button">
                           <i className=" mr-2"></i>
                           <span>Trailer Link</span>
                        </span>
                     </a>
                  </div>
               </div>
               <section className="show-movie-section">
                  <div className="trending-custom-tab">
                     <div className="tab-title-info position-relative">
                        <ul className="trending-pills nav nav-pills text-center iq-ltr-direction" role="tablist">
                           <li className="nav-item">
                              <a className="nav-link active show m-0" data-toggle="pill" href="#episodes" role="tab"
                                 aria-selected="true">{details.Title} Cast</a>
                           </li>
                        </ul>
                     </div>
                     <div className="tab-content" id="nav-tabContent">
                        <div id="episodes" className=" tab-pane animated fadeInUp active show">
                           <div className="row episodes list-inline p-0 mb-0 iq-rtl-direction ">
                            {details.Cast.map((item,index)=>(

                              <div className="e-item col-lg-3 col-sm-12 col-md-6 mb-2">
                                 <div className="epi-desc p-3">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                       <span className="text-white rel-date">{item.Role}</span>
                                       <span className="text-primary run-time">{item.Name}</span>
                                    </div>
                                 </div>
                              </div>
                            ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <div className='row' id='trailer'>
                <div className='col-sm-8 text-center offset-sm-2 mb-3'>
                  <h2>Trailer</h2>
                  {loadingt ? "Loading Trailer " : (
                  <iframe width="853" height="480" src={trailer.Link}
                   title={trailer.MovieName} frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>

                    </iframe>
                  )}
                </div>
               </div>
            </div>
         </div>
      </div>
    )}
    </>
  )
}

export default Single