import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
});

function CardElement(props) {
  const classes = useStyles();
  return (
    <Link style={{textDecoration:"none",display:"inline-block",margin:7,width:200}} to={"/details/"+props.item.id} onClick={()=>{if(props.changee!=null) props.setChangee(!props.changee)}} >
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          image={props.item.poster_path != null ? `https://image.tmdb.org/t/p/w500${props.item.poster_path}`:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/768px-No_image_available.svg.png"}
        />
        <CardContent>
          <Typography style={{textAlign:"center",color:"grey",fontSize:10}} gutterBottom variant="h6" component="h1">
            {props.item.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}
export function CardElementShows(props) {
  const classes = useStyles();
  return (
    <Link style={{textDecoration:"none",display:"inline-block",margin:7,width:200}} to={"/tdetails/"+props.item.id} onClick={()=>{if(props.changee!=null) props.setChangee(!props.changee)}} >
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          image={props.item.poster_path != null ? `https://image.tmdb.org/t/p/w500${props.item.poster_path}`:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/768px-No_image_available.svg.png"}
        />
        <CardContent>
          <Typography style={{textAlign:"center",color:"grey",fontSize:10}} gutterBottom variant="h6" component="h1">
            {props.item.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}
export default CardElement
