import { useState } from 'react'

import './App.css'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
  const [amount, setAmount] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [validamount,setValidamount]=useState(false)
  const [validrate,setValidrate]=useState(false)
  const [validyear,setValidyear]=useState(false)
  const [total,setTotal]=useState(0)
 
  const validInput=(e)=>{
     const {name,value}=e.target

     if(value.match(/^[0-9]*.?[0-9]+$/)){
      if(name=='pamount'){
        setAmount(value)
        setValidamount(true)
      }else if(name=='rate'){
        setRate(value)
        setValidrate(true)
      }else{
        setYear(value)
        setValidyear(true)
      }
     }else{
      if(name=='pamount'){
        setAmount(0)
        setValidamount(false)
      }else if(name=='rate'){
        setRate(0)
        setValidrate(false)
      }else{
        setYear(0)
        setValidyear(false)
      }
     }
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(amount,rate,year)
    const t=(amount*rate*year)/100
    setTotal(t)
  }
 const resetform=()=>{
  setTotal(0)
  setAmount(0)
  setRate(0)
  setYear(0)
  setValidamount(false)
  setValidrate(false)
  setValidyear(false)
 }
  
  return (
    <>
    <div className='bg-dark w-100 d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
       <div className='w-50 bg-light border rounded p-5'>
          <h5>Simple Interest Calculator</h5>
          <div style={{backgroundColor:'yellow', width:'100%'}} className='text-center border rounded p-5 shadow'>₹ {total}</div>
          <form action='' onSubmit={(e)=>{handleSubmit(e)}} className='mt-5'>
              <div className='mt-2'>
               <TextField name='pamount' style={{width:"100%"}} onChange={(e)=>{validInput(e)}} id="outlined-basic" label="₹ Principle amount" variant="outlined" /> 
               {
                !validamount &&
                <div className='text-danger'>
                  Invalid principle amount
                </div>
               }
              </div>
              <div className='mt-2'>
               <TextField name='rate' style={{width:"100%"}} onChange={(e)=>{validInput(e)}} id="outlined-basic" label="% Rate of Interest" variant="outlined" /> 
               {
                 !validrate &&
                 <div className='text-danger'>
                   Invalid rate
                 </div>
               }
              </div>
              <div className='mt-2'>
               <TextField name='year' style={{width:"100%"}} onChange={(e)=>{validInput(e)}} id="outlined-basic" label="Number of Years" variant="outlined" /> 
               {
                !validyear &&
                <div className='text-danger'>
                  Invalid year
                </div>
               }
              </div>
              <Stack className='mt-3' spacing={2} direction="row">
             <Button type='submit' disabled={validamount && validrate && validyear ? false:true} variant="contained" style={{width:"50%"}}>Submit</Button>
             <Button type='reset' onClick={resetform} variant="outlined" style={{width:"50%"}}>Reset</Button>
           </Stack>
          </form>
       </div>
    </div>
    </>
  )
}

export default App
