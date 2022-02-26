import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import useStyles from "../utils/styles";

const Layout = ({ children }) => {
    const classes = useStyles();

    return (
        <>
            <Head>
                <title>Next Amazon-a</title>
            </Head>

            <AppBar className={classes.navbar} position="static">
                <Toolbar>
                    <Typography variant="h4">Next Amazona</Typography>
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
