import { useEffect } from "react";
import { useState } from "react";

const useToken = (uid) => {
  const [token, setToken] = useState();
  useEffect(() => {
    if (uid) {
      fetch(
        ` https://b612-used-products-resale-server-side-hasanshahriar32.vercel.app/jwt?uid=${uid}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            // localStorage.setItem("token", data.accessToken);
            // setToken(data.accessToken);
            console.log(data);
            localStorage.setItem("token", data.token);
            setToken(data.token);
          } else {
            localStorage.setItem("token", "not found");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [uid]);
  return [token];
};
export default useToken;
