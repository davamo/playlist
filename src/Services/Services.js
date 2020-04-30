import { useState, useEffect } from "react";

const  useFetch = url => {
    const [result, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function fetchUrl() {
          const response = await fetch(url);
          const json = await response.json();
          setData(json);
          setLoading(false);
        }
        fetchUrl();
      }, [url]);


    return [result, loading];
}


export { useFetch };