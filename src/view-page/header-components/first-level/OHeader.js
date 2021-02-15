import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import RoomIcon from "@material-ui/icons/Room";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

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
  },
}));
function OHeader() {
  const classes = useStyles();
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
          Ваш город: Санкт-Петербург
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          <RoomIcon /> Мучной переулок, 32134 Садовая улица название
        </Typography>
        <nav>
            <Link
              variant="button"
              color="textPrimary"
              to="/"
              className={classes.link}
            >
              Главная
            </Link>
            <Link

              to="/shares"
              className={classes.link}
            >
              Акции
            </Link>
            <Link
              to="/price-list"
              className={classes.link}
            >
              Прайс-лист
            </Link>
            <Link
              href="#"
              className={classes.link}
            >
              Условия работы
            </Link>
            <Link
              href="#"
              className={classes.link}
            >
              Гарантии
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Контакты
            </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default OHeader;
