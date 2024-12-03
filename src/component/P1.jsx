/* eslint-disable react-hooks/rules-of-hooks */
import {useContext} from 'react'
import NoteContext from '../context/NoteContext';


const  P1 = () => {

    let count = useContext(NoteContext);
  return (
    <div>hello count is : {count}</div>
  )
}
export default P1