import {useState, useEffect} from 'react';

const useFetch = (url)=>{

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error,setError] = useState(null);

    const abortController = new AbortController();

    useEffect(()=>{
        fetch(url,{signal:abortController.signal})
        .then((res)=>{
            if(!res.ok){
                throw Error('Oops something went wrong!')
            }
            return res.json();
        })
        .then((data)=>{
            setData(data);
            setIsLoading(false);
            setError(false);
        })
        .catch(err=>{
            console.log(err.message);
            if(err.name==='AbortError'){
                console.log('fetch aborted');
                return ()=> abortController.abort();
            }
            else{
                console.log(err);
                setError('Oops something went wrong!');
                setIsLoading(false);
            }
        })
        
    },[url])

    
    return {data, isLoading, error};
}

export default useFetch;