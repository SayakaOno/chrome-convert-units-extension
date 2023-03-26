import React, { ChangeEvent, useEffect, useMemo } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Paper from "@mui/material/Paper";
import { getUnitSet, isValidUnit, convert } from "./utils";
import { allUnits, Unit } from "./constants";
import "./App.css";

function App() {
  const [value, setValue] = React.useState("");
  const [unit, setUnit] = React.useState<Unit | "">("");
  const [unitSet, setUnitSet] = React.useState<Unit[]>([]);

  useEffect(() => {
    const newUnitSet = getUnitSet(unit);
    setUnitSet(newUnitSet || []);
  }, [unit]);

  const handleChange = (
    event: SelectChangeEvent | ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | any,
    set: (value: string) => void,
  ) => {
    set(event.target.value as string);
  };

  const handleTextFieldChange = (
    event: SelectChangeEvent | ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | any,
  ) => {
    if (isValidUnit(event.target.value)) {
      setUnit(event.target.value);
    }
  };

  const convertedValues = useMemo(() => {
    if (!value || !unit || !unitSet.length || !unitSet.includes(unit)) {
      return null;
    }

    return (
      <ul style={{ marginBottom: 0 }}>
        {unitSet.map((item) => {
          if (item !== unit) {
            return (
              <li style={{ marginBottom: 10 }}>
                <span style={{ paddingRight: 10 }}>
                  {convert(+value)
                    .from(unit as Unit)
                    .to(item as Unit)}
                </span>
                <span>{item}</span>
              </li>
            );
          }
        })}
      </ul>
    );
  }, [value, unit, unitSet]);

  return (
    <div style={{ padding: 10 }}>
      <div style={{ display: "flex" }}>
        <TextField
          label="Value"
          id="outlined-size-small"
          size="small"
          type={"number"}
          value={value}
          onChange={(e) => handleChange(e, setValue)}
        />
        <Paper
          sx={{
            boxShadow: "none",
            "& .MuiAutocomplete-option": {
              paddingTop: "2px!important",
              paddingBottom: "2px!important",
            },
          }}
        >
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            size="small"
            options={allUnits}
            sx={{
              width: 150,
            }}
            value={unit}
            onChange={(event: React.SyntheticEvent<Element, Event>, newValue: string | null) => {
              setUnit((newValue as Unit) || "");
            }}
            renderInput={(params) => (
              <TextField {...params} label="Unit" onChange={handleTextFieldChange} />
            )}
          />
        </Paper>
      </div>
      {convertedValues}
    </div>
  );
}

export default App;
