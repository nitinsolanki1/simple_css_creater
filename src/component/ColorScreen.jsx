import {useRef} from 'react'

const ColorScreen = () => {

    const screenRef = useRef()
    const titleRef = useRef()
   const handleMove = ()=>{
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    screenRef.current.style.backgroundColor = `rgba(${r},${g},${b},1)`
    titleRef.current.style.color = `rgba(${r},-${g},${b},1)`
    
   }
  return (
    <div ref={screenRef} onMouseMove={handleMove} className='colorScreen'>
        <h1 ref={titleRef}>hello 🖐️</h1>
    </div>
  )
}

export default ColorScreen