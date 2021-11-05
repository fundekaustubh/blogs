import { useEffect, useState } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(true);
    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw new Error("The requested resource could not be found!");
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setPending(false);
                })
                .catch(err => {
                    setError(err.message);
                })
        }, 1000);
        return () => abortCont.abort();
    }, [url])

    return { data, pending, error };
}

export default useFetch;