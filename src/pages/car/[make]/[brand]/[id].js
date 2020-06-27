import { openDB } from "../../../../openDB";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  
  paper: {
    padding: theme.spacing(2),
    margin: "auto"
  },
  img: {
    width: "100%",
  },
}));

const CarDetails = ({ car }) => {
  if (!car) {
    return <p>Sorry, car was not found!</p>;
  }

  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={7}>
              <img
                className={classes.img}
                alt="complex"
                src={car.photoUrl}
              />
          </Grid>
          <Grid item xs={12} sm={6} md={5} container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h4">
                  {car.make} {' '} {car.model}
                </Typography>

                <Typography variant="h6" color="textSecondary">
                  {car.year} | {car.fuelType} | {car.kilometers}
                </Typography>
                <Typography gutterBottom variant="body2" color="textSecondary">
                  {car.details}
                </Typography>
                <Typography variant="h5" color="primary">$19.00</Typography>
              </Grid>
              <Grid item>
                <Button variant='contained' color="primary" >Add to Cart</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default CarDetails;

export const getServerSideProps = async (ctx) => {
  const id = ctx.params.id;
  const db = await openDB();
  const car = await db.get("SELECT * FROM Car where id = ?", id);

  return { props: { car: car } };
};
