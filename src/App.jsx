import { useState } from "react";
import { LandingPage } from "./Components/LandingPage";
import { Dashboard } from "./Components/Dashboard";
import "./App.css";

export function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      {login
        ? <Dashboard changePage={() =>{setLogin(false)}} />
        : <LandingPage changePage={() =>{setLogin(true)}} />
      
      }
    </div>
  );
}

export default App;
