import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("user", JSON.stringify({ name: "John Doe" }));

    navigate("/products");
  }

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      navigate("/products");
    }
  }, [navigate]);

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
