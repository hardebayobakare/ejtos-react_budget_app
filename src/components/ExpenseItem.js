import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { IoAddCircleSharp } from 'react-icons/io5';
import { TiDelete } from 'react-icons/ti';
import { AiFillMinusCircle } from 'react-icons/ai'

const ExpenseItem = (props) =>{
    const { currency, dispatch } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: props.id,
        });
    }
    
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: "RED_EXPENSE",
            payload: expense
        });

    }
    const addStyle = {color: 'green', fontSize:'2em'};
    const minusStyle = {color: 'red', fontSize:'2em'}
    return (
        <tr id={props.id}>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><IoAddCircleSharp style={addStyle} onClick={event => increaseAllocation(props.name)}>+</IoAddCircleSharp></td>
            <td><AiFillMinusCircle style={minusStyle} onClick={event => decreaseAllocation(props.name)}>+</AiFillMinusCircle></td>
            <td><TiDelete onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    )
}

export default ExpenseItem;