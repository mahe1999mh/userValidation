import { useState } from "react";
import "./App.css";
import Signin from "./Signin";
import SignUp from "./Signup";

function App() {
  const [userData, setUserData] = useState([]);
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

      {isSignUpVisible && <SignUp setUserData={setUserData} />}
      {isSignInVisible && <Signin userData={userData} />}
    </div>
  );
}

export default App;
