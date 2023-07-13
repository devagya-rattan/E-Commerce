import { useEffect, useState } from "react";
import {fetchdata} from "../utils/api"
const useFetch = (endpoint) => {
    const [data, setData] = useState();
    useEffect(() => {
        makeApiCall();
    }, [endpoint]);

    const makeApiCall = async () => {
        const res = await fetchdata(endpoint);
        setData(res);
    };

    return { data };
};
export default useFetch;