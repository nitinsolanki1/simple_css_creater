import { useEffect, useState } from 'react'

const CardBox = () => {

  let [w, setw] = useState(100)
  let [h, seth] = useState(100)
  let [x, setx] = useState(1)
  let [y, sety] = useState(1)
  let [blue, setblur] = useState(1)
  let [thin, setthit] = useState(1)
  let [radious, setRedious] = useState(1)
  let [color, setColor] = useState("black")
  let [color2, setColor2] = useState("white")
  let [bodyColor, setbodyColor] = useState("")
  
  const [text, settext] = useState(`box shadow : ${x}px ${y}px ${blue}px ${thin}px ${color};
                                          height : ${h}px ;
                                          width: ${w}px ;
                                          background-color : ${color2};
                                          border-radious : ${radious};`)


                                          

      useEffect(()=>{
          settext(`box shadow : ${x}px ${y}px ${blue}px ${thin}px ${color};
                height : ${h}px ;
                width : ${w}px ;
                background-color : ${color2};
                border-radious : ${radious};`)
      },[w,h,x,y,blue,thin.radious,color,color2,bodyColor])

      
  const handelCopy =async()=>{
   await navigator.clipboard.writeText(text)
    alert("text copied")
  }

  return (

    <div className='main'>


      <div className='left'>

        <div className="input-container ">

          <div className='inner-input'>
            <label htmlFor="xref" > {"x side"}</label>
            <input type="range" onChange={(e) => setx(e.target.value)} value={x} min={-50} max={50} />
          </div>


          <div className='inner-input'>
            <label htmlFor="xref" > {"y side"}</label>
            <input type="range" onChange={(e) => sety(e.target.value)} value={y} min={-50} max={50} />
          </div>

          <div className='inner-input'>
            <label htmlFor="thinness" > {"thinness"}</label>
            <input type="range" onChange={(e) => setthit(e.target.value)} value={thin} min={-50} max={50} />
          </div>


          <div className='inner-input'>
            <label htmlFor="blur" > {"blur"} </label>
            <input type="range" onChange={(e) => setblur(e.target.value)} value={blue} min={-50} max={50} />
          </div>

          <div className='inner-input'>
            <label htmlFor="color" > {"shadow color"} </label>
            <input type="color" onChange={(e) => setColor(e.target.value)} value={color} />
          </div>

          <div className='inner-input'>
            <label htmlFor="color" > {"box color"} </label>
            <input type="color" onChange={(e) => setColor2(e.target.value)} value={color2} />
          </div>

          <div className='inner-input'>
            <label htmlFor="color" > {"background color"} </label>
            <input type="color" onChange={(e) => setbodyColor(e.target.value)} value={bodyColor} />
          </div>

          <div className='inner-input'>

            <span className='height'>

            <label htmlFor="height"  > {"height"} </label>
            <input type="number" style={{width:25+'%'}} onChange={(e) => seth(e.target.value)} value={h} />
            </span>
            
              <span className='width'>

            <label htmlFor="width" > {"width"} </label>
            <input type="number" style={{width:25+'%'}}  onChange={(e) => setw(e.target.value)} value={w} />
              </span>
          </div>

        

          <div className='inner-input'>
            <label htmlFor="border-radious" > {"border radious"} </label>
            <input type="range" onChange={(e) => setRedious(e.target.value)} value={radious} />
          </div>
        </div>

        <div className="full-result">
          <p>{text}  </p>
          <button  onClick={handelCopy}>copy</button>
        </div>


      </div>


      <div className='box-container' style={{ backgroundColor: bodyColor }}>
        <div className="box" style={{
          height: h + 'px',
          width: w + "px",
          backgroundColor: color2,
          boxShadow: `${x}px ${y}px ${blue}px ${thin}px ${color}`,
          borderRadius: radious + "px"
        }}>           </div>

      </div>
    
    
    
    </div>

  )

}

export default CardBox