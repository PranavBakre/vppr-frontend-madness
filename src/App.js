import IndexHeader from "components/Header/IndexHeader";
import { useAuthContext } from "context/auth-context";
import { useThemeContext } from "context/theme-context";
import { useEffect } from "react";
import "./App.css";

function App() {
  const { dispatch } = useAuthContext();
  const { theme } = useThemeContext();

  useEffect(() => {
    dispatch({ type: "REFRESH" });
  }, [dispatch]);
  return (
    <div className={`app ${theme}`}>
      <div className="content">
        <IndexHeader />
      </div>
    </div>
  );
}

export default App;
