import { Card, Grid, makeStyles, Typography } from "@material-ui/core";
import { AssignmentTurnedIn } from "@material-ui/icons";
import React from "react";
const useStyles = makeStyles({
    gridContainer: {
      marginTop: 20
    },
    taskContainer: {
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
export default function TaskCards({ tasks }) {
  const classes = useStyles();
  var keyValue = 1;
  return (
    <div>
      <Grid container className={classes.gridContainer}>
      {tasks.map((task) => (
        <Grid item lg={12} md={12} sm={12} xs={12} key={keyValue+=1}>
          <Card className={classes.taskContainer} elevation={3}>
            <div className={classes.header}>
              <AssignmentTurnedIn fontSize="large" color="primary" />
              <Typography color="textPrimary" className={classes.typography}>
                {task.title}
              </Typography>
            </div>
            <Typography>Created at:  {task.createdAt}</Typography>
          </Card>
        </Grid>
      ))}
      </Grid>
    </div>
  );
}