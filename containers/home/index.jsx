import React from 'react';
import Movies from '@/mocks/movies.json';
import Genres from '@/mocks/genres.json';
import { FeaturedMovie } from '@/components/featured_movie/index';
import { Categories } from '@/components/categories';
import { MoviesSection } from '@/components/movies_section';

function HomeContainer({selectedCategory}){

    return (
        <div>
            <FeaturedMovie movie={Movies.results[0]} />
            <Categories categories={Genres.genres.slice(0, 6)}/>
           {selectedCategory.movies.lenght > 0 && (
            <MoviesSection title="Category" movies={selectedCategory.movies} /> 
           )}
            
            <MoviesSection title="Popüler Filmler" movies={Movies.results.slice(0,6)} /> 
            <MoviesSection title="Favorilerin" movies={Movies.results.slice(6,13)} /> 
        </div>
   ); 
   
}

export default HomeContainer;