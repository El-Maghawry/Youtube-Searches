import React from "react";

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (event) => {
   this.setState({ term: event.target.value})
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="">
              <h3>Video Search</h3>
            </label>
            <input
              type="text"
              value={this.state.term}
              placeholder="E.g. Explore Alternatives"
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
