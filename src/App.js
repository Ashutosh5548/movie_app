import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import Landing from './pages/landing/landing';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Navbar from './components/navbar/navbar';

function App() {

  

  return (
    <div className="App">
        <Router>
          
            <Routes>
                <Route index element={<div><Navbar /><Landing /></div>}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/movie/:id" element={<div><Header /><Movie /></div>}></Route>
                <Route path="/movies/:type" element={<div><Header /><MovieList /></div>}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
