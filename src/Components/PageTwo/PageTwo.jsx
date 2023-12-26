
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

    const addvalueEmaill =()=>{dispatch(addEmaill({ email:emailValue, nameUser:nameValue, number: numberValue}))}



    function sendEmail() {
        console.log("email", emailValue)
        console.log("number", numberValue)
        console.log("Имя Фамилия", nameValue)

    }
    return (
        <div>
            <p>Go page one</p>

            <div>
                <UniqInput
                    label="email"
                    onChange={(e) => setEmailValue(e.target.value)}
                
                />
                <Button onClick={sendEmail}>Отправить</Button> <Button onClick={addvalueEmaill}>почта</Button>
            </div>
            <div>
                <UniqInput
                    label="введи номер сучка"
                    onChange={(e) => setNumberValue(e.target.value)}
                />
            </div>
            <div>
                <UniqInput
                    label={'введи имя фамилию'}
                    onChange={(e) => setNameValue(e.target.value)}
                />
            </div>

        </div>)
}

export default Page2