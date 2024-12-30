import React from 'react';
import Movies from '@/mocks/movies.json';
import Genres from '@/mocks/genres.json';
import  { FeaturedMovie }  from '@/components/featured_movie';
import { Categories } from '@/components/categories';
import { MoviesSection } from '@/components/movies_section';

function HomeContainer(){
    return (
        <div>
            <FeaturedMovie movie={Movies.results[0]} />
            <Categories categories={Genres.genres.slice(0, 6)}/>
            <MoviesSection title="Popüler Filmler" movies={Movies.results.slice(0,6)} /> 
        </div>
       
   ); 
}

export default HomeContainer;