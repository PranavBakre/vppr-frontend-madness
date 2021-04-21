import { useAuthContext } from "context/auth-context";
import { useEffect } from "react";
import "./App.css";
function App() {
  const { dispatch } = useAuthContext();
  useEffect(() => {
    dispatch({ type: "REFRESH" });
  }, []);
  return (
    <div className="app">
      <div className="content"></div>
    </div>
  );
}

export default App;
