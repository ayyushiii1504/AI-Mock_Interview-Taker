import { useState, useContext,useEffect } from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";  // import context

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { updateLoginStatus } = useContext(AuthContext);
  useEffect(() => {
      try {
        console.log("Disabling scroll");
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";
    
        return () => {
          console.log("Restoring scroll");
          document.body.style.overflow = originalStyle;
        };
      } catch (error) {
        console.error("Error in useEffect:", error);
      }
    }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(email, password);
      const { userId, token } = response.data;
      localStorage.setItem("userId", userId);
      localStorage.setItem("token", token);
      
      updateLoginStatus();  // <-- Update login state in context
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <form onSubmit={handleSubmit} className="p-12 bg-white shadow-md rounded">
        <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-3 p-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full mb-3 p-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-primary w-full bg-blue-600 text-white p-4 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
