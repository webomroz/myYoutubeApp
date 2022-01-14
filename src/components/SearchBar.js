import React from "react";


class SearchBar extends React.Component {
    state = {term: ""};

    onInputChange = (e) => {
        this.setState({term: e.target.value});
    };

    onFormSubmit = (e) => {
        e.preventDefault();

    };

    render() {

        return (

            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label>Vidoe Search</label>
                    <input type="text" value={this.state.term} onChange={this.onInputChange} />
                </form>
            </div>
        );
    }
}
export default SearchBar;