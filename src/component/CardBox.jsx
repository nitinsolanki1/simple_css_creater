import {useState} from 'react'

const CardBox = () => {

  // const [css,setcss] =   useState({w:0,x:0,h:0,y:1,blue:1,thin:1,radious:1,shadowColor:'black',backColor:"white"})
    // function handleClick(e){

        // setcss({
        //     ...css ,
        //     e.target.value = e.target.name
 
        // })
    // }
    let [w,setw] = useState(100)
    let [h,seth] = useState(100)
    let [x,setx] = useState(1)
    let [y,sety] = useState(1)
    let [blue,setblur] = useState(1)
    let [thin,setthit] = useState(1)
    let [radious,setRedious] = useState(1)
    let [color,setColor] = useState("black")
    let [color2,setColor2] = useState("white")
    let [bodyColor,setbodyColor] = useState("white")
  
    
    return(
      
        <div className='main'>


        <div className='tests'>
        <div className="inputs">
  
   <div className='input-container'>
      <label htmlFor="xref" > {"x side"}</label>
      <input type="range" onChange={(e)=>setx(e.target.value)} value={x} min={-50} max={50} />
  </div> 
   
  
  <div className='input-container'>
        <label htmlFor="xref" > {"y side"}</label>   
         <input type="range" onChange={(e)=>sety(e.target.value)} value={y} min={-50} max={50} />
  </div>

  <div className='input-container'>
  <label htmlFor="thinness" > {"thinness"}</label>   
         <input type="range" onChange={(e)=>setthit(e.target.value)} value={thin} min={-50} max={50} />
  </div>


  <div className='input-container'>
    <label htmlFor="blur" > {"blur"} </label>
  <input type="range" onChange={(e)=>setblur(e.target.value)} value={blue} min={-50} max={50} />
  </div>

  <div className='input-container'>
    <label htmlFor="color" > {"shadow color"} </label>
  <input type="color" onChange={(e)=>setColor(e.target.value)} value={color}  />
  </div>

  <div className='input-container'>
    <label htmlFor="color" > {"box color"} </label>
  <input type="color" onChange={(e)=>setColor2(e.target.value)} value={color2}  />
  </div>

  <div className='input-container'>
    <label htmlFor="color" > {"background color"} </label>
  <input type="color" onChange={(e)=>setbodyColor(e.target.value)} value={bodyColor}  />
  </div>

  <div className='input-container'>
    <label htmlFor="height" > {"height"} </label>
  <input type="number" onChange={(e)=>seth(e.target.value)} value={h}  />
  </div>

  <div className='input-container'>
    <label htmlFor="width" > {"width"} </label>
  <input type="number" onChange={(e)=>setw(e.target.value)} value={w}  />
  </div>

  <div className='input-container'>
    <label htmlFor="border-radious" > {"border radious"} </label>
  <input type="range" onChange={(e)=>setRedious(e.target.value)} value={radious}  />
  </div>
</div>

<div className="full-result">
 <p>

     box shadow : {  `${x}px ${y}px ${blue}px ${thin}px ${color}`} <br/>
     height : {h}px , <br/> width:{w}px , <br/>
     background-color:{color2} ,  <br/>
     border-radious:{radious}
  
  
  </p>
</div>


        </div>
       
  
          <div className='box-container' style={{backgroundColor:bodyColor}}>  
                <div className="box" style={ {
                                            height:h+'px' ,
                                            width:w+"px", 
                                            backgroundColor:color2,
                                            boxShadow:`${x}px ${y}px ${blue}px ${thin}px ${color}`,
                                            borderRadius:radious+"px"
                                            }}>           </div>
  
          </div>
        </div>
      
    )
  
}

export default CardBox