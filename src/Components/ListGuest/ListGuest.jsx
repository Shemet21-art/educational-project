import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import UniqInput from "../UniqInput";

function guestInfo( name, surname){
   return {name,surname}
    
}
const listNamesGuests =[]


function ListGuest(){
    useEffect(()=>{
      if(nameValue !== nameValue){
        setNameValue()
      }
    })

const [nameValue, setNameValue] = useState('')
const [surnameValue, setSurnameValue] = useState('')

function addEvent(){
    if( nameValue !== ''&& surnameValue !==''){
  listNamesGuests.push(guestInfo( nameValue, surnameValue)) 
  setNameValue('')
  setSurnameValue('')}
  else alert("Заполни Все поля!")
  
}
    return(<>
    <h1>Здесь будет список</h1>
    <div>
    <TableContainer>
        <Table>
        <TableHead>
            <TableRow>
                <TableCell>Фамилия</TableCell>
                <TableCell>Имя</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
     {listNamesGuests.map((guest)=>(<TableRow key={Math.random()}>
        <TableCell>{guest.name}</TableCell>
        <TableCell>{guest.surname}</TableCell>
     </TableRow>))}
        </TableBody>
        </Table>
    </TableContainer>
    </div>
<form>
   <UniqInput 
   label={"Введите имя гостя"}
   value = {nameValue}
  onChange={(e)=>setNameValue(e.target.value)}
   />
      <UniqInput 
   label={"Введите фамилию гостя"}
   value = {surnameValue}
  onChange={(e)=>setSurnameValue(e.target.value)}
   />
    <Button onClick={addEvent}>Add</Button>
    </form>
    </>)
}

export default ListGuest