import {
    AppBar,
    Container,
    Link as MLink,
    Toolbar,
    Typography,
} from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import useStyles from "../utils/styles";

const Layout = ({ children, title, description }) => {
    const classes = useStyles();

    return (
        <>
            <Head>
                <title>{title ? `Amazona | ${title}` : "Amazona"}</title>
                {description && (
                    <meta name="description" content={description} />
                )}
            </Head>

            <AppBar className={classes.navbar} position="static">
                <Toolbar>
                    <Link passHref href="/">
                        <MLink underline="hover">
                            <Typography className={classes.brand}>
                                Next Amazona
                            </Typography>
                        </MLink>
                    </Link>

                    <div className={classes.grow}>
                        <div className={classes.item}>
                            <Link passHref href="/cart">
                                <MLink underline="hover">
                                    <Typography className={""}>Cart</Typography>
                                </MLink>
                            </Link>
                            <Link passHref href="/login">
                                <MLink underline="hover">
                                    <Typography className={""}>
                                        Login
                                    </Typography>
                                </MLink>
                            </Link>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>

            <Container className={classes.main}>{children}</Container>

            <footer className={classes.footer}>
                <Typography variant="h6">
                    All rights reserved. &copy; 2021-{new Date().getFullYear()}{" "}
                    Next Amazona
                </Typography>
            </footer>
        </>
    );
};

export default Layout;
