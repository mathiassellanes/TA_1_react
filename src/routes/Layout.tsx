import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");

    setUser(user);
  }, [location]);

  return (
    <div className="layout">
      <nav className="navigation">
        <ul className="list">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {
            user ? (
              <li>
                <Link to="/products">Products</Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )
          }
        </ul>
        {
          user && (
            <button onClick={() => {
              localStorage.removeItem("user");
              setUser(null);

              navigate("/home");
            }}>
              logout
            </button>
          )
        }
      </nav>
      <Outlet />
    </div >
  );
}

export default Layout;
