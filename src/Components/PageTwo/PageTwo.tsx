
import { Button } from "@mui/material"
import { useState } from "react";
import UniqInput from "../UniqInput";
import { useDispatch, useSelector } from "react-redux";
import { addEmaill} from "../../store/reducers/pageTwoSlice/pageTwoSlice";
import * as React from "react";

interface IFormValuePageTwo{
email: string,
nameUser: string,
number: number
}

interface dataPageTwo { 
[key:string]: IFormValuePageTwo
}




function Page2() {
    const dataPageTwo:Array<dataPageTwo> = useSelector((state:Storage) => state.dataPageTwo.dataPageTwo)

    console.log(dataPageTwo)

    const [emailValue, setEmailValue] = useState('')
    const [numberValue, setNumberValue] = useState('')
    const [nameValue, setNameValue] = useState('')

    const dispatch = useDispatch()

    const addvalueEmaill =()=>{
        dispatch(addEmaill({ email:emailValue, nameUser:nameValue, number: numberValue}))
        setEmailValue('')
        setNumberValue('')
        setNameValue('')
    }

    return (
        <div>
            <p>Go page one</p>

            <div>
                <UniqInput
                    label="email"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                
                />
                <Button onClick={addvalueEmaill}>В стор </Button>
            </div>
            <div>
                <UniqInput
                    label="введи номер сучка"
                 value={numberValue}
                    onChange={(e) => setNumberValue(e.target.value)}
                />
            </div>
            <div>
                <UniqInput
                    label={'введи имя фамилию'}
                  value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                />
            </div>

        </div>)
}

export default Page2