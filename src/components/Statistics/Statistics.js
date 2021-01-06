import React from 'react';
import PropTypes from 'prop-types';

import './Statistics.css';

export default function Statistics({good, neutral, bad, total, positivePercentage}) {
    return(
        <div>
            <ul className="statistics">
                <li><span>Good</span>: {good}</li>
                <li><span>Neutral</span>: {neutral}</li>
                <li><span>bad</span>: {bad}</li>
                <li><span>Total</span>: {total}</li>
                <li><span>Positive feedback</span>: {positivePercentage}%</li>
            </ul>
        </div>
    );
}


Statistics.defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total:0,
    positivePercentage:0
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral:  PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}