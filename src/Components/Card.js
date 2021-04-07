import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CallToActionOutlinedIcon from '@material-ui/icons/CallToActionOutlined';

import { v4 as uuidv4 } from "uuid";

import Ingredients from './Ingredients'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 550,
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  actionArea: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({recipe}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const {label, image,  ingredients,  calories, totalNutrients, url} = recipe.recipe

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

<Card  className={classes.root}>
<CardActionArea  className={classes.actionArea} aria-label="website"  href={url} target="_blank" rel="noopenernoreferrer">


      <CardHeader title={label} />
      <CardMedia  className={classes.media} image={image} title={label} />
      </CardActionArea>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">  Calories: {calories.toFixed().replace(/\B(?=(\d{3})+(?!\d))/, ",")} </Typography>
        <Typography variant="body2" color="textSecondary" component="p">  Carbohydrates:  {totalNutrients.CHOCDF.quantity.toFixed()}g</Typography>
        <Typography variant="body2" color="textSecondary" component="p">  Protein:  {totalNutrients.PROCNT.quantity.toFixed()}g</Typography>
        <Typography variant="body2" color="textSecondary" component="p">  Fats:  {totalNutrients.FAT.quantity.toFixed()}g</Typography>
      </CardContent>

      <CardActions disableSpacing>

      <IconButton aria-label="website"  href={url} target="_blank" rel="noopenernoreferrer">
        
         <CallToActionOutlinedIcon   />

       </IconButton>

        <IconButton
          className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}
          
          onClick={handleExpandClick}aria-expanded={expanded} aria-label="show more"
        >
          <ExpandMoreIcon />


        </IconButton>
      </CardActions>


      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>

          <Typography paragraph> <Ingredients ingredients= {ingredients} /></Typography>
          
        </CardContent>
      </Collapse>

    </Card>


  );
}
