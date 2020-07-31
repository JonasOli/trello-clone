import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyle from "../GlobalStyle";
import { TaskPage } from "../Pages/TasksPage";
import { Header } from "./styles";

const App = () => {
  return (
    <div className="app-container">
      <GlobalStyle />
      <Header>
        <h1>Trello clone</h1>
      </Header>
      <BrowserRouter>
        <Route path="/" exact component={TaskPage}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
