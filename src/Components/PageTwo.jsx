
import { Button, TextField } from "@mui/material"
import { useState } from "react";

import { Link } from "react-router-dom"
function Page2(){

    const[emailValue, setEmailValue] = useState('')
    const[numberValue, setNumberValue] =  useState('')
    const[nameValue, setNameValue] = useState('')
    
    function handleChangeEmail(e){
        setEmailValue(e.target.value)
    }

    function handlerChangeNumber(e){
        setNumberValue(e.target.value)
    }

    function handlerChangeName(e){
        setNameValue(e.target.value)
    }
    
function sendEmail(){
    console.log("email",emailValue)
    console.log("number", numberValue)
    console.log("Имя Фамилия", nameValue)
}

    return(
        <div> 
        <p>Go page one</p>
            <Link to="/">First page</Link>
            <div>
          <TextField
          variant="filled"
              label="email"
              type="email"
              onChange={handleChangeEmail}
              />

              <Button onClick={sendEmail}>Отправить</Button>
          </div>
          <div>
          <TextField
          variant="filled"
              label="введи номер сучка"
              onChange={handlerChangeNumber}
              />
          </div>
          <div>
          <TextField
          variant="filled"
              label="введи имя фамилию"
              onChange={handlerChangeName}
              />
          </div>
      </div>)
}

export default Page2