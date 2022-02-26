import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import Layout from "../components/Layout";

export default function Home() {
    return (
        <Layout>
            <Box>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper>
                            <Typography variant="h1">Home</Typography>
                            <Button variant="contained" color="secondary">
                                Click Me
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    );
}
