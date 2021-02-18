import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Login from "./routes/Login";
import MyPage from "./routes/MyPage";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" exact={true} component={About} />
    <Route path="/movie/:id" component={Detail} />
    <Route path="/login" exact={true} component={Login} />
    <Route path="/mypage" exact={true} component={MyPage} />
  </HashRouter>
}

export default App;