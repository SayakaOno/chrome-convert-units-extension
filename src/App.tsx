import React, { ChangeEvent } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Autocomplete from "@mui/material/Autocomplete";

const units = ["mm", "cm", "m"];

function App() {
  const [value, setValue] = React.useState("");
  const [unit, setUnit] = React.useState("");

  const handleChange = (
    event: SelectChangeEvent | ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    set: (value: string) => void,
  ) => {
    set(event.target.value as string);
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <TextField
          label="Value"
          id="outlined-size-small"
          size="small"
          type={"number"}
          value={value}
          onChange={(e) => handleChange(e, setValue)}
        />
      </div>
      <Box sx={{ width: 100, marginRight: "10px" }}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          size="small"
          value={unit}
          options={units}
          sx={{ width: 100 }}
          renderInput={(params) => (
            <TextField {...params} label="Unit" onChange={(e) => handleChange(e, setUnit)} />
          )}
        />
      </Box>
      <FormControl variant="outlined">
        <OutlinedInput
          id="outlined-adornment-weight"
          size="small"
          disabled
          endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
          style={{ width: 100 }}
        />
      </FormControl>
    </div>
  );
}

export default App;
