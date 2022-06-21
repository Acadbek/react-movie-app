import React from "react";

export default class Search extends React.Component {
  state = {
    search: 'hacker',
    type: 'all'
  }
  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.searchMovie(this.state.search, this.state.type);
    }
  }
  handleFilter = (e) => {
    this.setState(() => ({ type: e.target.dataset.type }), () => {
      this.props.searchMovie(this.state.search, this.state.type)
      // this.props.searchMovies(this.state.search, this.state.type)
    })
  }
  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            id="search"
            type="search"
            className="validate"
            placeholder="Search movie"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey} />
          <button
            className="waves-effect waves-light btn"
            onClick={(e) => this.props.searchMovie(this.state.search, this.state.type)}>Search</button>
        </div>
        <label>
          <input
            className="with-gap" name="type" type="radio" data-type='all'
            onChange={this.handleFilter} checked={this.state.type === 'all'} />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap" name="type" type="radio" data-type='movie'
            onChange={this.handleFilter} checked={this.state.type === 'movie'} />
          <span>Movies Only</span>
        </label>
        <label>
          <input
            className="with-gap" name="type" type="radio" data-type='series'
            onChange={this.handleFilter} checked={this.state.type === 'series'} />
          <span>Series Only</span>
        </label>
      </div>
    )
  }
}