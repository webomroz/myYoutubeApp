import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({items, onClick}) => {
    const itemsArr = items.map(item => {
        return <VideoItem key={item.id.videoId} item={item} onClick={onClick} />;
    });

    return (
        <div className="ui relaxed divided list">
            {itemsArr}
        </div>
    );
};

export default VideoList;