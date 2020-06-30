import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';


export default function SearchDialog({handleClose,open,setSearchedM,setSearchedT}) {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [value ,setValue] = useState("")

  const getSearchedMovies = async ()=>{
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=86a274921fe8615758cfebdfc9cfa390&language=en-US&query=${value}&page=1&include_adult=false`)
    .then(resp => resp.json())
    .then(data => setSearchedM(data.results.slice(0,10)))
    .catch(err=>{
        console.log(err)
    })
  }
  const getSearchedShows = async ()=>{
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=86a274921fe8615758cfebdfc9cfa390&language=en-US&query=${value}&page=1&include_adult=false`)
    .then(resp => resp.json())
    .then(data => setSearchedT(data.results.slice(0,10)))
    .catch(err=>{
        console.log(err)
    })
  }
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Search for your movie or tv-show here !"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Movie/TV-Show"
            type="text"
            fullWidth
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{handleClose();getSearchedMovies();getSearchedShows()}} color="primary" autoFocus>
            <Link to="/search/">Search</Link>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
