import React from "react";
import { connect } from "react-redux";
import { fetchFox } from '../actions/foxActions';
import './FoxForm.css';

const FoxForm = props => {

    const handleFetchFox = event => {
        event.preventDefault();
        props.fetchFox();

    }
  return (
    <div>
      {props.isFetchingFox ? 
      <p>Loading...</p> : 
      <button className="myButton" onClick={handleFetchFox}>Fetch Fox</button>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isFetchingFox: state.isFetchingFox
  };
};

export default connect(mapStateToProps, {fetchFox})(FoxForm);
