import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <nav>
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
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
