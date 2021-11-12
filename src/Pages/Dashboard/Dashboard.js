import {
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
import React from "react";
import { userData } from "../../Data/data";
import Chart from "../../Components/Chart";

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
      marginTop: 20
    }
  };
});

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Card className={classes.cardContainer} elevation={3}>
              <div className={classes.header}>
                <AssignmentTurnedIn fontSize="large" color="primary"/>
                <Typography color="textPrimary">Users</Typography>
              </div>
              <Typography variant="h3" className={classes.data} color="primary">
                1,000
              </Typography>
            </Card>
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Card className={classes.cardContainer} elevation={3}>
              <div className={classes.header}>
                <AssignmentInd fontSize="large" color="primary"/>
                <Typography color="textPrimary">Cards</Typography>
              </div>
              <Typography variant="h3" className={classes.data} color="primary">
                250
              </Typography>
            </Card>
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Card className={classes.cardContainer} elevation={3}>
              <div className={classes.header}>
                <FeaturedPlayList fontSize="large" color="primary"/>
                <Typography color="textPrimary">Boards</Typography>
              </div>
              <Typography variant="h3" className={classes.data} color="primary">
                37
              </Typography>
            </Card>
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Card className={classes.cardContainer} elevation={3}>
              <div className={classes.header}>
                <Group fontSize="large" color="primary"/>
                <Typography color="textPrimary">Teams</Typography>
              </div>
              <Typography variant="h3" className={classes.data} color="primary">
                18
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Divider className={classes.dividerLine}/>
      <Chart data={userData} dataKey="Users" />
    </div>
  );
}
