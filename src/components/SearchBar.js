import React, {useState} from "react";

const SearchBar = ({onSubmit}) => {

    const [term, setTerm] = useState("");

    const onInputChange = (e) => {
        setTerm(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(term);
    };

    return (

        <div className="ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <label>Vidoe Search</label>
                <input type="text" value={term} onChange={onInputChange} />
            </form>
        </div>
    );
};

export default SearchBar;