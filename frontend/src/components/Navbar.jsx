import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand">PrimeTrade</span>
      <div>
        {!token ? (
          <>
            <Link to="/login" className="btn btn-outline-light me-2">
              Login
            </Link>
            <Link to="/register" className="btn btn-outline-light">
              Sign Up
            </Link>
          </>
        ) : (
          <button onClick={logout} className="btn btn-danger">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
