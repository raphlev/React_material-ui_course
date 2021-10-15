import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

// extends overides default theme properties. see doc defaulttheme
export default createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange
    },
    primary: {
      main: arcBlue
    },
    secondary: {
      main: arcOrange
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      color: "white",
      fontSize: "1rem"
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white"
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: arcBlue,
      lineHeight: 1.5
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: arcBlue
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: arcBlue,
      fontWeight: 700
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: arcBlue
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1.25rem"
    },
    body1: {
      fontSize: "1.25rem",
      color: arcGrey,
      fontWeight: 300
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: arcGrey
    },
    learnButton: {
      borderColor: arcBlue,
      borderWidth: 2,
      textTransform: "none",
      color: arcBlue,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold"
    }
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcBlue,
        fontSize: "1rem"
      }
    },
    MuiInput: {
      root: {
        color: arcGrey,
        fontWeight: 300
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlue}`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcBlue}`
        }
      }
    }
  }
});
// overrides: see 110. Using TextFields Styling
// https://www.udemy.com/course/implement-high-fidelity-designs-with-material-ui-and-reactjs/learn/lecture/16041126?start=435#overview
// https://stackoverflow.com/questions/51958068/how-to-override-selected-color-in-theme-override-for-material-ui-for-react + https://codesandbox.io/s/mj9x1zy4j9?file=/demo.js:326-389
