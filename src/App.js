import { useState } from "react";
import "./App.css";
import Signin from "./Signin";
import SignUp from "./Signup";

function App() {
  const [isSignUpVisible, setIsSignUpVisible] = useState(true);
  const [isSignInVisible, setIsSignInVisible] = useState(false);
  const showSignUp = () => {
    setIsSignUpVisible(true);
    setIsSignInVisible(false);
  };

  const showSignIn = () => {
    setIsSignInVisible(true);
    setIsSignUpVisible(false);
  };

  return (
    <div className="App">
      <div className="btn">
        <button onClick={showSignIn}>Sign In</button>
        <button onClick={showSignUp}>Sign Up</button>
      </div>

      {isSignUpVisible && <SignUp />}
      {isSignInVisible && <Signin />}
    </div>
  );
}

export default App;
