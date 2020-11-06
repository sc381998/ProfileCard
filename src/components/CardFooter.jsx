import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Line } from "react-chartjs-2";
import { Box, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "89%",
    height: "45%",
    padding: "0 18px 18px 18px"
  },
  text: {
    padding: "14px 0 16px 0",
    color: "#001521",
    fontSize: "12px",
    fontWeight: "500",
    display: "flex"
  },
  dash: {
    color: "#C0C6CB"
  }
}));

export default function CardFooter(props) {
  const classes = useStyles();

  const chartData = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 500);
    gradient.addColorStop(0, "rgba(128,182,244,10)");
    gradient.addColorStop(1, "rgba(255,255,255,0.14)");
    return {
      // labels: ["", "", "", "", "", "", "", "", "", "", "", "", ""],
      labels: props.data.map((el) => ""),
      datasets: [
        {
          label: "",
          lineTension: 0.2,
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],

          backgroundColor: "1px 1px 2px 0px rgba(0, 122, 255, 1)",
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          // pointBoxShadow: "1px 1px 2px 0px rgba(0, 122, 255, 1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          data: props.data
        }
      ]
    };
  };
  const options = {
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false
          }
        }
      ]
    }
  };
  return (
    <>
      <Box className={classes.container}>
        <Typography className={`footerText ${classes.text}`}>
          Strokes Gained Total <span className={classes.dash}>—</span> last 10{" "}
          <ExpandMoreIcon fontSize="small" />
        </Typography>
        <div>
          <Line data={chartData} options={options} />
        </div>
      </Box>
    </>
  );
}
