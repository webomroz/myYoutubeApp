import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


// const KEY = "AIzaSyD3ixhs_i_rsmdn2oFtN0C7EQTAc0jrQl4";

class App extends React.Component {

    state = {items: [], selectedItem: null};

    componentDidMount() {
        this.onTermSubmit("clash of clans 2022");
    }

    onTermSubmit = async (term) => {
        console.log(term);
        const res = await youtube.get("/search", {
            params: {
                q: term,

            }
        });

        this.setState({
            items: res.data.items,
            selectedItem: res.data.items[0]
        });
    };
    onItemClick = (video) => {
        this.setState({selectedItem: video});

    };

    render() {
        console.log(this.state.selectedItem);

        return (

            <div className="ui container" style={{marginTop: "10px"}}>
                <SearchBar onSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedItem} />
                        </div>
                        <div className="5 wide column">
                            <VideoList items={this.state.items} onClick={this.onItemClick} />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
export default App;