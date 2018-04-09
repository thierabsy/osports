import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './styles/index.css';
import Homepage from './components/Homepage';
import Categorie from './components/Categorie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component= { Homepage } />
            <Route path="/categorie" component= { Categorie } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
