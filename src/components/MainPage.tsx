import React, { Component } from "react";
import CardResult from "./CardResult";
import Collection from "./Collection";
import { Data } from "../types/types";

interface MainProps {
  data: Data[];
}
type MyProps = MainProps;
class MainPage extends Component<MainProps> {
  componentDidMount() {
    console.log(this.props.data);
    console.log("this is working");
  }

  render() {
    return (
      <div>
        <Collection></Collection>
      </div>
    );
  }
}

export default MainPage;
