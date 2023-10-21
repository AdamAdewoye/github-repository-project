import { useEffect, useState } from "react";
// import { axiosRequest } from "../helpers/axiosRequest";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const useFetch = (url) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRepo = async () => {
      const token = import.meta.env.VITE_REACT_APP_GITHUB_ACCESS_TOKEN
      try {
        setIsLoading(true);
        const { data } = await axios.get(url, {headers: {Authorization: `token ${token}`}});
        if (data) {
          setData(data);
        }
      } catch (error) {
        if (error.response.status === 404) {
          navigate("/*");
        } else {
          setError(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepo();
    return () => {};
  }, [navigate, url]);

  return { data, error, isLoading };
};

export default useFetch;
