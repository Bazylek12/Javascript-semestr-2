import './App.css';
import BoucingBall from './boucing-ball/BoucingBall';
import BoucingBall2 from './boucing-ball-2/BoucingBall2';
import { Outlet } from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function App() {
  return (
    <>
    
    <div className='App-header'>
      <Link to={`/ball`} style={{ textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 280, m: 2 }}>
      <CardActionArea onClick={() => console.log('asd')}>
        <CardMedia
          component="img"
          height="140"
          image="https://media.istockphoto.com/vectors/bouncing-ball-vector-id1335836842?k=20&m=1335836842&s=612x612&w=0&h=sZRVAb_RiRUwbztj2UFPtBKIU2e1RvtIwJkhxAyWpH0="
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Boucing Ball v1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Pierwsze zadanie zaliczeniowe z JS.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>

    <Link to={`/ball2`} style={{ textDecoration: 'none' }}>
      <Card sx={{ Width: 280, m: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cms-assets.tutsplus.com/cdn-cgi/image/width=600/uploads/users/1112/posts/24787/final_image/animate-ball-color.gif"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Boucing Ball v2
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Drugie zadanie zaliczeniowe z JS.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>

    <Link to={`/game-of-life`} style={{ textDecoration: 'none' }}>
      <Card sx={{ Width: 280, m: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://miro.medium.com/max/960/1*HuS0jfHc6D1GI_QljmWQxQ.gif"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Game of life
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Trzecie zadanie zaliczeniowe z JS.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
    </div>
    </>
  );
}

export default App;
