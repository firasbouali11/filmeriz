import React from 'react'
import { Button, Grid } from "@material-ui/core"
import CardElement from "../components/CardElement"
import { Carousel } from '3d-react-carousal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"


export default function Home(props) {
  let slides = [
    <img height={400} src="https://img.aws.la-croix.com/2019/08/23/1201042617/Spider-Man-jamais-separe-copains-Captain-America-Black-Widow-quelques-jours-Disney-Sony-sopposent-modalites-partenariat_0_1399_787.jpg" alt="1" />,
    <img height={400} src="https://static.lpnt.fr/images/2019/03/29/18277055lpw-18277082-article-jpg_6096325_980x426.jpg" alt="2" />,
    <img height={400} src="https://antredeluciole.fr/wp-content/uploads/Ad-Astra.jpg" alt="3" />,
    <img height={400} src="https://i.ytimg.com/vi/8CTjcVr9Iao/maxresdefault.jpg" alt="4" />,
    <img height={400} src="https://photos.tf1.fr/1200/720/naruto-vignette-b-21c2fc-789ba1-0@1x.jpg" alt="5" />
  ];
  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div style={{ marginTop: 50 }}>
      <Grid container spacing={3}>
        <Grid item md={8} style={{ padding: 50 }}>
          <div >
            <Carousel slides={slides} autoplay={true} interval={5000} />
          </div>
          <h1>Most Popular</h1>
          <Slider {...settings}>
            {props.pops.map(data => (
              <CardElement item={data} key={data.id} />
            ))}
          </Slider>

          <div className="more">
            <Link to="/movies"><Button variant="contained">See More</Button></Link>
          </div>
          <h1>Most Watched</h1>
          <Slider {...settings}>
            {props.watch.map(data => (
              <CardElement item={data} key={data.id} />
            ))}
          </Slider>

          <div className="more">
            <Link to="/movies"><Button variant="contained">See More</Button></Link>
          </div>
        </Grid>
        <Grid item md={4} className="tv" >
        <h1 style={{ textAlign:"center" }}>Tv-shows</h1>
          <Grid container style={{textAlign:"center"}}>
            <Grid item md={6}>
              <h3 style={{color:"pink"}}>Popular</h3>
              {props.popsshows.map(data =>(
                <p key={data.id} className="homechoose"><Link to={"tdetails/"+data.id} style={{textDecoration:"none",color:"white"}}>{data.name}</Link></p>
              ))}
            </Grid>
            <Grid item md={6}>
              <h3 style={{color:"pink"}}>Top Rated</h3>
              {props.watchshows.map(data =>(
                <p key={data.id} className="homechoose"><Link to={"tdetails/"+data.id} style={{textDecoration:"none",color:"white"}}>{data.name}</Link></p>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>


    </div>
  )
}
