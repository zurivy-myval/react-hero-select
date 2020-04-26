import React from 'react';

const SuperHeroCard = ({ details }) => {
    
    const { name, image } = details;
    console.log(details);
    return (
     <div className="SuperHeroCard-container">
        <h2>Yes, you are {name}</h2>
        <img src={ image.url} alt="Superhero iamge"/>
     </div>
    );
  }


export default SuperHeroCard;