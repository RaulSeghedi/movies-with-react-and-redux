import {combineReducers} from 'redux';
import {movies} from './reducerMovies';
import {activeMovieReducer} from './reducerActiveMovie';

const allReducers = combineReducers({
    movies: movies,
    activeMovie: activeMovieReducer
});

export default allReducers;