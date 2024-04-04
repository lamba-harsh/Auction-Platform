import React, { useState } from 'react'
import './Auction.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const Auction = () => {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //       selectedDate: null
    //     };
    //   }
    const [selectedDate,setSelectedDate]=useState(null);
      const handleDateChange = (date) => {
        setSelectedDate(date);
      };
    
  return (
    <div className="container">
    <div className="login-box">
      <h2>Auction</h2>
      <form action="#">
        <div className="input-box">
          <input type="text" required />
          <label>Product Name</label>
        </div>
        <div className="input-box">
          <input type="text" required />
          <label>Description</label>
        </div>
        <div className="input-box">
       <div className='date'>
<DatePicker 
  selected={selectedDate}
  onChange={handleDateChange}
  dateFormat="MM/dd/yyyy" // Specify date format if needed
  placeholderText="" // Placeholder text when no date is selected
  
  // Other props as needed
/>
              
              <label>Date</label>
              </div>
            </div>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" className="btn">Login</button>
        <div className="signup-link">
          <a href="/">Signup</a>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Auction