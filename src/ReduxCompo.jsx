// import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { add,sub } from './Redux/counter/counterSlice'
import P1 from './component/P1'
import Navbar from './component/Navbar'
function ReduxCompo(){
    const dispatch = useDispatch()
    const counter = useSelector((state)=> state.counter.value)
  
    return (
      <>
  
        <h1>Vite + React</h1>
        <div className="card">
  
          <P1/>
          <Navbar/>
          <h6>count is : {counter}</h6>
  
          <button onClick={() => dispatch(add())}>+</button>
          
          <button onClick={() => dispatch(sub())}> -</button>
  
        
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
  
        
  
      </>
    )
  }

export default ReduxCompo