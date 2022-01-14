import React from "react";
import "./VideoItem.css";

class VideoItem extends React.Component {


    onItemClick = () => {

        this.props.onClick(this.props.item);
    };

    render() {
        const {title, thumbnails} = this.props.item.snippet;
        return (


            <div className="item video-item" onClick={this.onItemClick}>
                <img className="ui image item-image" src={thumbnails.medium.url} alt="video" />
                <div className="content">
                    {title}
                </div>
            </div>


        );
    }
}
export default VideoItem;