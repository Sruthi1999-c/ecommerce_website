import { useState, useEffect } from "react";
import ReactGA from "react-ga4";

const useAPI =(url)=> {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
        ReactGA.event({
            category: "API",
            action: "Fetch Success",
            label: url,
          });
        
      } catch (err) {
        setError(err.message);
        ReactGA.event({
            category: "API",
            action: "Fetch Failed",
            label: url,
            value: err.message,
          });
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useAPI;
