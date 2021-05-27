import React, { Component } from "react";
import "./App.css";
import MainPage from "./components/MainPage";

import { Data } from "./types/types";
interface AppState {
  data: Data[];
}
class App extends Component<{}, AppState> {
  state: AppState = {
    data: [],
  };

  async componentDidMount() {
    const data = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=whatever"
    );
    const response = await data.json();
    console.log(response);
    this.setState({ data: response });
  }
  render() {
    return <MainPage data={this.state.data}></MainPage>;
  }
}

export default App;
