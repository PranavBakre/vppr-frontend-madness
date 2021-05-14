import IndexHeader from "components/Header/IndexHeader";
import Login from "./routes/login";
function Landing() {
  return (
    <>
      <IndexHeader />
      <div className="headerOffset"></div>
      <div className="body">
        <Login />
      </div>
    </>
  );
}

export default Landing;
