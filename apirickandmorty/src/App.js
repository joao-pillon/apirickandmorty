import "./App.css";

import Characters from "./components/Characters/";
import { Component } from "react";

class App extends Component {

  state = {
    characters: [],
  };

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        return response.json()
      })
      .then((response) => this.setState({ characters: response.results}))
      .catch( error => console.log("Error"))
  }

  render() {
    const { characters } = this.state;

    return (
      <div className="App">
        <section className="App-header">
          {<Characters chars={characters}> </Characters>}
        </section>
      </div>
    );
  }
}

export default App;
