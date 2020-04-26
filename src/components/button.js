import React, { useState } from 'react';
import SuperHeroCard from './superherocard';

function MarvelButton() {
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

            setSuperHero('');

            fetch("https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10222158177165164/"+superHeroSelect)
            .then(res => res.json())
            .then(
                (result) => {
                    setSuperHeroDetails(result);
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
         
        <a href="#test" className="superhero-btn" onClick={handleClick}>
            Yes, I am!
        </a><br/>
        {superHero && !superHeroDetails && <span className="superhero-name">{superHero}</span>}
        {superHeroDetails &&
            <SuperHeroCard details={superHeroDetails}/>
        }
      </div>
    );
  }


export default MarvelButton;