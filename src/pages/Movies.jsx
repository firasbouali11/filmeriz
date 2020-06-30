import React,{useState,useEffect} from 'react'
import CardElement,{CardElementShows} from '../components/CardElement'
import { Container } from '@material-ui/core'
import CategoryBar, { CategoryBarShows } from "../components/CategoryBar"
import Paginations from '../components/Paginaitons'

function Movies(props) {
    const [moviesGenre,setMoviesGenre] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=86a274921fe8615758cfebdfc9cfa390&language=en-US")
        .then(resp => resp.json())
        .then(data => {
            setMoviesGenre(data.genres)
        })
        .catch(err => console.log(err))
  
    }, [])

    return (
        <div>
            <Container style={{ textAlign: "center" }}>
                <CategoryBar genres={moviesGenre} />
                {props.movies.map(item => (
                    <CardElement item={item} key={item.id} />
                ))}
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Paginations setI={props.setI} />
                </div>
            </Container>
        </div>
    )
}

export function TvShows(props) {
    const [showsGenre,setShowsGenre] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=86a274921fe8615758cfebdfc9cfa390&language=en-US")
        .then(resp => resp.json())
        .then(data => {
            setShowsGenre(data.genres)
        })
        .catch(err => console.log(err))
  
    }, [])

    return (
        <div>
            <Container style={{ textAlign: "center" }}>
                <CategoryBarShows genres={showsGenre} />
                {props.movies.map(item => (
                    <CardElementShows item={item} key={item.id} />
                ))}
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Paginations setI={props.setI} />
                </div>
            </Container>
        </div>
    )
}
export function MoviesByGenre() {
    const [moviesGenre,setMoviesGenre] = useState([])
    const [moviesByGenre, setMoviesByGenre] = useState([])
    const [change,setChange] = useState(true)
    const [i,setI] = useState(1)
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=86a274921fe8615758cfebdfc9cfa390&language=en-US`)
        .then(resp => resp.json())
        .then(data => {
            setMoviesGenre(data.genres)
        })
        .catch(err => console.log(err))
  
    }, [])
    
    useEffect(() => {
        let id = window.location.href.split("/")
        let idd = id[id.length-1]
        let urlapi =`https://api.themoviedb.org/3/discover/movie?api_key=86a274921fe8615758cfebdfc9cfa390&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${i}&with_genres=${idd}`
        fetch(urlapi)
        .then(resp => resp.json())
        .then(data => {
            setMoviesByGenre(data.results)
        })
        .catch(err => console.log(err))
  
    }, [change,i])

    return (
        <div>
            <Container style={{ textAlign: "center" }}>
                <CategoryBar genres={moviesGenre} change={change} setChange={setChange} />
                {moviesByGenre.map(data =>(
                    <CardElement item={data} key={data.id} />
                ))}
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Paginations setI={setI}/>
                </div>
            </Container>
        </div>
    )
}

export function ShowsByGenre() {
    const [showsGenre,setShowsGenre] = useState([])
    const [showsByGenre, setShowsByGenre] = useState([])
    const [change,setChange] = useState(true)
    const [i,setI] = useState(1)
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=86a274921fe8615758cfebdfc9cfa390&language=en-US`)
        .then(resp => resp.json())
        .then(data => {
            setShowsGenre(data.genres)
        })
        .catch(err => console.log(err))
  
    }, [])
    
    useEffect(() => {
        let id = window.location.href.split("/")
        let idd = id[id.length-1]
        let urlapi =`https://api.themoviedb.org/3/discover/tv?api_key=86a274921fe8615758cfebdfc9cfa390&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${i}&with_genres=${idd}`
        fetch(urlapi)
        .then(resp => resp.json())
        .then(data => {
            setShowsByGenre(data.results)
        })
        .catch(err => console.log(err))
  
    }, [change,i])

    return (
        <div>
            <Container style={{ textAlign: "center" }}>
                <CategoryBarShows genres={showsGenre} change={change} setChange={setChange} />
                {showsByGenre.map(data =>(
                    <CardElementShows item={data} key={data.id} />
                ))}
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Paginations setI={setI}/>
                </div>
            </Container>
        </div>
    )
}

export default Movies
