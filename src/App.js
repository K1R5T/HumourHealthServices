import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ChatBot from './components/ChatBot';
import MentalHealth from './components/MentalHealth';
import PhysicalHealth from './components/PhysicalHealth';
// import SignUp from './components/SignUp';


class App extends Component {
  render(){
    return (
      <div className="App">

      <BrowserRouter>

      <Navbar />

      <Switch>

        <Route path="/" component={Home} exact/>

        <Route path="/chatbot" component={ChatBot}/>

        <Route path='/mentalHealth' component={MentalHealth}/>

        <Route path='/physicalHealth' component={PhysicalHealth}/>

        {/* <Route path='/signup' component={SignUp}/> */}

      </Switch>

      </BrowserRouter>

      </div>
    );
  }
}

export default App;
