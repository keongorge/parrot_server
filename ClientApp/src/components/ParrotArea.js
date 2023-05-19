import { Grid } from "@mui/material";
import Parrot from "./Parrot.js";
import squarrot from "../squarrot.jpg";
import { useState, useEffect } from "react";

//query DB for unsold parrots here
const dummyParrotData = [
    {ProductID: 1234, Name: "cockatoo", Species: "cockatookus", Age: 15, Description: "old and cantankerous", Picture: squarrot, Sold: 0 },
    {ProductID: 1234, Name: "cockatoo", Species: "cockatookus", Age: 15, Description: "old and cantankerous", Picture: squarrot, Sold: 0 },
    {ProductID: 1234, Name: "cockatoo", Species: "cockatookus", Age: 15, Description: "old and cantankerous", Picture: squarrot, Sold: 0 },
    {ProductID: 1234, Name: "cockatoo", Species: "cockatookus", Age: 15, Description: "old and cantankerous", Picture: squarrot, Sold: 0 },
    {ProductID: 1234, Name: "cockatoo", Species: "cockatookus", Age: 15, Description: "old and cantankerous", Picture: squarrot, Sold: 0 },
    {ProductID: 1234, Name: "cockatoo", Species: "cockatookus", Age: 15, Description: "old and cantankerous", Picture: squarrot, Sold: 0 },
]

function ParrotArea() {
    let [parrotData, setParrotData] = useState(dummyParrotData);

    useEffect(() => {

        fetch("https://localhost:7054/parrot")
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setParrotData(data);
            })
    }, []);

  return (
    <div className="ParrotArea">
        {console.log(parrotData)}
        <Grid sx={{maxHeight: '50rem', overflow: 'auto'}} xs={12} container>
            {parrotData.map((parrot, i) => (
                <Grid item sx={{padding: '1rem'}} xs={6} key={i}>
                    <Parrot {...parrot}/>
                </Grid>
            ))}
        </Grid>
    </div>
  );
}

export default ParrotArea;
