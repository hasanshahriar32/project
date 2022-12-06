import { useEffect, useState } from "react";

const useAdmin = (uid) => {
  const [admin, setAdmin] = useState(false);
  const [loadingAdmin, setLoadingAdmin] = useState(true);
  useEffect(() => {
    if (uid) {
      fetch(
        `https://b612-used-products-resale-server-side-hasanshahriar32.vercel.app/users/admin/${uid}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setAdmin(data.isAdmin);
          //   alert(data.isAdmin);
          setLoadingAdmin(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [uid]);
  return [admin, loadingAdmin];
};

export default useAdmin;
