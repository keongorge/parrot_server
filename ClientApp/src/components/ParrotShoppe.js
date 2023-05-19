import Grid from "@mui/material/Grid";
import { Button, Card, CardMedia, Stack, Typography } from "@mui/material";
import monicle from "../parrotMonicle.PNG";
import ParrotArea from "./ParrotArea";

function ParrotShoppe() {
  return (
    <div className="ParrotShoppe">
      <Grid container>
        <Grid sx={{border:1}} item xs={2}>
            <Card>
                <CardMedia sx={{ height: '12.5rem'}}image={monicle} title="squarrot"></CardMedia>
            </Card>
        </Grid>
        <Grid sx={{border:1}} item xs={10}>
            <Typography variant="h3" sx={{padding: '4rem'}}>
                Ye Olde Parrot Shoppe
            </Typography>
        </Grid>
        <Grid sx={{border:1}} item xs={2}>
            <Stack sx={{padding: '1rem 1rem 4rem'}} spacing={3}>
                <Button sx={{color: "gray"}}variant="outlined" size="large">Store</Button>
                <Button sx={{color: "gray", borderColor: "gray"}} variant="outlined" size="large">Blog</Button>
                <Button sx={{color: "gray", borderColor: "gray"}} variant="outlined" size="large">About</Button>
                <Button sx={{color: "gray", borderColor: "gray"}} variant="outlined" size="large">Contact</Button>
            </Stack>
        </Grid>
        <Grid sx={{border:1}} item xs={10}>
            <ParrotArea></ParrotArea>
        </Grid>
      </Grid>
    </div>
  );
}

export default ParrotShoppe;
