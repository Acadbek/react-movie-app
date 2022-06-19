import React from "react";

export default class Search extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            id="email"
            type="search"
            className="validate"
            placeholder="Search movie" />
        </div>
      </div>
    )
  }
}