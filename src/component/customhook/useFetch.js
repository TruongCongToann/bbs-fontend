import axios from "axios";
import { useEffect, useState } from "react";

//fetch all data
const useFetch = (URL = "", params = {}) =>{
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
  
    const [shouldRefetch, refetch] = useState({}); 
    const refresh = () => refetch({});
  
    useEffect(() => {
      let isSubscribe = true;
      (async function fetchData() {
        try {
          const response = await axios.get(URL,params);
          if (isSubscribe && response.status === 200) {
            setData(response.data || null);
          }
        } catch (error) {
          console.log(error);
        } finally {
          isSubscribe && setIsLoading(false);
        }
      })();
      return () => (isSubscribe = false);
    }, [shouldRefetch]);
    return { isLoading, data,refresh };
  }

  //get data by id
  const getDataById = async (urlIn,inputId) =>{
    let url = `${urlIn}${inputId}`;
    return  axios.get(url);  
  }
 
 
  export {useFetch,getDataById}