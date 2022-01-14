import React from "react";

const VideoDetail = ({video}) => {
    // Props argumenti pass eder iken destructuring object ile yapmak harika...

    if (!video) {
        return (
            <div className="ui segment">
                <div className="ui active ">
                    <div className="ui text loader">Loading...</div>
                </div>
            </div>
        );

    }
    return (
        <div>
            <div className="ui embed">
                <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} title="Youtube Video Player">

                </iframe>

            </div>
            <div className="ui segment">
                <h4 className="ui header"> {video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    );
};

export default VideoDetail;