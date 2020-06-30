import React from 'react'
import { Grid, makeStyles } from "@material-ui/core"
import Filmreirz from "../assets/Filmreirz.png"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        //   backgroundColor: theme.palette.background.paper,
    },
    listn:{
        textDecoration:"none",
        color:"white"
    }
}));

function Footer() {
    const classes = useStyles();
    return (
        <footer>
            <Grid container spacing={1} >
                <Grid item xs={4} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}  >
                    <div>
                        <img src={Filmreirz} alt="logo" style={{ width: 200, height: 200, borderRadius: "50%" }} />
                    </div>
                    <h1>Discover Movies, TV-Shows & Animes</h1>
                </Grid>
                <Grid item xs={4} style={{ display: "flex", flexDirection: "column"}}  >
                    <h1>Navigate</h1>
                    <List className={classes.root}>
                        <ListItem>
                            <Link to='/movies' className={classes.listn}><ListItemText primary="Movies" /></Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/tv-shows" className={classes.listn}><ListItemText primary="TV-Shows"/></Link>
                        </ListItem>
                        <ListItem>

                            <Link to='/tv-shows/16' className={classes.listn}><ListItemText primary="Animes"/></Link>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={4} style={{ display: "flex",flexDirection:"column"}}  >
                    <h1>Contact</h1>
                    <h3>Email: firas.bouali@ieee.org</h3>
                    <h3>Phone: (+216) 27866112</h3>
                    <div>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon style={{color:"#1867B6",margin:"0 10px"}}/></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" ><InstagramIcon style={{color :"pink",margin:"0 10px"}} /></a>
                        <a href="https:/www.twitter.com" target="_blank" rel="noopener noreferrer" ><TwitterIcon style={{color:"aqua",margin:"0 10px"}} /></a>
                    </div>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer
