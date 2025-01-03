'use client';

import React, { useEffect, useState } from 'react';
import MovieContainer from '@/containers/movie';

function MoviePage({ params }) {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetch('/mocks/movies.json')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error loading movies:', error));
  }, []);

  if (!movies || !movies.results) {
    return <div>Filmler yüklenemedi.</div>;
  }

  const movieDetail = movies.results.find(movie => movie.id.toString() === params.id);
 
  if (!movieDetail) {
    return <div>Film bulunamadı.</div>;
  }

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;