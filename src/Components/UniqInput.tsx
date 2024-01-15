import { TextField } from "@mui/material"

type Props = { 
  label : string;
  onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void
  value: string;
}

function UniqInput({ label, onChange, value }:Props) {

  return (
    <TextField
      variant="filled"
      label={label}
      onChange={onChange}
      value={value}
    />)
}
export default UniqInput