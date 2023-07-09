import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"
import HashLoader from "react-spinners/HashLoader";

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : ""}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
        setTimeout(()=>{
            setLoading(false);
        },1500)
        
    }

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
            <div className="movie__list">
                <h2 className="list__title">{(type ? type : "").toUpperCase()}</h2>
                <div className="list__cards">
                    {
                        movieList.map(movie => (
                            <Cards movie={movie} />
                        ))
                    }
                </div>
            </div>
        }    
        </div>
        
    )
}

export default MovieList