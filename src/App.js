import IndexHeader from "components/Header/IndexHeader";
import { useAuthContext } from "context/auth-context";
import { useThemeContext } from "context/theme-context";
import { useEffect } from "react";
import { Switch, Route } from "react-router";
import Landing from "routes/landing";
import "./App.css";

function App() {
  const { dispatch } = useAuthContext();
  const { theme } = useThemeContext();

  useEffect(() => {
    dispatch({ type: "REFRESH" });
  }, [dispatch]);
  return (
    <div className={`app ${theme}`}>
      <Switch>
        <Route path="/" component={Landing}></Route>
      </Switch>
    </div>
  );
}

export default App;
