import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"





function Page1(){ 
   
    const [value, setValue] = useState(0)
    const [valueInclued, setLoading] = useState(false);
    const [valueDisabled, setDisabled] = useState(false)

    useEffect(()=>{
      if(valueInclued === true){
       setTimeout(setValue, 1000, value + 1 )
      }
    })
    
    const handlerClickPlusOne = () => setValue(value + 1 )
    const handlerClickPlusThree = () => setValue(value + 3 )
    const handlerClickPlusTen =() => setValue(value > 10 ? value -  10 : value - value )
    const handlerStartStop = () => {setLoading(!valueInclued)
      setDisabled(!valueDisabled)
    }
  
    
   return (
  <div> 
    <Button disabled ={valueDisabled} onClick={handlerClickPlusOne}> Pluss 1 </Button>
    <Button  disabled ={valueDisabled} onClick={handlerClickPlusThree }> Pluss 3 </Button>
    <Button disabled ={valueDisabled}  onClick={handlerClickPlusTen}>Minus 10</Button>
    <Button checked ={valueInclued} onClick={handlerStartStop}>plus 1 per second</Button>
    <p>Go page 2</p>
        <Link to="/two">Page Two</Link>
<h1>{value}</h1>
      
  </div>

   )

}

export default Page1