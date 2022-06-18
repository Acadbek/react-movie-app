import React from "react";
import Movies from "../components/Movies";

export default class Main extends React.Component {
	state = {
		movies: []
	}

	componentDidMount() {
		fetch('http://www.omdbapi.com/?apikey=329ffa13&s=hacker')
			.then((res) => res.json())
			.then(data => this.setState({ movies: data.Search }))
	}

	render() {
		return (
			<div className="container content">
				{this.state.movies.length ?
					<Movies movies={this.state.movies} /> :
					<h5>Loading...</h5>}
			</div>
		)
	}
}