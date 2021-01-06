import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

import FeedbackOptions from './../FeedbackOptions/FeedbackOptions';
import Statistics from './../Statistics/Statistics';
import Notification from './../Notification/Notification'

import options from './../../json/options.json';

export default function Section({title="Section Name"}){

    const [state, setState] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    })

    const onLeaveFeedback = (type) => {
        setState(prevState => ({...prevState, [type]:state[type]+1})) 
    }

    const countTotalFeedback = () => {
        const {good, neutral, bad} = state;
        return parseInt(good + neutral + bad);
    }

    const countPositiveFeedbackPercentage = () => {

        const total = countTotalFeedback();
        const { good } = state;
    
        const totslPercentage = 100 / total;
        const percentage = totslPercentage * good;

        return parseFloat(percentage.toFixed(0));
    }


    return(
        <> 
            <h2>{title}</h2>
            <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
            <br/>

            <h2>Statistics</h2>
            { (state.good !== 0 || state.neutral !== 0 || state.bad !== 0) ? 
                <Statistics good={state.good} neutral={state.neutral} bad={state.bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} /> :
                <Notification title="No feedback given" />
                    
            }
        </>
    );
}