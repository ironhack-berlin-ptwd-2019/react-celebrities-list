import React, { Component } from 'react';

class AddCelebrity extends Component {

  state = {
    name: '',
    popularity: ''
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.onNewCelebrity(this.state)
  }

  // use always to handle "input" fields
  changeHandler = (event) => {
    const inputName = event.target.name
    this.setState({
      [inputName]: event.target.value
    })
  }

  render() {

    return (
      <div >
        <form onSubmit={this.submitHandler}>
          <input name="name"
            placeholder="name"
            onChange={this.changeHandler}
            value={this.state.name} />
          <input name="popularity"
            placeholder="popularity"
            onChange={this.changeHandler}
            value={this.state.popularity} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddCelebrity;
