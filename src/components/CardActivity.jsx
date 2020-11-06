import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "89%",
    height: "6%",
    padding: "7px 18px",
    borderBottom: `2px solid #DADEE2`
  },
  activityKey: {
    color: "#46555F",
    fontSize: "13px"
  },
  activityValue: {
    fontWeight: 800,
    color: "#001521",
    fontSize: "13px"
  }
}));
export default function CardActivity(props) {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.container}>
        <Typography className={classes.latestActivity}>
          <span className={`latestActivityKey ${classes.activityKey}`}>
            LatestActivity:
          </span>
          <span className={`latestActivityValue ${classes.activityValue}`}>
            {props.data}
          </span>
        </Typography>
      </Box>
    </>
  );
}
