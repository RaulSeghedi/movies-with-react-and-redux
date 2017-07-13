import React, {Component} from 'react';
import {connect} from 'react-redux';
import './movieDetail.css';

class MovieDetail extends Component {
    render() {
        if (!this.props.movie) {
            return <p>Select a movie for more details ...</p>
        }
        return (
            <div className="movieDetail">
                <div className="title">{this.props.movie.title}</div>
                <div className="details">Genre: {this.props.movie.genre}</div>
                <div className="details">Year: {this.props.movie.year}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movie: state.activeMovie
    }
};

export default connect(mapStateToProps)(MovieDetail);