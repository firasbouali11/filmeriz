import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardElement, { CardElementShows } from "../components/CardElement"
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        width: "100%",
        height: 800,
        position: "relative",
        padding: 10
    },
}));

function Details() {
    const [changee,setChangee] = useState(false)
    const classes = useStyles();
    const [movie, setMovie] = useState({})
    const [similar, setSimilar] = useState([])
    const [trailer, setTrailer] = useState({})
    let id = window.location.href.split("/")
    let idd = id[id.length - 1]
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${idd}?api_key=86a274921fe8615758cfebdfc9cfa390&language=en-US`)
            .then(resp => resp.json())
            .then(data => {
                setMovie(data)
            })
            .catch(err => console.log(err))
    }, [idd])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${idd}/videos?api_key=86a274921fe8615758cfebdfc9cfa390&language=en-US`)
            .then(resp => resp.json())
            .then(data => {
                setTrailer(data.results[0])
            })
            .catch(err => console.log(err))
    }, [idd])
    useEffect(() => {
        let id = window.location.href.split("/")
        let idd = id[id.length - 1]
        fetch(`https://api.themoviedb.org/3/movie/${idd}/similar?api_key=86a274921fe8615758cfebdfc9cfa390&language=en-US&page=1`)
            .then(resp => resp.json())
            .then(data => {
                setSimilar(data.results.slice(0,10))
            })
            .catch(err => console.log(err))
    }, [changee])
    return (
        <div>
            <br /><br /><br />
            <Container>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <div className={classes.paper}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" style={{ padding: 10, width: "100%", height: "100%" }} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={8} >
                    <div className={classes.paper}>
                        <h1>Title: {movie.title}</h1>
                        <h3>Release data: {movie.release_date}</h3>
                        <h3>Status: {movie.status} </h3>
                        <h3>Duration: {movie.runtime} min </h3>
                        <h3>Average vote: {movie.vote_average} {movie.vote_average > 7 ? <span style={{color:"yellow",fontSize:22}}>&#9733;</span> : null}</h3>
                        <h3>Overview: {movie.overview}</h3>
                        <h3>Trailer: </h3>
                        {trailer!==undefined ?
                        <iframe title={trailer.key} style={{width:"100%",height:400}} src={`https://www.youtube.com/embed/${trailer.key}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        :<p>No Trailer</p>
                        }
                    </div>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <iframe title={movie.id} src={"https://fsapi.xyz/tmdb-movie/"+movie.id} style={{width:"100%",height:700}} allowFullScreen frameBorder="0"></iframe>
            </Grid>
            <Grid item sm={12} >
                <h1 style ={{textAlign:"center"}}>Similar Movies Or TV-Shows</h1>
                <div style={{textAlign:"center"}}>
                {similar.map(data =>(
                    <CardElement key={data.id} item={data} changee={changee} setChangee={setChangee} />
                ))}
                </div>
            </Grid>
            </Container>
        </div>
    )
}
export function TDetails() {
    const [changee,setChangee] = useState(false)
    const classes = useStyles();
    const [show, setShow] = useState({})
    const [similar, setSimilar] = useState([])
    const [trailer, setTrailer] = useState({})
    let id = window.location.href.split("/")
    let idd = id[id.length - 1]
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${idd}?api_key=86a274921fe8615758cfebdfc9cfa390&language=en-US`)
            .then(resp => resp.json())
            .then(data => {
                setShow(data)
                console.log(data)
            })
            .catch(err => console.log(err))
    }, [idd])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${idd}/videos?api_key=86a274921fe8615758cfebdfc9cfa390&language=en-US`)
            .then(resp => resp.json())
            .then(data => {
                setTrailer(data.results[0])
            })
            .catch(err => console.log(err))
    }, [idd])
    useEffect(() => {
        let id = window.location.href.split("/")
        let idd = id[id.length - 1]
        fetch(`https://api.themoviedb.org/3/tv/${idd}/similar?api_key=86a274921fe8615758cfebdfc9cfa390&language=en-US&page=1`)
            .then(resp => resp.json())
            .then(data => {
                setSimilar(data.results.slice(0,10))
            })
            .catch(err => console.log(err))
    }, [changee])
    return (
        <div>
            <br /><br /><br />
            <Container>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <div className={classes.paper}>
                        <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt="" style={{ padding: 10, width: "100%", height: "100%" }} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={8} >
                    <div className={classes.paper}>
                        <h1>Title: {show.name}</h1>
                        <h3>Release date: {show.first_air_date}</h3>
                        <h3>Status: {show.status} </h3>
                        <h3>Number of episodes: {show.number_of_episodes}</h3>
                        <h3>Number of seasons: {show.number_of_seasons}</h3>
                        <h3>Episode Runtime: {show.episode_run_time} min</h3>
                        <h3>End date: {show.last_air_date}</h3>
                        <h3>Average vote: {show.vote_average} {show.vote_average > 7 ? <span style={{color:"yellow",fontSize:22}}>&#9733;</span> : null}</h3>
                        <h3>Overview: {show.overview}</h3>
                        <h3>Trailer: </h3>
                        {trailer!==undefined ?
                        <iframe title={trailer.key} style={{width:"100%",height:400}} src={`https://www.youtube.com/embed/${trailer.key}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        :<p>No Trailer</p>
                        }
                    </div>
                </Grid>
            </Grid>
            <Grid item sm={12} style={{marginTop:200}} >
                <h1 style ={{textAlign:"center"}}>Similar Movies Or TV-Shows</h1>
                <div style={{textAlign:"center"}}>
                {similar.map(data =>(
                    <CardElementShows key={data.id} item={data} changee={changee} setChangee={setChangee} />
                ))}
                </div>
            </Grid>
            </Container>
        </div>
    )
}

export default Details
