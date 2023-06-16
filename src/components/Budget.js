import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    
    const updateBudget = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        })
    }
    return (<div className='alert alert-secondary'>
        <span>Budget: {currency}<input type="number" value={budget} onChange={event=>updateBudget(event.target.value)}/></span>
    </div>)
}

export default Budget;
