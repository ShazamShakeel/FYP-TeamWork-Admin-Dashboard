import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Login from "./Pages/Login/Login";
import { createTheme, ThemeProvider, makeStyles } from "@material-ui/core";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";

const theme = createTheme({
  typography: {
    fontFamily: "Open Sans",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(2),
    },
    toolBar: theme.mixins.toolbar,
  };
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">

          <Switch>

            <Route path="/" exact>
              <Login />
            </Route>

            <Route path="/dashboard" exact>
              <div className={classes.root}>
                <Sidebar />
                <Navbar />
                <div className={classes.page}>
                  {/* main content */}
                  <div className={classes.toolBar}></div>
                  <Dashboard/>
                </div>
              </div>
            </Route>

            <Route path="/dashboard/tasks" exact>
              <div className={classes.root}>
                <Sidebar />
                <Navbar />
                <div className={classes.page}>
                  {/* main content */}
                  <div className={classes.toolBar}></div>
                  Task Content
                </div>
              </div>
            </Route>

            <Route path="/dashboard/projects" exact>
              <div className={classes.root}>
                <Sidebar />
                <Navbar />
                <div className={classes.page}>
                  {/* main content */}
                  <div className={classes.toolBar}></div>
                  Project Content
                </div>
              </div>
            </Route>

            <Route path="/dashboard/teams" exact>
              <div className={classes.root}>
                <Sidebar />
                <Navbar />
                <div className={classes.page}>
                  {/* main content */}
                  <div className={classes.toolBar}></div>
                  Team Content
                </div>
              </div>
            </Route>

            <Route path="/dashboard/account" exact>
              <div className={classes.root}>
                <Sidebar />
                <Navbar />
                <div className={classes.page}>
                  {/* main content */}
                  <div className={classes.toolBar}></div>
                  Account Setting
                </div>
              </div>
            </Route>

            <Route path="/*">
              <p>Page Not Found !</p>
            </Route>

          </Switch>
          
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
