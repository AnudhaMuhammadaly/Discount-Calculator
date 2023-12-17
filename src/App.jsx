
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [amount,setAmount]=useState(0)
  const [discount,setDiscount]=useState(0)

  const[total,setTotal]=useState()

  console.log(amount);
  console.log(discount);

  const calculate=(e)=>{
    const output=amount-(amount*discount/100)
    console.log(output);
    setTotal(output)
  }

  const reset=(e)=>{
    setAmount(0)
    setDiscount(0)
    setTotal(0)
  }


  

  return (
    <div className="App">


      <div className="container">

        <div className="header">
          <h1>DISCOUNT CALCULATOR</h1>
          <p>Calculate Your Discount💸</p>
        </div>

        <div className="form">
          <div className="input">
          <TextField value={amount||""} id="filled-basic" onChange={(e)=>setAmount(e.target.value)} label="Amount"  variant="filled" />
          <br />

          <TextField value={discount||""}  id="filled-basic" onChange={(e)=>setDiscount(e.target.value)}  label="Discount%" variant="filled" />
          <br />
          </div>
         <div className="button">
         <Button variant="outlined" onClick={e=>calculate(e)}  >Calculate</Button>
         <Button variant="outlined" onClick={e=>reset(e)}  >Reset</Button>
         </div>
         <div className="footer">
          <h4>Total Amount : {total}</h4>
         </div>
        </div>


      </div>





    </div>
  );
}

export default App;
