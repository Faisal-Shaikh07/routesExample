import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Fade,
  TextField,
  Typography,
  makeStyles,
} from "@mui/material";
import { createUseStyles } from "react-jss";

export default function Pm() {
  const classes = useStyles();
  return (
    <>
      <Box sx={{ display: "flex", width: "100%", gap: "10px" }}>
        <Box className={classes.inputBox}>
          <Typography variant="p">Project name</Typography>
          <TextField
            type="text"
            placeholder="Enter project name"
            className={classes.input}
          />
        </Box>
        <Box className={classes.inputBox}>
          <Typography variant="p">Project start date</Typography>
          <TextField
            type="date"
            placeholder="Select date"
            className={classes.input}
          />
        </Box>
      </Box>
      <Box>
      {/* <Box className={classes.inputBox}>
          <Typography variant="p">Users</Typography>
          <TextField
            type="text"
            placeholder="Selecet users"
            className={classes.selectInput}
          />
        </Box> */}
      </Box>
    </>
  );
}

const useStyles = createUseStyles({
  input: {
    padding: "13px",
    outline: "none",
    borderRadius: "5px",
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    fontSize: 14,
    flex: "0 0 49%",
  },
  selectInput: {
    padding: "13px",
    outline: "none",
    borderRadius: "5px",
  }
});

// const useNewStyles = makeStyles(theme => ({
//   root: {
//     border: "1px solid brown",
//     overflow: "hidden",
//     borderRadius: 3,
//     backgroundColor: "orange",
//     transition: theme.transitions.create(["border-color", "box-shadow"]),
//     "&:hover": {
//       backgroundColor: "#fff"
//     },
//     "&$focused": {
//       backgroundColor: "#fff",
//       boxShadow: `${Fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
//       borderColor: theme.palette.primary.main
//     }
//   },
//   focused: {}
// }));