import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/student");
  };

  return (
    <div>
      <h2>AI Twin Teacher Login</h2>

      <input type="text" placeholder="Username" />
      <br />
      <input type="password" placeholder="Password" />
      <br />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  );
}

export default Login;
