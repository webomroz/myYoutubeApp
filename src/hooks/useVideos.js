import {useEffect, useState} from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {

    const [items, setItems] = useState([]);

    const search = async (term) => {
        const res = await youtube.get("/search", {
            params: {
                q: term,

            }
        });
        setItems(res.data.items);


    };
    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    return [items, search];
};

export default useVideos;