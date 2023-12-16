import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import UniqInput from "../UniqInput";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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

const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


function addEvent(){
    if( nameValue !== ''&& surnameValue !==''){
  listNamesGuests.push(guestInfo( nameValue, surnameValue)) 
  setNameValue('')
  setSurnameValue('')}
  else alert("Заполни Все поля!")
  handleClose()
  
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

<Button onClick={handleOpen}> add guest</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
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
    </form>  </Box>
</Modal>

    </>)
}

export default ListGuest