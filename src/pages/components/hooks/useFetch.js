import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";

const useFetch = (url) => {
  const BaseURL = "https://conduit.productionready.io/api";
  const [isLoading, setIsLoading] = useState(false);
  const [isResponse, setIsResponse] = useState(null);
  const [isErorr, setIsErorr] = useState(null);
  const [options, setOptions] = useState({});
  const [token]=useLocalStorage('token')

  const doFetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  },[]);

  useEffect(() => {
    const requestOptions ={
      ...options,
      ...{
        header: {
          authorization: token ? `Token ${token}` : ''
        }
      }
    }
    if (!isLoading) {
      return;
    }
    axios(BaseURL + url, requestOptions)
      .then((res) => {
        setIsLoading(false);
        setIsResponse(res.data);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsErorr(error.response.data);
      });
  }, [ isLoading, url,options,token]);

  return [{ isResponse, isLoading, isErorr }, doFetch];
};

export default useFetch;
