import "./App.css";
import Support from "./components/support/support.jsx";
import Login from "./components/login/login.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/mixins/scrollToTop.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Switch>
          <Route path="/" component={Support} exact />
          <Route path="/login" component={Login} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
