import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
    const { dispatch } = useContext(AppContext);
      const changeCurrency = (val)=>{
              dispatch({
                  type: 'CHG_CURRENCY',
                  payload: val,
              })
      }
      
    return (
            <div className='alert alert-success'>
                <select className='alert alert-success' placeholder="Currency (Pound)" name="Location" id="Location" onChange={event=>changeCurrency(event.target.value)}>
                    <option value="£">£ Pound</option>
                    <option value="$">$ Dollar</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Rupee</option>
                    <option value="CAD">Canada(CAD)</option>
                </select>
            </div>	

      );
  };
export default Location;

{/* <select className='alert alert-success' placeholder="Currency (Pound)" name="Location" id="Location" onChange={event=>changeCurrency(event.target.value)}>
<option value="$">$ Dollar</option>
<option value="£">£ Pound</option>
<option value="€">€ Euro</option>
<option value="₹">₹ Rupee</option>
<option value="CAD">Canada(CAD)</option>
</select> */}