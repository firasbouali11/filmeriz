import React, { useState, useEffect} from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Movies,{MoviesByGenre,TvShows, ShowsByGenre} from './pages/Movies';
import Details,{TDetails} from './pages/Details';
import Search from './pages/Search';
import Contact from './pages/Contact';

// 86a274921fe8615758cfebdfc9cfa390

function App() {
  const [popular, setPopular] = useState([])
  const [mostWatched, setMostWatched] = useState([])
  const [popularShows, setPopularShows] = useState([])
  const [mostWatchedShows, setMostWatchedShows] = useState([])
  const [movies, setMovies] = useState([])
  const [shows, setShows] = useState([])
  const [i,setI] = useState(1)
  const [searchedM,setSearchedM] = useState([])
  const [searchedT,setSearchedT] = useState([])

  
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=86a274921fe8615758cfebdfc9cfa390&language=en-US&page=1")
      .then(resp => resp.json())
      .then(data => {
        setPopular(data.results)
      })
      .catch(err => console.log(err))

  }, [])
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=86a274921fe8615758cfebdfc9cfa390&language=en-US&page=1")
      .then(resp => resp.json())
      .then(data => {
        setPopularShows(data.results)
      })
      .catch(err => console.log(err))

  }, [])
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=86a274921fe8615758cfebdfc9cfa390&language=en-US&page=1")
      .then(resp => resp.json())
      .then(data => {
        setMostWatched(data.results)
      })
      .catch(err => console.log(err))

  }, [])
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=86a274921fe8615758cfebdfc9cfa390&language=en-US&page=1")
      .then(resp => resp.json())
      .then(data => {
        setMostWatchedShows(data.results)
      })
      .catch(err => console.log(err))

  }, [])
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=86a274921fe8615758cfebdfc9cfa390&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}`)
      .then(resp => resp.json())
      .then(data => {
        setMovies(data.results)
      })
      .catch(err => console.log(err))

    }, [i])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=86a274921fe8615758cfebdfc9cfa390&language=en-US&sort_by=popularity.desc&page=${i}`)
      .then(resp => resp.json())
      .then(data => {
        setShows(data.results)
        console.log(data)
      })
      .catch(err => console.log(err))

  }, [i])

  

  return (
    <div >
      <Navbar setSearchedM={setSearchedM} setSearchedT={setSearchedT} />
      <Switch>
        <Route exact path="/">
            <Home pops={popular} watch={mostWatched} watchshows={mostWatchedShows} popsshows={popularShows} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/movies">
          <Movies movies={movies} setI={setI}/>
        </Route>
        <Route exact path="/tv-shows">
          <TvShows movies={shows} setI={setI}/>
        </Route>
        <Route path="/movies/">
          <MoviesByGenre />
        </Route>
        <Route path="/tv-shows/">
          <ShowsByGenre />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/tdetails">
          <TDetails />
        </Route>
        <Route exact path="/search">
          <Search movies={searchedM} shows={searchedT}/>
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
