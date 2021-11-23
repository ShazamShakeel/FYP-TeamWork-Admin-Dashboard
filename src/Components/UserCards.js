import { Card, Grid, makeStyles, Typography } from "@material-ui/core";
import { AssignmentInd } from "@material-ui/icons";
import React from "react";
const useStyles = makeStyles({
    gridContainer: {
      marginTop: 20
    },
    cardContainer: {
        display: 'flex',
        padding: 20,
        justifyContent: "space-between",
        margin: '10px 0'
    },
    header: {
      display: "flex",
      alignItems: 'center'
    },
    typography: {
      marginLeft: 20,
      fontSize: 20,
      textTransform: 'capitalize'
    }
});
export default function UserCards({ users }) {
  const classes = useStyles();
  var keyValue = 0;
  return (
    <div>
      <Grid container className={classes.gridContainer}>
      {users.map((user) => (
        <Grid item lg={12} md={12} sm={12} xs={12} key={keyValue+=1}>
          <Card className={classes.cardContainer} elevation={3}>
            <div className={classes.header}>
              <AssignmentInd fontSize="large" color="primary" />
              <Typography color="textPrimary" className={classes.typography}>
                {user.name}
              </Typography>
            </div>
            <Typography>Created at:  {user.createdAt}</Typography>
          </Card>
        </Grid>
      ))}
      </Grid>
    </div>
  );
}
