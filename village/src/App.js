import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import SmurfNav from "./components/SmurfNav";

const smurfsApi = "http://localhost:3333/smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  getAllSmurfs = () => {
    axios.get(smurfsApi).then(res => {
      this.setState({ smurfs: res.data });
    });
  };

  componentDidMount() {
    this.getAllSmurfs();
  }

  deleteSmurf = id => {
    axios.delete(`${smurfsApi}/${id}`).then(() => this.getAllSmurfs());
  };

  editSmurf = id => {
    this.getAllSmurfs();
    return this.state.smurfs.find(smurf => smurf.id === parseInt(id, 10));
  };


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <SmurfNav />
        <Route
          path="/smurf-form/:id"
          render={props => (
            <SmurfForm
              getAllSmurfs={this.getAllSmurfs}
              editSmurf={this.editSmurf}
              {...props}
            />
          )}
        />
        <Route
          exact={true}
          path="/"
          render={props => (
            <Smurfs
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
