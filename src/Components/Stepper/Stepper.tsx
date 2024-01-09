import { Button } from "@mui/material"
import UniqInput from "../UniqInput"
import { useState } from "react"
import { styled } from '@mui/material/styles';


function Stepper (){

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    const [surname,setSurname] = useState('')
    const [number,setNumber] = useState('')
    const [adress, setAdress] = useState('')
    const [gender, setGender] = useState('')
    const [country, setCountry] = useState('')
    const [img, setImg] = useState('')


    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });


    function step(count:number){ 
        switch(count) {
            case 0: return (
            <div>
                <h1>Name</h1>
                <UniqInput value={name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)} label={"Имя"}/>
                <UniqInput value={surname} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSurname(e.target.value)} label={"Фамилия"}/>
            </div>);    
            case 1: return (
                <div>
                    <h1> ADRESS</h1>
                  <UniqInput value={adress} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setAdress(e.target.value)} label={"АДРЕСС"}/>
                <UniqInput value={number} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setNumber(e.target.value)} label={"НОМЕР"}/>
                </div>
            );
            case 2: return(
                <div>
                    <Button component="label" variant="contained" >
                            Upload file
                        <VisuallyHiddenInput accept="image/png, image/jpeg" type="file"  onChange={(e:any)=>setImg(e.target.files)}/>
                    </Button>
                </div>
            );
            case 3: return(
                <div>
                   <UniqInput value={gender} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setGender(e.target.value)} label={"ПОЛ"}/>
                <UniqInput value={country} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setCountry(e.target.value)} label={"СТРАНА"}/>
                </div>
            );
            case 4: return(
                console.log("Name :", name, "Surname :", surname, "Number :", number, "Adress :", adress, "Gender :", gender, "Country:", country, "IMG :", img ),
                <h1>ЭТО КОНЕЦ!!!</h1>
            )

        }
    }


    function addCount(){
        if(count < 4){
     setCount((count)=>{
      return count + 1   
     })}
     return count
    }

    function minusCount(){
if( count > 0){
    setCount((count)=>{
        return count -1
    })}
    return count
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