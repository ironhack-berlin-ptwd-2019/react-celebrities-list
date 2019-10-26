import React, { Component } from 'react';
import CelebrityCard from './CelebrityCard'

import contacts from '../contacts.json'

import _ from "lodash"
import AddCelebrity from './AddCelebrity';

class CelebrityList extends Component {

  state = {
    contacts: contacts.slice(0, 5)
  }

  // class property (nice !)
  clickHandler = () => {
    const randomNr = Math.floor(Math.random() * (contacts.length - 1))
    const randomOne = contacts[randomNr]

    this.setState({
      // contacts: this.state.contacts.concat([randomOne])
      contacts: [randomOne, ...this.state.contacts]
    })
  }

  deleteHandler = (idx) => {
    this.setState({
      contacts: this.state.contacts.filter((e, i) => i !== idx)
    })
  }

  addCelebrity = (celebrity) => {
    const newArr = [celebrity, ...this.state.contacts]
    this.setState({
      contacts: newArr
    })
  }

  render() {
    return (
      <div >
        <h1>List of Celebrities</h1>
        <button onClick={this.clickHandler}>Add random celebrity</button>
        <AddCelebrity onNewCelebrity={this.addCelebrity} />
        <ul>
          {this.state.contacts.map((contact, idx) => {
            return <CelebrityCard key={idx} {...contact} onDelete={() => this.deleteHandler(idx)} />
          })}
        </ul>
      </div>
    );
  }
}

export default CelebrityList;
