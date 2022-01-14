import axios from "axios";


const KEY = "AIzaSyD3ixhs_i_rsmdn2oFtN0C7EQTAc0jrQl4";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,

    }
});