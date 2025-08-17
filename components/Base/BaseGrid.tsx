import React from "react";
import { Grid, Input, Slider, Typography } from "@mui/material";

type Props = {
  type: "level" | "skillBonus";
  text: string;
  value: number;
  onChange: (key: "level" | "skillBonus", value: number) => void;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: "level" | "skillBonus"
  ) => void;
  onBlur: (key: "level" | "skillBonus") => void;
};

const BaseGrid = ({
  type,
  text,
  value,
  onChange,
  onInputChange,
  onBlur,
}: Props) => {
  const min = type === "skillBonus" ? 0 : 1;
  const max = type === "skillBonus" ? 5 : 100;

  return (
    <>
      <Grid container alignItems="center" spacing={2} width="80%">
        <Grid size="grow">
          <Slider
            name={type}
            value={typeof value === "number" ? value : min}
            onChange={(_, val) => onChange(type, val as number)}
            aria-labelledby="input-slider"
            min={min}
            max={max}
            sx={{
              width: "80%",
              color: "#111827",
              "& .MuiSlider-thumb": {
                backgroundColor: "#111827",
              },
              "& .MuiSlider-track": {
                backgroundColor: "#111827",
              },
              "& .MuiSlider-rail": {
                backgroundColor: "rgb(85, 87, 89)",
              },
            }}
          />
        </Grid>
        <Typography>{text}</Typography>
        <Grid>
          <Input
            disableUnderline
            value={value}
            name={type}
            size="small"
            onChange={(e) => onInputChange(e, type)}
            onBlur={() => onBlur(type)}
            inputProps={{
              step: 1,
              min,
              max,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
            sx={{
              borderBottom: 1,
              borderColor: "#111827",
              width: "3.5rem",
              textAlign: "center",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default BaseGrid;
