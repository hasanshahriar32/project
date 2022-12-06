import { useEffect } from "react";
import { useState } from "react";

const useToken = (uid) => {
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (uid) {
      setLoading(true);
      fetch(` https://paradox-pet.vercel.app/jwt?uid=${uid}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            // localStorage.setItem("token", data.accessToken);
            // setToken(data.accessToken);
            console.log(data);
            localStorage.setItem("token", data.token);
            setToken(data.token);
            setLoading(false);
          } else {
            localStorage.setItem("token", "not found");
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [uid]);
  return [token, loading];
};
export default useToken;
