import { Button } from "@mui/material"
import UniqInput from "../UniqInput"
import { useState } from "react"

function Stepper (){

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    const [surname,setSurname] = useState('')
    const [number,setNumber] = useState('')
    const [adress, setAdress] = useState('')
    const [gender, setGender] = useState('')
    const [country, setCountry] = useState('')


    function step(){ 
        switch(count) {
            case 0: return (
            <div>
                <h1>Name</h1>
                <UniqInput value={name} onChange={(e)=>setName(e.target.value)} label={"Имя"}/>
                <UniqInput value={surname} onChange={(e)=>setSurname(e.target.value)} label={"Фамилия"}/>
            </div>);    
            case 1: return (
                <div>
                    <h1> ADRESS</h1>
                  <UniqInput value={adress} onChange={(e)=>setAdress(e.target.value)} label={"АДРЕСС"}/>
                <UniqInput value={number} onChange={(e)=> setNumber(e.target.value)} label={"НОМЕР"}/>
                </div>
            );
            case 2: return(
                <div>
                    <h1>step3</h1>
                </div>
            );
            case 3: return(
                <div>
                   <UniqInput value={gender} onChange={(e)=> setGender(e.target.value)} label={"ПОЛ"}/>
                <UniqInput value={country} onChange={(e)=> setCountry(e.target.value)} label={"СТРАНА"}/>
                </div>
            );
            case 4: return(
                console.log("Name :", name, "Surname :", surname, "Number :", number, "Adress :", adress, "Gender :", gender, "Country:", country ),
                <h1>ЭТО КОНЕЦ!!!</h1>
            )

        }
    }

console.log(count)

    function addCount(){
     setCount((count)=>{
      return count + 1 
        
     })
    }

    function minusCount(){

    setCount(count-1)
    }

    return (
      <div>
        <h1>СТЕППЕР </h1>

        <div>
           {step(count)}  
        </div>
        <Button onClick={minusCount}>PREVIE</Button>
        <Button onClick={addCount}>NEXT</Button>
       
      </div>
    )
}

export default Stepper