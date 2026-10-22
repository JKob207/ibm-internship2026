import { useState } from "react";

export default function Login({ onSwitch }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Login:", login);
    console.log("Password submitted");

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, password }),
    })
      .then((res) => {
        if (res.ok) {
          //dopisać handling responsu (wyświetlanie dlaczego logowanie się nie powiodło, lub przekierowanie do lobby + zapisywanie w localstorage lub securestore tokena)
        }
      })

    setLogin("");
    setPassword("");
  }

  return (
    <div className="login-container">
      <h2>Log in to your account</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="login">Login</label>
          <input
            id="login"
            type="text"
            placeholder="Enter your name or email"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            autoComplete="email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
          />
        </div>

        <button type="submit">Log In</button>
      </form>

      <p>
        Don't have an account?{" "}
        <button className="switch-button" type="button" onClick={onSwitch}>
          Register
        </button>
      </p>
    </div>
  );
}



