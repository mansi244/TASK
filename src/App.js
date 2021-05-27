import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Button from "./components/Button";
import DisplayCount from "./components/DisplayCount";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="outerContainer" style={{ float: "left" }}>
          <Button />
        </div>
        <div className="outerContainer" style={{ float: "right" }}>
          <DisplayCount />
        </div>
      </div>
    </Provider>
  );
}

export default App;
