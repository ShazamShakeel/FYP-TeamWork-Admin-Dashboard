import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Login from "./Pages/Login/Login";
import { createTheme, ThemeProvider, makeStyles } from "@material-ui/core";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import CardPage from "./Pages/Card/CardPage"
import BoardPage from "./Pages/Board/BoardPage";
import TeamPage from "./Pages/Team/TeamPage";

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

            <Route path="/dashboard/cards" exact>
              <div className={classes.root}>
                <Sidebar />
                <Navbar name={"Cards"}/>
                <div className={classes.page}>
                  {/* main content */}
                  <div className={classes.toolBar}></div>
                  <CardPage/>
                </div>
              </div>
            </Route>

            <Route path="/dashboard/boards" exact>
              <div className={classes.root}>
                <Sidebar />
                <Navbar name={"Boards"}/>
                <div className={classes.page}>
                  {/* main content */}
                  <div className={classes.toolBar}></div>
                  <BoardPage/>
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
