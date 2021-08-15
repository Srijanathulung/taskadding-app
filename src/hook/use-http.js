import { useState } from 'react';

const useHttp = (requestConfig, applyData) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const sendRequest = async (taskText) => {
        setIsLoading(false);
        setError(null);
    
        try {
            const response = await fetch(
                requestConfig.url, {
                    method: requestConfig.method,
                    header: requestConfig.header,
                    body: JSON.stringify(requestConfig.body)
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
    };
    
    return {
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest
    };
    
 };

export default useHttp;