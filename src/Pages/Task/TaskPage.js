import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AssignmentTurnedIn } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import TaskCards from "../../Components/TaskCards";
// import { TaskData } from "../../Data/data";
// import Chart from "../../Components/Chart";

const useStyles = makeStyles((theme) => {
  return {
    gridContainer: {
      display: "flex",
      justifyContent: "center",
    },
    taskContainer: {
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

export default function TaskPage() {
  const classes = useStyles();
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/dashboard/tasks")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTasks(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <Container>
        <Grid container className={classes.gridContainer}>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Card className={classes.taskContainer} elevation={3}>
              <div className={classes.header}>
                <AssignmentTurnedIn fontSize="large" color="primary" />
                <Typography color="textPrimary">Tasks</Typography>
              </div>
              <Typography variant="h3" className={classes.data} color="primary">
              {tasks && tasks.length}
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Divider className={classes.dividerLine} />
      <Typography color='primary'>
        <Box textAlign="center" fontSize='h4.fontSize' m={2}>
          Tasks List
        </Box>
      </Typography>
      <Divider/>
      {/* <Chart data={TaskData} dataKey="Tasks" /> */}
      {loading && (
        <Typography color="primary">
          <Box textAlign="center" fontSize="h6.fontSize" m={2}>
            Loading
          </Box>
        </Typography>
      )}
      {tasks && <TaskCards tasks={tasks} />}
    </div>
  );
}
