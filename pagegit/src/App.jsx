import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("User not found");
      const data = await response.json();
      setUserData(data);
      setError("");
    } catch (err) {
      setUserData(null);
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>Search GitHub User</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {userData && (
        <div className="user-card">
          <img src={userData.avatar_url} alt="Profile" />
          <div className="info">
            <p><strong>Name:</strong> {userData.name || "N/A"}</p>
            <p><strong>Login:</strong> {userData.login}</p>
            <p><strong>GitHub:</strong> <a href={userData.html_url} target="_blank">{userData.html_url}</a></p>
            <p><strong>Blog:</strong> <a href={userData.blog} target="_blank">{userData.blog || "N/A"}</a></p>
            <p><strong>Location:</strong> {userData.location || "N/A"}</p>
            <p><strong>Email:</strong> {userData.email || "No Email"}</p>
            <p><strong>Followers:</strong> {userData.followers}</p>
            <p><strong>Following:</strong> {userData.following}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
