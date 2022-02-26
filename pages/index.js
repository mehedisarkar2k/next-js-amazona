import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import Link from "next/link";
import Layout from "../components/Layout";
import data from "../utils/data";

export default function Home() {
    return (
        <Layout>
            <Box>
                <Typography variant="h3">Products</Typography>

                <Grid container spacing={3}>
                    {data.products?.map((product) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            key={product.id}
                        >
                            <Card>
                                <Link
                                    href={`/products/${product.slug}`}
                                    passHref
                                >
                                    <CardActionArea>
                                        <CardMedia
                                            component={"img"}
                                            image={product.image}
                                            title={product.name}
                                        />

                                        <CardContent>
                                            <Typography variant="body1">
                                                {product.name}
                                            </Typography>
                                            <Typography
                                                variant="h4"
                                                color="secondary"
                                            >
                                                ${product.price}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Link>

                                <CardActions>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="secondary"
                                    >
                                        Add to Cart
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Layout>
    );
}
