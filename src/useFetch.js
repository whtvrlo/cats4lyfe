import { useState, useEffect } from "react";
import faker, { fake } from "faker";
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState (true);
    const [ error , setError ] = useState(null)

    useEffect(() => { 
    const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
        .then(res => {
            if (!res.ok){
                throw Error ('Could not fetch the data for that resource')
            }
            return res.json();
        })
        .then(data => {
            // console.log(data) // check if date has been fetched
            setData(data)// is ok to use data again as this one is a local function
            setIsPending(false)
            setError(null);
        })

        .catch (err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted')
            } else {
                setIsPending(false);
                setError(err.message);  
                
            }

        })
        return () => AbortController.abort();

        

    }, [url]);

    return { data , isPending, error }


}

export default useFetch 





// // MY OLD CODE
// import { useState, useEffect } from "react";

// const useFetch = (url) => {
//     const [data, setData] = useState([]);
//     const [isPending, setIsPending] = useState (true);
//     const [ error , setError ] = useState(null)

//     useEffect(() => { 
//     const abortCont = new AbortController();
//         fetch(url, { signal: abortCont.signal })
//         .then(res => {
//             if (!res.ok){
//                 throw Error ('Could not fetch the data for that resource')
//             }
//             return res.json();
//         })
//         .then(data => {
//             console.log(data) // check if date has been fetched
//             setData(data)// is ok to use data again as this one is a local function
//             setIsPending(false)
//             setError(null);
//         })
//         .catch (err => {
//             if (err.name === 'AbortError') {
//                 console.log('fetch aborted')
//             } else {
//                 setIsPending(false);
//                 setError(err.message);  
                
//             }

//         })
//         return () => AbortController.abort();

        

//     }, [url]);

//     return { data , isPending, error }


// }

// export default useFetch 