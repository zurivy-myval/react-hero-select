import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    textAlign: 'left',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  media: {
    height: 320,
  },
};

const SuperHeroCard = (props) => {
    
    const { classes } = props;
    const { name, image, biography, appearance } = props.details;

    const aliases = biography.aliases.join(', ');

    console.log(props.details);
    return (
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image.url}
          title="Hero Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography component="p">
            {aliases && <span><strong>Aliases:</strong> {aliases}</span>} {aliases &&  <br/>}
            {appearance.gender && <span><strong>Gender:</strong> {appearance.gender}</span>} {appearance.gender &&  <br/>}
            {appearance.race && <span><strong>Race:</strong> {appearance.race}</span>} {appearance.race &&  <br/>}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    );
  }


  export default withStyles(styles)(SuperHeroCard);