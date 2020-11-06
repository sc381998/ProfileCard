import React from "react";
import data from "./../data/data.json";
import { Box } from "@material-ui/core";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardActivity from "./CardActivity";
export default function Card() {
  const contents = data.contents[0];
  return (
    <>
      <Box
        m={1}
        className="cardInnerBody"
        bgcolor="background.paper"
        style={{
          width: 330,
          height: 490,
          border: `1px solid #C0C6CB`,
          boxShadow: "1px 1px 10px 0px rgba(192, 198, 203, 1)",
          borderRadius: 8
        }}
      >
        <CardHeader data={contents} />
        <CardBody data={contents.sg} />
        <CardActivity data={contents.latestActivity} />
        <CardFooter data={contents.strokes} />
      </Box>
    </>
  );
}
