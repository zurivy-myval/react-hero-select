import React, { useState } from 'react';
import SuperHeroCard from './superherocard';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: 30,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
      fontSize: 18,
      color: '#F3D403',
      borderColor: '#F3D403',
      '&:hover': {
        borderColor: '#F3D403',
        opacity: 0.7,
        textDecoration: 'underline'
     },
    },
    input: {
      display: 'none',
    },
  });

function MarvelButton(props) {
    const { classes } = props;

    const [superHero, setSuperHero] = useState('');
    const [superHeroDetails, setSuperHeroDetails] = useState('');

    function handleClick(e) {
      e.preventDefault();
      setSuperHeroDetails('');
      RandomSuperheroName(0);
    }

    function RandomSuperheroName(counter){
        const superHeroNames = ['Batman', 'Spider-man', 'Black Panther', 'Iron Man', 'Aquaman', 'Batgirl', 'Superman', 'Captain America', 'Captain Marvel', 'Wonder Woman', 'Black Widow', 'Doctor Strange'];
        
        if(counter === 7){
            const superHeroIds = [30, 34, 35, 38, 60, 63, 69, 75, 95, 105, 106, 145, 149, 156, 162, 176, 185, 196, 201, 213, 222, 227, 233, 234, 238, 251, 263, 273, 274, 275, 280, 298, 299, 303, 306, 313, 322, 328, 332, 346, 356, 361, 367, 374, 391, 413, 414, 416, 423, 479, 489, 490, 491, 522, 527, 530, 558, 567, 620, 627, 638, 659, 687, 697, 708, 714, 720, 729];
            const superHeroSelect = superHeroIds[Math.floor(Math.random()*superHeroIds.length)];

            fetch("https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10222158177165164/"+superHeroSelect)
            .then(res => res.json())
            .then(
                (result) => {
                    setSuperHeroDetails(result);
                    setSuperHero('');
                },
                (error) => {
                    console.log(error);
                }
            )
            
        } else {
            setTimeout(function(){
                setSuperHero(superHeroNames[Math.floor(Math.random() * (superHeroNames.length+1))]);
                RandomSuperheroName(++counter);
            },150);
        }
    }
  
    return (
     <div>
        <Button variant="outlined" color="secondary" className={classes.button} onClick={handleClick}>
        Yes, I am!
        </Button><br/>
        {superHero && !superHeroDetails && <span className="superhero-name">{superHero}</span>}
        {superHeroDetails &&
            <SuperHeroCard details={superHeroDetails}/>
        }
      </div>
    );
  }


  export default withStyles(styles)(MarvelButton);