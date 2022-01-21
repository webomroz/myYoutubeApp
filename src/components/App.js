
import React, {useEffect, useState} from "react";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

// const KEY = "AIzaSyD3ixhs_i_rsmdn2oFtN0C7EQTAc0jrQl4";

/* ------- Function-Based App Component--------- */

const App = () => {

    const [selectedItem, setSelectedItem] = useState(null);
    const [items, search] = useVideos("Clash of Clans 2022");// custom Hook

    useEffect(() => {

        setSelectedItem(items[0]);
    }, [items]);


    return (
        <div className="ui container" style={{marginTop: "10px"}}>
            <SearchBar onSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedItem} />
                    </div>
                    <div className="5 wide column">
                        <VideoList items={items} onClick={setSelectedItem} />
                    </div>
                </div>
            </div>
        </div >
    );


};

export default App;