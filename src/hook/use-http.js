import { useState,useCallback } from 'react';

const useHttp = ( ) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const sendRequest = useCallback(async (requestConfig,applyData) => {
        setIsLoading(false);
        setError(null);
    
        try {
            const response = await fetch(
                requestConfig.url, {
                    method: requestConfig.method ? requestConfig.method:'GET',
                    header: requestConfig.header ? requestConfig.header:{},
                    body: requestConfig.body ? JSON.stringify(requestConfig.body):null,
              }
          );
    
          if (!response.ok) {
            throw new Error('Request failed')
          }
            const data = await response.json();
            applyData(data);
        

    
        } catch (err) {
          setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    },[]);
    
    return {
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest
    };
    
 };

export default useHttp;