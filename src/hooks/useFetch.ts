import { useEffect, useState } from 'react'
import properties from '../properties.json'
interface IResponseData {
    [key: string]: any,
};

interface IErrorData {
    error: string;
};

interface IHookResult {
    loading: boolean;
    data: IResponseData | null;
    error: string | null;
    postRequest?: (url: string, data: any) => Promise<void>;
    putRequest?: (url: string, data: any) => Promise<void>;
};

const removeNullParams = (params: any) => {
  Object.keys(params).forEach((key) => params[key] === null && delete params[key]);

    return params
}

export const useGet = (url: string, params?: any, condition?: any): IHookResult => {
    const [loading, setIsLoading] = useState(false);
    const [data, setResponseData] = useState<IResponseData | null>(null);
    const [error, setError] = useState<string | null>(null);

    const getParams = () => params ? `?${new URLSearchParams(removeNullParams(params))}` : ''

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
        setIsLoading(true);

        try {
            const response = await fetch(`${properties.baseURL + url}${getParams()}`);

            if (!response.ok) {
            const errorData: IErrorData = await response.json();
            throw new Error(errorData.error);
            }

            const responseData: IResponseData = await response.json();
            setResponseData(responseData);
            setError(null);
        } catch (error:any) {
            setError(error.message);
            setResponseData(null);
        } finally {
            setIsLoading(false);
        }
        };

        fetchData();
    }, [url, condition]);

    return { loading, data, error };
};

  
export const usePost = (): IHookResult => {
    const [loading, setIsLoading] = useState(false);
    const [data, setResponseData] = useState<IResponseData | null>(null);
    const [error, setError] = useState<string | null>(null);
  
    const postRequest = async (url: string, data: any): Promise<void> => {
      setIsLoading(true);
  
      try {
        const response = await fetch(`${properties.baseURL + url}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (!response.ok) {
          const errorData: IErrorData = await response.json() as IErrorData;
          throw new Error(errorData.error);
        }
  
        const responseData: IResponseData = await response.json();
        setResponseData(responseData);
        setError(null);
      } catch (error:any) {
        setError(error.message);
        setResponseData(null);
      } finally {
        setIsLoading(false);
      }
    };
  
    return { loading, data, error, postRequest };
  };


  export const usePut = (): IHookResult => {
    const [loading, setIsLoading] = useState(false);
    const [data, setResponseData] = useState<IResponseData | null>(null);
    const [error, setError] = useState<string | null>(null);
  
    const putRequest = async (url: string, data: any): Promise<void> => {
      setIsLoading(true);
  
      try {
        const response = await fetch(`${properties.baseURL + url}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (!response.ok) {
          const errorData: IErrorData = await response.json() as IErrorData;
          throw new Error(errorData.error);
        }
  
        const responseData: IResponseData = await response.json();
        setResponseData(responseData);
        setError(null);
      } catch (error:any) {
        setError(error.message);
        setResponseData(null);
      } finally {
        setIsLoading(false);
      }
    };
  
    return { loading, data, error, putRequest };
  };