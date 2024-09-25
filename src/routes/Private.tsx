import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Private = () => {
  const location = useLocation();
  const [user, setUser] = useState<string | null>(localStorage.getItem("user"));

  useEffect(() => {
    const user = localStorage.getItem("user");

    console.log('user', user);

    setUser(user);
  }, [location]);

  return user ? <Outlet /> : <Navigate to="/home" />;
}

export default Private;
