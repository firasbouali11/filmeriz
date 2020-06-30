import React,{useState} from 'react'
import Grid from '@material-ui/core/Grid';
import { TextField, makeStyles, Button } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));


export default function Contact() {
    const classes = useStyles();
    const [email,setEmail] = useState("")
    const [name,setName] = useState("")
    const [message,setMessage] = useState("")

    const send = ()=>{
        const reqOptions = {
            method:"POST",
            headers : {"Content-Type":"application/json"},
            body: JSON.stringify({name:name,email:email,message:message})
        }
        fetch("http://127.0.0.1:8000/api/contact/",reqOptions)
        .then(data => alert("done"))
        .catch(err => alert(err))

        return false
    }
    return (
        <div>
            <h1 style={{ textAlign: "center", margin: 100 }}>Contact Us</h1>
            <Grid container spacing={3} >
                <Grid item xs={12} md={4} style={{padding:30,textAlign:"center"}}>
                    <div>
                        <IconButton size="medium" style={{color:"red"}}>
                            <EmailIcon style={{fontSize:50}}/>
                        </IconButton>
                        <span className="label">firas.bouali@ieee.org</span>
                    </div>
                    <div>
                        <IconButton size="medium" style={{color:"green"}}>
                            <PhoneAndroidIcon style={{fontSize:50}}/>
                        </IconButton>
                        <span className="label">+216 27866112</span>
                    </div>
                    <div>
                        <p className="label">Social Media</p>
                        <IconButton size="medium" style={{color:"#1867B6"}}>
                            <FacebookIcon style={{fontSize:50}}/>
                        </IconButton>
                        <IconButton size="medium" style={{color:"aqua"}}>
                            <TwitterIcon style={{fontSize:50}}/>
                        </IconButton>
                        <IconButton size="medium" style={{color:"orange"}}>
                            <InstagramIcon style={{fontSize:50}}/>
                        </IconButton>
                    </div>
                 
                </Grid>
                <Grid item xs={12} md={8}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <div style={{ width: "100%" }}>
                            <TextField className="input" required id="email" label="Email" variant="filled" style={{ width: "40%" }} onChange={e=>{setEmail(e.target.value)}}/>
                            <TextField className="input" required id="name" label="Name" variant="filled" style={{ width: "40%" }} onChange={e=>{setName(e.target.value)}} />
                        </div>
                        <div style={{ width: "100%" }}>
                            <TextField required className="input" multiline style={{ width: "80%" }} variant="filled" rows={6} label="Message" onChange={e=>{setMessage(e.target.value)}} />
                        </div>
                        <Button variant="contained" color="primary" style={{marginLeft:20}} onClick={send}>
                            Send
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}
