import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Grid container alignItems="center" justifyContent="center" height="60vh">
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', mt: 4 }}>
        Loading Page
      </Typography>
    </Grid>
  );
}
