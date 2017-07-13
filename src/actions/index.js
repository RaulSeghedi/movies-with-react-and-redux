export const selectMovie = movie => {
    // console.log('You selected: ', movie.title);
    return {
        type: 'MOVIE_SELECTED',
        payload: movie
    }
}
