import React from 'react';
import {connect} from 'react-redux';
import './FoxContainer.css';

const FoxContainer = props => {
    return(
        <div className="fox-container">
            <img src={props.fox} alt="fox" />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        fox: state.fox
    }
}

export default connect(mapStateToProps, {})(FoxContainer);