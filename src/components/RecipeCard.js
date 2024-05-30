import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const RecipeCard = ( { id, recipe }) => {
    //console.log("RecipeCard: ",recipe);
    const {label, image, cuisineType, mealType} = recipe;

    //console.log("RecipeCard: ",label);
    //console.log("RecipeCard  is: ",recipe);
  return (
    <Link className='recipe-card' to={`/recipe/${id}`}>
        <img src={image} alt={label} loading='lazy' />
        <Stack direction='row'>
            <Button sx={{ml: '21px', color: '#fff', backgroundColor: '#75A47F', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
                {cuisineType}
            </Button>
            <Button sx={{ml: '21px', color: '#fff', backgroundColor: '#FFDB5C', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
                {mealType}
            </Button>
        </Stack>
        <Typography ml='21px' color='#000' fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize' fontSize='22px'>
            {label}
        </Typography>
    </Link>

  )
}

export default RecipeCard