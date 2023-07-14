import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Movie from './pages/movieDetail/movie';
import Landing from './pages/landing/landing';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Navbar from './components/navbar/navbar';
import Popular from './pages/popular/popular';
import Toprated from './pages/toprated/toprated';
import Upcoming from './pages/upcoming/upcoming';

function App() {

  

  return (
    <div className="App">
        <Router>
          
            <Routes>
                <Route index element={<div><Navbar /><Landing /></div>}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/movie/:id" element={<Movie />}></Route>
                <Route path="/movies/popular" element={<Popular />}></Route>
                <Route path="/movies/upcoming" element={<Upcoming />}></Route>
                <Route path="/movies/top_rated" element={<Toprated />}></Route>
                <Route path="/*" element={<h1 className='appjs-heading'>404 NOT FOUND</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
