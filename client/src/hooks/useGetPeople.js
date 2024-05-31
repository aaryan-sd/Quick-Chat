import { useState, useEffect } from "react";
import toast from "react-hot-toast";
const baseURL = process.env.BASE_URL;

const useGetPeople = () => {
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getPeople = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://quickchat-ig1q.onrender.com/api/users");

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }
        setPeople(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getPeople();
  }, []);

  return { loading, people };
};

export default useGetPeople;
