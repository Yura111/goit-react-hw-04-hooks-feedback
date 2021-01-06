import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.css'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return(
        <div className="group-button">
            {options.map(({id, type, name}) => (
                <button type="button" key={id} onClick={() => onLeaveFeedback(type)}>{name}</button>
            ))}
        </div>
    );
}

FeedbackOptions.defaultProps = {
    options:[]
}
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired
}
