import {
    Card,
    Container,
    Divider,
    Grid,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  import { FeaturedPlayList } from "@material-ui/icons";
  import React from "react";
  import { ProjectData } from "../../Data/data";
  import Chart from "../../Components/Chart"
  
  const useStyles = makeStyles((theme) => {
    return {
        gridContainer: {
            display: 'flex',
            justifyContent: 'center'
        },
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
  
  export default function ProjectPage() {
    const classes = useStyles();
    return (
      <div>
        <Container>
          <Grid container className={classes.gridContainer}>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Card className={classes.cardContainer} elevation={3}>
              <div className={classes.header}>
                <FeaturedPlayList fontSize="large" color="primary"/>
                <Typography color="textPrimary">Projects</Typography>
              </div>
              <Typography variant="h3" className={classes.data} color="primary">
                37
              </Typography>
            </Card>
          </Grid>
          </Grid>
        </Container>
        <Divider className={classes.dividerLine}/>
        <Chart data={ProjectData} dataKey="Projects" />
      </div>
    );
  }
  