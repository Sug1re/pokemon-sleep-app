import { createTheme } from "@mui/material/styles";
import { rocknRollOne } from "./fonts";

const theme = createTheme({
  typography: {
    fontFamily: `${rocknRollOne.style.fontFamily}, sans-serif`,
  },
});

export default theme;
