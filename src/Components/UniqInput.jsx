import {  TextField} from "@mui/material"
 
 function UniqInput({label,onChange,value}){


  return(
  <TextField
  variant="filled"
  label={label}
  onChange={onChange}
  value={value}
  />)
}
export default UniqInput