import "./App.css";
import { signInWithGoogle } from "./Firebase";

function App() {
  return (
    <div className="App">
      <button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign In with Google
      </button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img
        src={localStorage.getItem("profilePic")}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://www.google.com/images/srpr/logo11w.png";
        }}
      />
    </div>
  );
}

export default App;
