import React, { Component } from 'react'
import './App.css'
import Ideas from './Ideas'
import IdeaCard from './ideaCard'
import './ideaCard.css'
import Form from './Form'
// import apiData from './apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }

  // componentDidMount() {
  //   apiData.getAllData()
  //   .then(data => this.setState({
  //     ideas: data.results
  //   }))
  // }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] })
  }

  deleteIdea = (id) => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id != id)
    this.setState({ ideas: filteredIdeas })
  }

  render() {
    return (
      <main className="App">
        <h1>Ideabox</h1>
        <Form addIdea={this.addIdea}/>
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea}/>
      </main>
    )
  }
}

export default App
