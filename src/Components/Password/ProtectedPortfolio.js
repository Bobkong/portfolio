import { useState, useEffect } from "react";
import logo from '../../Assets/logo-page.png';
import arrow from '../../Assets/arrow-right.png';
import Cookies from "js-cookie";

export default function PasswordProtectedRoute({ children }) {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const [hasInput, setHasInput] = useState(false);

  const correctPassword = "LS2025";

  useEffect(() => {
    const auth = Cookies.get("isAuthenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleAccess = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError(false);
      Cookies.set("isAuthenticated", "true", { expires: 1 });
    } else {
      setError(true);
    }
  };

  if (isAuthenticated) {
    return children;
  }

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <img src={logo} style={{
          width: "100px",
          height: "100px"
        }} />

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#212121",
          borderRadius: "99px",
          width: "300px",
          paddingLeft: "20px",
          paddingRight: "10px",
          paddingBlock: "10px",
          marginTop: "2rem",
          height: "40px"
        }}>
          <input
            style={{
              backgroundColor: "transparent",
              fontSize: "16px",
              border: "none",
              color: "#ffffff",
              caret: "#66ffffff",
              outline: "none",
              cursor: "none"
            }}
            type={"password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setHasInput(e.target.value != "")
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAccess();
              }
            }}
          />
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "99px",
            backgroundColor: "#ffffff",
            width: "40px",
            opacity: hasInput ? 1 : 0.5
          }}>
            <img
              src={arrow}
              style={{
                width: "20px",
                height: "20px",
              }}
              onClick={handleAccess}
            />
          </div>

        </div>
        <div className="body-medium" style={{
          marginTop: "1rem",
          opacity: error ? 1 : 0
        }}>
          Incorrect password. Please try again.
        </div>

      </div>
    </div>
  );
}
