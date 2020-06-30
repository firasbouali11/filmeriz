import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "grey",
    },
    title: {
        flexGrow: 1,
    },
}));

const years = ['1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']

export default function CategoryBar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    // const [anchorEl2, setAnchorEl2] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    // const handleClick2 = (event) => {
    //     setAnchorEl2(event.currentTarget);
    // };

    const handleClose = () => {
        setAnchorEl(null);
        setAnchorEl1(null);
        // setAnchorEl2(null);
    };


    return (
        <div className={classes.root}>
            <br />
            <br />
            <AppBar style={{ backgroundColor: "pink" }} position="static">
                <Toolbar style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <IconButton aria-controls="genre" aria-haspopup="true" onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        Genre
                    </IconButton>
                    <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick1} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        Year
                    </IconButton>
                    {/* <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        Country
                    </IconButton> */}
                </Toolbar>
            </AppBar>
            <Menu style={{ marginTop: "8%", }}
                id="genre"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <div style={{ display: "flex", flexWrap: "wrap", width: 300 }}>

                    {props.genres.map((data) => (
                        <MenuItem key={data.id} onClick={()=>{handleClose();if(props.change!=null) props.setChange(!props.change)}}><Link style={{textDecoration:"none"}} to={"/movies/"+data.id}>{data.name}</Link></MenuItem>
                    ))}
                </div>

            </Menu>
            <Menu style={{ marginTop: "7%", }}
                id="genre"
                anchorEl={anchorEl1}
                keepMounted
                open={Boolean(anchorEl1)}
                onClose={handleClose}
            >
                <div style={{ display: "flex", flexWrap: "wrap", width: 300 }}>
                    {years.map((data) => (
                        <MenuItem key={data} onClick={handleClose}>{data}</MenuItem>
                    ))}
                </div>

            </Menu>

        </div>
    );
}
export function CategoryBarShows(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    // const [anchorEl2, setAnchorEl2] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    // const handleClick2 = (event) => {
    //     setAnchorEl2(event.currentTarget);
    // };

    const handleClose = () => {
        setAnchorEl(null);
        setAnchorEl1(null);
        // setAnchorEl2(null);
    };


    return (
        <div className={classes.root}>
            <br />
            <br />
            <AppBar style={{ backgroundColor: "pink" }} position="static">
                <Toolbar style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <IconButton aria-controls="genre" aria-haspopup="true" onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        Genre
                    </IconButton>
                    <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick1} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        Year
                    </IconButton>
                    {/* <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        Country
                    </IconButton> */}
                </Toolbar>
            </AppBar>
            <Menu style={{ marginTop: "8%", }}
                id="genre"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <div style={{ display: "flex", flexWrap: "wrap", width: 300 }}>

                    {props.genres.map((data) => (
                        <MenuItem key={data.id} onClick={()=>{handleClose();if(props.change!=null) props.setChange(!props.change)}}><Link style={{textDecoration:"none"}} to={"/tv-shows/"+data.id}>{data.name}</Link></MenuItem>
                    ))}
                </div>

            </Menu>
            <Menu style={{ marginTop: "7%", }}
                id="genre"
                anchorEl={anchorEl1}
                keepMounted
                open={Boolean(anchorEl1)}
                onClose={handleClose}
            >
                <div style={{ display: "flex", flexWrap: "wrap", width: 300 }}>
                    {years.map((data) => (
                        <MenuItem key={data} onClick={handleClose}>{data}</MenuItem>
                    ))}
                </div>

            </Menu>

        </div>
    );
}
