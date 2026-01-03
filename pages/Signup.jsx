import { useState } from "react";
import { signupUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ email: "", password: "", role: "" });
  const navigate = useNavigate();

  const submit = () => {
    if (!form.email || !form.password || !form.role) {
      alert("All fields required");
      return;
    }
    signupUser(form);
    navigate("/login");
  };

  return (
    <div className="auth">
      <h2>Sign Up</h2>
      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password:e.target.value})}/>
      <select onChange={e => setForm({...form, role:e.target.value})}>
        <option value="">Select User Type</option>
        <option value="producer">Producer</option>
        <option value="consumer">Consumer</option>
      </select>
      <button onClick={submit}>Create Account</button>
    </div>
  );
}
