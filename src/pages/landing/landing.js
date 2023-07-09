import React from 'react'
import "./landing.css"
import Navbar from '../../components/navbar/navbar';

function Landing() {
  return (
    <div className="landing">
      <section className="land-wrapper">
        <div className="paddings innerwidth flexcentre land-container ">
            <div className=" land-left">
              <div className="land-title">
                <h1>Welcome ,<br/> To Movie App</h1>
                <div className="flexcolstart land-des">
                  <p className='about'>Dive into a vast collection of movies from various genres, including action, drama, 
                    comedy, thriller, and more.With our user-friendly interface and powerful search functionality, you can 
                    easily find your favorite movies, explore popular releases, and discover hidden gems. Get detailed information
                    about each movie, including ratings, reviews, genre, plot summaries, and trailers. Create
                    your personalized watchlist and keep track of the movies you want to see. Whether you're a casual 
                    movie enthusiast or a dedicated cinephile, our movie app is your go-to platform for all things film.
                    Start your cinematic journey today and immerse yourself in the magic of movies
                  </p>

                </div>
              </div>
            </div>
            <div className="land-right">
              <div className="image-container">
                <img src="https://img.freepik.com/free-vector/movie-theater-signboard-blue_34230-295.jpg?size=338&ext=jpg" alt="" />
              </div>
            </div>
        </div>
      </section>
    </div>  
  )
}

export default Landing