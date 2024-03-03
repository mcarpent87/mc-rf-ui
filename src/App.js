import "./App.scss";
import Header from "../src/app/components/header";
import OrgSettings from "../src/app/components/orgSettings";

function App() {
  return (
    <div className="App">
      <Header title={"RainFocus Summit"} />
      <OrgSettings />
    </div>
  );
}

export default App;
