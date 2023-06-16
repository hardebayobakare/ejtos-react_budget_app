import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/* Add Budget component here under */}
                    <div className='col'>
                        <Budget />
                    </div>        

                        {/* Add Remaining component here under */} 
                    <div className='col'>
                        <Remaining />
                    </div>         

                        {/* Add ExpenseTotal component here under */} 
                    <div className='col'>
                        <ExpenseTotal />
                    </div>
                    <div className='col'>
                        <Currency />
                    </div>       
                       
                        {/* Add ExpenseList component here under */}         
                    <div>
                        <ExpenseList />
                    </div>
                        {/* Add ExpenseItem component here under */}        

                        {/* Add AllocationForm component here under */}        
                    <di>
                        <AllocationForm />
                    </di>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
