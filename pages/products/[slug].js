import {
    Button,
    Card,
    Grid,
    Link as MLink,
    List,
    ListItem,
    Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import useStyles from "../../utils/styles";

const ProductScreen = () => {
    const classes = useStyles();
    const router = useRouter();
    const { slug } = router.query;
    const product = data.products?.find((p) => p.slug === slug);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <Layout title={product?.name} description={product.description}>
                <div>
                    <Link href="/" passHref>
                        <MLink underline="hover">
                            <Typography sx={{ display: "inline-block", p: 1 }}>
                                Back to Products
                            </Typography>
                        </MLink>
                    </Link>

                    <div className={classes.section}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Image
                                    src={product?.image}
                                    alt={product?.name}
                                    width={640}
                                    height={640}
                                    layout="responsive"
                                />
                            </Grid>

                            <Grid item xs={12} md={3}>
                                <List>
                                    <ListItem>
                                        <Typography variant="h6" component="h1">
                                            {product?.name}
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="h6">
                                            Category: {product?.category}
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="h6">
                                            Category: {product?.brand}
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="h6">
                                            Category: {product?.rating}stars (
                                            {product?.numReviews} reviews)
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="body2">
                                            Description: {product?.description}
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Grid>

                            <Grid item xs={12} md={3}>
                                <Card>
                                    <List>
                                        <ListItem>
                                            <Grid container>
                                                <Grid item xs={6}>
                                                    <Typography variant="h6">
                                                        Price:
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography variant="h6">
                                                        ${product?.price}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                        <ListItem>
                                            <Grid container>
                                                <Grid item xs={6}>
                                                    <Typography variant="h6">
                                                        Status:
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography variant="h6">
                                                        {product?.countInStock >
                                                        0
                                                            ? "In Stock"
                                                            : "Out of Stock"}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </ListItem>

                                        <ListItem>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                fullWidth
                                            >
                                                Add to Cart
                                            </Button>
                                        </ListItem>
                                    </List>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default ProductScreen;
