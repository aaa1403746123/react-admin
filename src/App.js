import {HashRouter,Switch,Route} from 'react-router-dom'
import React from 'react';
import Home from './views/Home';
import About from './views/About'
import './App.css';

class App extends React.Component{
    constructor(props){
      super(props);
      this.state={};
    }
  render(){
      return(
        <HashRouter>
          <Switch>
            <Route exact component={Home} path='/'></Route>
            <Route exact component={About} path='/about'></Route>
            <Route exact component={News} path='/news'></Route>
          </Switch>
        </HashRouter>
      )  
  }
}

export default App;
