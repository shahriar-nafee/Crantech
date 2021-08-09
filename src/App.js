import React from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Topbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeContext";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Topbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail" component={Detail} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
