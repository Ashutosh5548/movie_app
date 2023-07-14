import React, {useEffect, useState} from "react"
import "../../components/movieList/movieList.css"
import Cards from "../../components/card/card"
import HashLoader from "react-spinners/HashLoader";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import Header from "../../components/header/Header";

const Upcoming = () => {

    const [loading,setLoading] = useState(true);
    const [movieList, setMovieList] = useState([])
    

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
        setTimeout(()=>{
            setLoading(false);
        },1500)
    }, [])

    const [userName, setUserName] = useState("");

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
        if (user) {
            setUserName(user.displayName);
        } else setUserName("");
        console.log({userName});
        });
    },[]);

    return (
        <div>
            
            {    loading?
            <div className="loading">
                <HashLoader
                color={'#F37A24'}
                loading={loading}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
                />
            </div>
            :
            <>
            <Header />
            <div style={{"display":"flex"}}>
                <h2 className="display-name">Welcome {userName}</h2>
                <h2 className="list__title">UPCOMING</h2>
            </div>
            <div style={{"marginBottom":"2%"}} className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        movieList.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
            </div>
        
            <div className="movie__list">
                
                <div className="list__cards">
                    {
                        movieList.map(movie => (
                            <Cards movie={movie} />
                        ))
                    }
                </div>
            </div>
            </>
        }    
        </div>
        
    )
}

export default Upcoming