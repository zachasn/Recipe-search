import React from 'react';
import { Typography, Stack, Button, Box } from '@mui/material';

const Detail = ( { recipeDetail } ) => {
    
  return (
    <Stack
    gap='60px'
    sx={{
        p: '20px',
        alignItems: 'center',
        flexDirection: {lg: 'row'}
    }}
    >
        {recipeDetail && recipeDetail.recipe && 
        <img className='detail-image' src={recipeDetail.recipe.image} alt={recipeDetail.recipe.label} loading='lazy' />
        }
        <Stack sx={{gap: {lg: '35px', xs: '20px'}}}>
            {recipeDetail && recipeDetail.recipe &&
            <Typography variant='h2'>{recipeDetail.recipe.label}</Typography>
            }
           
            {recipeDetail && recipeDetail.recipe &&
                <Box 
                sx={{
                    bgcolor: '#f9f9f9', 
                    borderRadius: '10px', 
                    p: '20px', 
                    boxShadow: '0 0 10px rgba(0,0,0,0.1)', 
                    width: {lg: '500px', xs: '300px'},
                    height: 'auto',
                }} > 
                    <Typography fontWeight='700' letterSpacing='1px' mb='10px' variant='h6'>
                        Ingridents:
                    </Typography>
                    {recipeDetail.recipe.ingredientLines.map( (ingredient, index) => {
                            return <ul style={{paddingLeft: '30px'}}><li key={index}><span >{ingredient}, </span></li></ul>
                    })}
                    
                    <Typography fontWeight='700' letterSpacing='1px' mt='20px' variant='h6'>
                        Calories: {recipeDetail.recipe.calories.toFixed(0)}
                    </Typography>
                    <Typography fontWeight='700' letterSpacing='1px' mt='20px' variant='h6'>
                        Total Time: {recipeDetail.recipe.totalTime} minutes
                    </Typography>
                    <Typography fontWeight='700' letterSpacing='1px' mt='20px' variant='h6'>
                        Servings: {recipeDetail.recipe.yield}
                    </Typography>
                </Box>  
            }
            {recipeDetail && recipeDetail.recipe &&
                <Stack>
                    <a href={recipeDetail.recipe.url} target='_blank' rel='noreferrer'
                    style={{
                        textDecoration: 'none', 
                        width: '200px', 
                        textAlign: 'center', 
                        background: '#FFDB5C', 
                        padding: '14px', 
                        fontSize: '22px', 
                        textTransform: 'none', 
                        color: 'white', 
                        borderRadius: '4px' 
                    }}>
                        View Recipe
                    </a>
                </Stack>
            }
        </Stack>
        
    </Stack>
  )
}

export default Detail