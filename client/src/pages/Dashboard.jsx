import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#667eea,#764ba2)",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          width: "420px",
          borderRadius: "15px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,.2)",
        }}
      >
        <h1>🎉 Welcome</h1>

        <h2>Authentication Successful</h2>

        <p style={{ color: "#555" }}>
          You are successfully logged in.
        </p>

        <button
          onClick={logout}
          style={{
            marginTop: "20px",
            padding: "12px 30px",
            border: "none",
            borderRadius: "8px",
            background: "#667eea",
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;