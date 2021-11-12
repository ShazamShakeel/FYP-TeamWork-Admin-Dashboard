import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Login from "./Pages/Login/Login";
import { createTheme, ThemeProvider, makeStyles } from "@material-ui/core";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import TaskPage from "./Pages/Task/TaskPage"
import ProjectPage from "./Pages/Project/ProjectPage";
import TeamPage from "./Pages/Team/TeamPage";
import Account from "./Pages/Account/Account";

const theme = createTheme({
  palette: {
    primary: {
      main: '#2f80ed'
    }
  },
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
      background: '#f8f9fd'
    },
    page: {
      width: "100%",
      padding: theme.spacing(2),
      height: 'calc(100vh - theme.mixins.toolbar)'
    },
    toolBar: theme.mixins.toolbar,
  };
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>

          <Switch>

            <Route path="/" exact>
              <Login />
            </Route>

            <Route path="/dashboard" exact>
              <div className={classes.root}>
                <Sidebar />
                <Navbar name={"Dashboard"}/>
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
                <Navbar name={"Tasks"}/>
                <div className={classes.page}>
                  {/* main content */}
                  <div className={classes.toolBar}></div>
                  <TaskPage/>
                </div>
              </div>
            </Route>

            <Route path="/dashboard/projects" exact>
              <div className={classes.root}>
                <Sidebar />
                <Navbar name={"Projects"}/>
                <div className={classes.page}>
                  {/* main content */}
                  <div className={classes.toolBar}></div>
                  <ProjectPage/>
                </div>
              </div>
            </Route>

            <Route path="/dashboard/teams" exact>
              <div className={classes.root}>
                <Sidebar />
                <Navbar name={"Teams"}/>
                <div className={classes.page}>
                  {/* main content */}
                  <div className={classes.toolBar}></div>
                  <TeamPage/>
                </div>
              </div>
            </Route>

            <Route path="/dashboard/account" exact>
              <div className={classes.root}>
                <Sidebar />
                <Navbar name={"Account"}/>
                <div className={classes.page}>
                  {/* main content */}
                  <div className={classes.toolBar}></div>
                  <Account/>
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
