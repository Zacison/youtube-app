import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: '' };
    }

    onInputChange = (e) => {
        this.setState({ input: e.target.value });
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        //make sure we call the callback from parent component
        this.props.onSearchSubmit(this.state.input);
    };

    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Youtube Video Search</label>
                        <input
                            type="text"
                            onChange={this.onInputChange}
                            value={this.state.input}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;
