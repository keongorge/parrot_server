import { Button, Card, CardMedia, CardActions, CardContent, Typography } from "@mui/material";

function Parrot(props) {
    const {ProductID, Name, Species, Age, Description, Picture, Sold} = props;
    var blob = new Blob([Picture], {type: "image/jpeg"});
    var imageUrl = `data:image/png;base64,${Picture}`;
  return (
    <div className="Parrot">
        <Card >
        <CardMedia
            sx={{ height: '36rem' }}
            image={imageUrl}
            title={Name}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {Name + " : " + Species}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {Name} is {Age} years old.
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {Description}
            </Typography>
            <Typography variant="body3" color="text.secondary">
                ID number:  {ProductID}
            </Typography>
        </CardContent>
        <CardActions>
            <Button sx={{backgroundColor: "red"}}>Add to Cart</Button>
        </CardActions>
        </Card>
    </div>
  );
}

export default Parrot;
