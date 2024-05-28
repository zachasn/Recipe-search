import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const RecipeCard = ( { id, recipe }) => {
    //console.log(recipe);

  return (
    <Link className='recipe-card' to={`/recipe/${id}`}>
        <img src={recipe.image} alt={recipe.label} loading='lazy' />
        <Stack direction='row'>
            <Button sx={{ml: '21px', color: '#fff', backgroundColor: '#75A47F', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
                {recipe.cuisineType}
            </Button>
            <Button sx={{ml: '21px', color: '#fff', backgroundColor: '#FFDB5C', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
                {recipe.mealType}
            </Button>
            {/* <Button sx={{ml: '21px', color: '#fff', backgroundColor: '#FFA07A', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
                <a href={recipe.url} style={{textDecoration: 'none', color: '#fff'}} target='_blank'>Link to recipe</a>
            </Button> */}
        </Stack>
        <Typography ml='21px' color='#000' fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize' fontSize='22px'>
            {recipe.label}
        </Typography>
    </Link>

  )
}

export default RecipeCard