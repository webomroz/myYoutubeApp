import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
    const items = props.items.map(item => {
        return <VideoItem key={item.id.videoId} item={item} onClick={props.onClick} />;
    });

    return (
        <div className="ui relaxed divided list">
            {items}
        </div>
    );
};

export default VideoList;