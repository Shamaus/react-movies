import React from 'react';
import { Movie } from './Movie'

function Movies(props) {
    const { movies = [] } = props;

    return <div className="movies">
        {movies.length ? movies.map(movie => {
            return <Movie key={movie.imdbID} {...movie} />
        }) : <h4>Not found</h4>
        }
    </div>;
}

export { Movies };