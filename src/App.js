import React from "react";
import useLocalStorage from "use-local-storage";

import "./index.css";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <div className="app" data-theme={theme}>
      <div className="login">
        <h1>Welcome</h1>
        <h5>ˈwel-kəm</h5>
        <div className="container">
          <div className="top">
            <i className="fab fa-apple"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter-square"></i>
          </div>

          <p className="divider">
            <span>or</span>
          </p>
          <form>
            <label>E-mail</label>

            <input type="email" placeholder="Enter you email" />
            <label>Password</label>
            <input type="password" placeholder="Enter you password" />
            <div className="remember">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <button>Log in</button>
          </form>

          <div className="bottom">
            <p>Forgot your password?</p>
            <a href="/"> Reset password</a>
          </div>
          <p className="create">Create Account</p>
        </div>
        <div className="theme-toggle">
          {theme === "light" ? (
            <i onClick={switchTheme} class="fas fa-toggle-on"></i>
          ) : (
            <i onClick={switchTheme} class="fas fa-toggle-off"></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
