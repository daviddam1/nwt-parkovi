import React from "react";

import Header from "./components/header";
import Body from "./components/body";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Body/>
      </div>
    )
  }

}


export default App