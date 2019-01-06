import React, { Component } from 'react'
import ColorList from './components/ColorList'
import ColorForm from './components/ColorForm'
import ColorMixer from './components/ColorMixer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      colors: [
        { value: '#ff0000', name: 'Red', selected: false },
        { value: '#00ff00', name: 'Green', selected: false },
        { value: '#0000ff', name: 'Blue', selected: false }
      ]
    }
  }

  toggleColor = (index) => {
    const color = this.state.colors[index]
    color.selected = !color.selected
    this.setState({ ...this.state.colors })
  }

  addNewColor = (color) => {
    this.setState({
      colors: [
        ...this.state.colors,
        { ...color, selected: false }
      ]
    })
  }

  render() {
    return (
      <main>
        <div className="jumbotron jumbotron-fluid bg-light text-dark border-bottom">
          <div className="container">
            <h1 className="display-4">Color Mixer React App</h1>
            <p className="lead">Install a JSX syntax highlighter package in your text editor to get started!</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h2 className="h4 text-center mb-4">Colors</h2>
              <ColorList colors={ this.state.colors } toggleColor={ this.toggleColor } />
            </div>
            <div className="col">
              <h2 className="h4 text-center mb-4">Mix Result</h2>
              <ColorMixer colors={ this.state.colors } />
            </div>
            <div className="col-3">
              <h2 className="h4 text-center mb-4">Add a Color</h2>
              <ColorForm handleAddNewColor={ this.addNewColor } />
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default App
