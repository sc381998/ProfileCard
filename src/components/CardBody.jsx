import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "89%",
    height: "26%",
    padding: "0 18px",
    borderBottom: `2px solid #DADEE2`
  },

  row: {
    display: "flex",
    justifyContent: "around",
    padding: "5px 0"
  },
  sgName: {
    fontSize: "14px",
    fontWeight: "700",
    width: "20%",
    height: "20%",
    color: "#001521"
  },
  sgBar: {
    width: "70%",
    display: "flex",
    position: "relative",
    marginTop: "5px",
    height: "8px"
  },
  sgValue: {
    fontSize: "14px",
    fontWeight: "800",
    width: "10%",
    height: "20%",
    color: "#001521"
  }
}));
export default function CardBody(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {Object.keys(props.data).map(function (key, index) {
        return (
          <div key={index}>
            <Box className={classes.row}>
              <Typography className={`sgLeft ${classes.sgName}`}>
                SG {key.toUpperCase()}
              </Typography>
              <div className={classes.sgBar}>
                <div className="grayBox mr-2 bar"></div>
                <div className="grayBox  mr-2 bar"></div>
                <div className="grayBox  mr-2 bar"></div>
                <div className="grayBox bar"></div>
                <div className="blackLine"></div>
                <div className="grayBox bar"></div>
                <div className="grayBox  ml-2 bar"></div>
                <div className="grayBox ml-2 bar"></div>
                <div className="grayBox ml-2 bar"></div>

                <div
                  style={{
                    height: "8px",
                    background: `rgb(86, 167, 255)`,
                    backgroundImage:
                      "linear-gradient(90deg,rgba(86, 167, 255, 1) 0%,rgba(0, 122, 255, 1) 100%)",
                    position: "absolute",
                    left: props.data[key] > 0 ? "101px" : "67px",
                    right: props.data[key] > 0 ? 0 : "101px",
                    width:
                      props.data[key] < 0
                        ? -props.data[key] * 30
                        : props.data[key] * 30
                  }}
                ></div>
              </div>
              <Typography className={`sgLeft ${classes.sgValue}`}>
                {props.data[key]}
              </Typography>
            </Box>
          </div>
        );
      })}
    </div>
  );
}
