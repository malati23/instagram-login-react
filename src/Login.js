import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  // Email/password login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password.trim()
      );
      setLoggedIn(true);
      setUserName(userCredential.user.displayName || userCredential.user.email);
      navigate("/home"); // Redirect after login
    } catch (error) {
      alert(error.message);
    }
  };

  // Logout
  const handleLogout = async () => {
    await signOut(auth);
    setLoggedIn(false);
    setEmail("");
    setPassword("");
    setUserName("");
  };

  // Facebook login
  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setLoggedIn(true);
      setUserName(result.user.displayName || "Facebook User");
      navigate("/home"); // Redirect after login
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-page">
      {/* Left image */}
      <div className="login-left">
        <img
          src="https://apktofu.com/uploads/images/2025/T2-2025/4-2/IGlookup-APK-Mod.jpg"
          alt="Instagram preview"
          className="login-image"
        />
      </div>

      {/* Right login form */}
      <div className="login-right">
        <div className="login-box">
          <h1 className="logo">Instagram</h1>

          {!loggedIn ? (
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Phone number, username or email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="login-btn">
                Log In
              </button>
            </form>
          ) : (
            <div className="welcome-box">
              <h2>Welcome Back!</h2>
              <p>{userName}</p>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}

          <div className="divider">OR</div>

          <button className="facebook-login" onClick={handleFacebookLogin}>
            Log in with Facebook
          </button>

          {!loggedIn && (
            <p className="signup-link">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
