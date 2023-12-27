
import { Button } from "@mui/material"
import { useState } from "react";
import UniqInput from "../UniqInput";
import { useDispatch, useSelector } from "react-redux";
import { addEmaill} from "../../store/reducers/pageTwoSlice/pageTwoSlice";






function Page2() {
    const dataPageTwo = useSelector(state => state.dataPageTwo.dataPageTwo)

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