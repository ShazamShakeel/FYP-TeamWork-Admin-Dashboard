import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  AssignmentInd,
  AssignmentTurnedIn,
  FeaturedPlayList,
  Group,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import UserCards from "../../Components/UserCards";
// import { userData } from "../../Data/data";
// import Chart from "../../Components/Chart";

const useStyles = makeStyles((theme) => {
  return {
    cardContainer: {
      padding: 20,
      display: "flex",
    },
    header: {
      display: "flex",
      flexDirection: "column",
    },
    data: {
      display: "flex",
      alignSelf: "center",
      margin: "auto",
    },
    dividerLine: {
      marginTop: 20,
    },
  };
});

export default function Dashboard() {
  const classes = useStyles();
  const [users, setUsers] = useState(null);
  const [cards, setCards] = useState(null);
  const [boards, setBoards] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/dashboard")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
    fetch("http://localhost:5000/dashboard/cards")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCards(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    fetch("http://localhost:5000/dashboard/boards")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBoards(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Card className={classes.cardContainer} elevation={3}>
              <div className={classes.header}>
                <AssignmentInd fontSize="large" color="primary" />
                <Typography color="textPrimary">Users</Typography>
              </div>
              <Typography variant="h3" className={classes.data} color="primary">
                {users && users.length}
              </Typography>
            </Card>
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Card className={classes.cardContainer} elevation={3}>
              <div className={classes.header}>
                <AssignmentTurnedIn fontSize="large" color="primary" />
                <Typography color="textPrimary">Cards</Typography>
              </div>
              <Typography variant="h3" className={classes.data} color="primary">
                {cards && cards.length}
              </Typography>
            </Card>
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Card className={classes.cardContainer} elevation={3}>
              <div className={classes.header}>
                <FeaturedPlayList fontSize="large" color="primary" />
                <Typography color="textPrimary">Boards</Typography>
              </div>
              <Typography variant="h3" className={classes.data} color="primary">
                {boards && boards.length}
              </Typography>
            </Card>
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Card className={classes.cardContainer} elevation={3}>
              <div className={classes.header}>
                <Group fontSize="large" color="primary" />
                <Typography color="textPrimary">Teams</Typography>
              </div>
              <Typography variant="h3" className={classes.data} color="primary">
                18
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Divider className={classes.dividerLine} />
      <Typography color="primary">
        <Box textAlign="center" fontSize="h4.fontSize" m={2}>
          Users List
        </Box>
      </Typography>
      <Divider />
      {/* <Chart data={userData} dataKey="Users" /> */}
      {loading && (
        <Typography color="primary">
          <Box textAlign="center" fontSize="h6.fontSize" m={2}>
            Loading
          </Box>
        </Typography>
      )}
      {users && <UserCards users={users} />}
    </div>
  );
}
