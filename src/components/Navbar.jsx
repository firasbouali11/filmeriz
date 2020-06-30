import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-router-dom';
import Filmreirz from "../assets/Filmreirz.png"
import SearchDialog from "../components/SearchDialog"


function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
   
    

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function Navbar(props) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    return (

        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <div style={{margin:"auto",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Link style={styles.bar} className="bar" to="/" >Home</Link>
                            <Link style={styles.bar} className="bar" to="/movies" >Movies</Link>
                            <Link style={styles.bar} className="bar" to="/tv-shows" >TV-Shows</Link>
                            <img src={Filmreirz} alt="" className="logo" />
                            <Link style={styles.bar} className="bar" to="/about" >About</Link>
                            <Link style={styles.bar} className="bar" to="/contact" >Contact</Link>
                            <Link style={styles.bar} className="bar" onClick={handleClickOpen} >Search</Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <br/>
            <br/>
            <SearchDialog handleClose={handleClose} open={open} setSearchedM={props.setSearchedM} setSearchedT={props.setSearchedT}/>
        </React.Fragment>
    );
}

const styles = {

}
