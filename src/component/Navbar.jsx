// import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { add,sub } from '../Redux/counter/counterSlice'

export default function Navbar() {
    const dispatch = useDispatch()
    const counter = useSelector(state=> state.counter.value)
  return (
    <>
    <div>i am navbar : count = {counter}</div>
    <button onClick={()=>dispatch(add())}>add</button>
    <button onClick={()=>dispatch(sub())}>sub</button>
    </>
  )
}
