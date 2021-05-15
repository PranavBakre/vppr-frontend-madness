import IndexHeader from "components/Header/IndexHeader";
import { Route } from "react-router";
import Login from "./routes/login";
function Landing() {
  return (
    <>
      <IndexHeader />
      <div className="headerOffset"></div>
      <div className="body">
        <Route path="/login" component={Login} />
      </div>
    </>
  );
}

export default Landing;
