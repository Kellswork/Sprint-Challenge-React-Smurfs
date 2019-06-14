import React, { Component } from "react";
import axios from "axios";

const smurfsApi = "http://localhost:3333/smurfs";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: "",
      isEditMode: false,
    };
    
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    const smurf = this.props.editSmurf(id);
    if (smurf) {
      this.setState({
        name: smurf.name,
        age: smurf.age,
        height: smurf.height,
        isEditMode: true
      });
    } else return null;
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    axios.post(smurfsApi, { ...smurf }).then(() => {
      this.props.getAllSmurfs();
    });

    this.setState({
      name: "",
      age: "",
      height: ""
    });
    this.props.history.push("/");
  };

  updateSmurf = (event) => {
    event.preventDefault();
    const id = this.props.match.params.id
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    axios
      .put(`${smurfsApi}/${id}`, { ...smurf })
      .then(() => this.props.getAllSmurfs());

      this.props.history.push("/");
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.state.isEditMode ? this.updateSmurf : this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">{(this.state.isEditMode) ? 'Update Smurfy' : 'Add to the village'}</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
