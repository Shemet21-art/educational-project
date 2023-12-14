import {  TextField} from "@mui/material"
 
 function UniqInput({label,onChange}){


  return(
  <TextField
  variant="filled"
  label={label}
  onChange={onChange}
  />)
}
export default UniqInput