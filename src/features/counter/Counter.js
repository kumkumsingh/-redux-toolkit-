import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAnAmount } from './counterSlice'

const Counter = ()  =>{
    const dispatch = useDispatch();
    const count = useSelector((state) =>state.counter.count)
  return (
    <>
    <div>{count}</div>
    <button onClick={() =>dispatch(increment())}>+</button>
    <button onClick={() =>dispatch(decrement())}>-</button>
    <button onClick={() =>dispatch(reset())}>reset</button>
    <button onClick={() =>dispatch(incrementByAnAmount(5))}>by amount</button>
    </>
  )
}

export default Counter