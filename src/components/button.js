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
            const superHeroSelect = Math.floor(Math.random() * 732);

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