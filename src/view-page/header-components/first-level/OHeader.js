import React from "react";
import {makeStyles} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import RoomIcon from "@material-ui/icons/Room";
import {Link} from "react-router-dom";
import CitySelect from "../../media/CitySelect";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    "@global": {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: "none",
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: "wrap",
    },
    toolbarTitle: {
        flexGrow: 0.3,
        fontSize: 15,
    },
    link: {
        margin: theme.spacing(1, 1.5),
        textDecoration:"none"
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
    },
    cardPricing: {
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
        dropdown: {
            width: "10"
        }
    },
}));

function OHeader() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            className={classes.appBar}
        >
            <Toolbar className={classes.toolbar}>
                <Typography
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    Ваш город:
                </Typography>
                <CitySelect/>
                <Typography
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    <RoomIcon/> Мучной переулок, 32134 Садовая улица название
                </Typography>
                <nav>

                    <Link
                        variant="button"
                        color="textPrimary"
                        to="/"
                        className={classes.link}
                    >
                        <Button>
                            Главная
                        </Button>

                    </Link>

                    <Link

                        to="/shares"
                        className={classes.link}
                    >
                        <Button>

                            Акции
                        </Button>

                    </Link>


                    <Link
                        to="/price-list"
                        className={classes.link}
                    >
                        <Button>

                            Прайс-лист
                        </Button>

                    </Link>


                    <Link
                        to="/conditions"
                        className={classes.link}
                    >
                        <Button>

                            Условия работы
                        </Button>

                    </Link>


                    <Link
                        to="/guarantee"
                        className={classes.link}
                    >
                        <Button>

                            Гарантии
                        </Button>

                    </Link>


                    <Link
                        to="/contacts"
                        className={classes.link}
                    >
                        <Button>

                            Контакты
                        </Button>

                    </Link>


                </nav>
            </Toolbar>
        </AppBar>
    );
}

export default OHeader;
