import React, {Component} from 'react';
import './App.css';
import MovieList from './containers/movieList';
import MovieDetail from './containers/movieDetail';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h3>Movies with React and Redux</h3>
                <hr/>
                <h4>Movies list:</h4>
                <MovieList/>
                <hr/>
                <h4>Movie details:</h4>
                <MovieDetail/>
            </div>
        );
    }
}

export default App;
