import React from 'react';
import FoxForm from './components/FoxForm';
import FoxContainer from './components/FoxContainer';
import {connect} from 'react-redux';

import './App.css';

const App = props => {
  return (
    <div className="App">
 
       <h1>Let's fetch some FOXES!</h1>
       <FoxForm />
       {props.fox ? <FoxContainer /> : <div></div>}
  
    </div>
  );
}

const mapStateToProps = state => {
  return {
    fox: state.fox
  }
}

export default connect(mapStateToProps, {})(App);
