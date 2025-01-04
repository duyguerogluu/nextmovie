import React from 'react';
import { FeaturedMovie } from '@/components/featured_movie/index';

function MovieContainer({ movie }) {
    return (
        <div>
            <FeaturedMovie movie={movie} isCompact={false}/>
         </div>
       
   ); 
}

export default MovieContainer;