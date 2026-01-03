import { useState } from "react";
import { loginUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = () => {
    const user = loginUser(email, password);
    if (!user) {
      alert("Invalid credentials");
      return;
    }
    navigate("/dashboard");
  };

  return (
    <div className="auth">
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={submit}>Login</button>
    </div>
  );
}
