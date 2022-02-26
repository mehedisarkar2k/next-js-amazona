import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    navbar: {
        backgroundColor: "#203040",
        "& a": {
            color: "#fff",
            marginLeft: 10,
        },
    },

    brand: {
        fontWeight: "bold",
        fontSize: "1.5rem",
    },

    grow: {
        flexGrow: 1,
        display: "flex",
        transition: "all 0.3s ease-in-out",
    },

    item: {
        display: "flex",
        marginLeft: "auto",
        "& a:hover": {
            color: "#9c27b0",
        },
    },

    main: {
        minHeight: "80vh",
    },

    section: {
        marginTop: 10,
        marginBottom: 10,
    },

    footer: {
        textAlign: "center",
        padding: "10px",
        marginTop: 10,
    },
});

export default useStyles;
