import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero">
      <h1>ELECTRONICS ENGINEERS</h1>
      <p>PRACTICE Hardcore HDL Problems</p>
      <Link to="/signup" className="btn">Practice HDL</Link>
    </div>
  );
}
