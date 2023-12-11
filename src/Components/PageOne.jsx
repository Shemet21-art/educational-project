import { Button } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"





function Page1(){ 
   
    const [value, setValue] = useState(0)
    const handlerClickOne = () => setValue(value + 1 )
    const handlerClickThree = () => setValue(value + 3 )
   return (
  <div> 
    <Button onClick={handlerClickOne}> Pluss 1 </Button>
    <Button onClick={handlerClickThree }> Pluss 3 </Button>
    <p>Go page 2</p>
        <Link to="/two">Page Two</Link>
<h1>{value}</h1>
      
  </div>

   )

}

export default Page1