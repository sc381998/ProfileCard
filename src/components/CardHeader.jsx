import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { makeStyles } from "@material-ui/core/styles";

import {
  Box,
  ButtonBase,
  Typography,
  CircularProgress
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "89%",
    height: "21%",
    padding: "18px 18px 0 18px",
    borderBottom: `2px solid #DADEE2`
  },
  image: {
    width: 56,
    height: 56
  },
  img: {
    margin: "auto",
    borderRadius: "50%",
    border: "4px solid #e6e8eb",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  name: {
    color: "#001521",
    fontSize: "18px",
    fontWeight: 800
  },
  location: {
    fontSize: "12px",
    color: "#46555F"
  },
  quality: {
    padding: "0 12px",
    borderRight: "2px solid #DADEE2"
  },
  handicap: {
    padding: "0 12px"
  },
  sgTotal: {
    padding: "0 12px",
    borderLeft: "2px solid #DADEE2"
  },
  numbers: {
    color: "#001521",
    fontSize: "14px",
    fontWeight: 800,
    display: "flex"
  },
  circularProgress: {
    width: 28,
    height: 28
  }
}));
export default function CardHeader(props) {
  const { name, location, quality, handicap, sgTotal, imgUrl } = props.data;
  const classes = useStyles();

  return (
    <>
      <Box display="flex" className={classes.container}>
        <Box>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src={imgUrl} />
          </ButtonBase>
        </Box>
        <Box style={{ paddingLeft: "12px" }}>
          <Box>
            <Typography className={`profileName ${classes.name}`}>
              {name}
            </Typography>
            <Typography className={` profileLocation ${classes.location}`}>
              {location}
            </Typography>
          </Box>
          <Box display="flex" style={{ padding: "16px 0" }}>
            <Box display="flex" className={classes.quality}>
              <Box>
                <Typography className={`quality ${classes.location}`}>
                  Quality
                </Typography>
                <Typography className={`numbers ${classes.numbers}`}>
                  {quality}
                  <ArrowDropDownIcon fontSize="small" />
                </Typography>
              </Box>

              <Box display="flex" alignItems="center" justifyContent="center">
                <CircularProgress
                  style={{ width: 28, height: 28 }}
                  variant="static"
                  color="secondary"
                  value={quality}
                />
              </Box>
            </Box>
            <Box className={classes.handicap}>
              <Typography className={`quality ${classes.location}`}>
                Handicap
              </Typography>
              <Typography className={`numbers ${classes.numbers}`}>
                {handicap}
              </Typography>
            </Box>
            <Box className={classes.sgTotal}>
              <Typography className={`quality ${classes.location}`}>
                SGTotal
              </Typography>
              <Typography className={`numbers ${classes.numbers}`}>
                {sgTotal}
                <ArrowDropUpIcon fontSize="small" />
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
