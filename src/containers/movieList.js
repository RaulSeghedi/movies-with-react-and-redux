import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectMovie} from '../actions/index';
import './movieList.css';

class MovieList extends Component {

    createListItems() {
        return this.props.movies.map((movie) => {
            return <li
                key={movie.id}
                onClick={() => this.props.selectMovie(movie)}
            >
                {movie.title}</li>
        })
    }

    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
};

const matchDispatchToProps = dispatch => {
    return bindActionCreators({selectMovie: selectMovie}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(MovieList);