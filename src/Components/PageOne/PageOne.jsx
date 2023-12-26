import { Button } from "@mui/material";
import { useState } from "react";

function Page1() {
  const [value, setValue] = useState(0);
  const [valueInclued, setLoading] = useState(false);

  const [intervalId, setIntervalId] = useState(0);

  function handlerChange(numb) {
    setValue((value)=>{
      if( value > 100 ){
        return value = 0 
      }
      else{
      const resChang = value + numb;
        return resChang;}
        
    })
   
  }
  const handlerClickPlusTen = () => setValue(value > 10 ? value - 10 : 0);

  const add = () => {
    setLoading((prevStart) => {
      if ( prevStart === false) {
        const id = setInterval(() => {
          setValue((value) => value + 1);
        }, 1000);
        setIntervalId(id);
      } else {
        clearInterval(intervalId);
      }

      return !prevStart;
    });
  };

  return (
    <div>
      <Button onClick={() => handlerChange(1)}> Pluss 1 </Button>
      <Button onClick={() => handlerChange(3)}> Pluss 3 </Button>
      <Button onClick={handlerClickPlusTen}>Minus 10</Button>
      <Button onClick={()=>handlerChange(10)} >Plus 10 </Button>
      <Button onClick={add}>plus 1 per second</Button>

      <h1>{value}</h1>
    </div>
  );
}

export default Page1;
