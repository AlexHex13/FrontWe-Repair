import {makeStyles} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import {useState} from "react";




const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor:"black",
        color:"white"
    },
    toolbar: {
        margin:2

    },
    link: {
        color:"white",
        flexGrow: 0.15,
        fontSize:15
    },


}));


function TechnicalPart() {
    const classes = useStyles()

    return (


        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="button" color="textPrimary" href="#" className={classes.link}>
                    Смартфоны
                </Typography>
                <Typography variant="button" color="textPrimary" href="#" className={classes.link}>
                    Планшеты
                </Typography>
                <Typography variant="button" color="textPrimary" href="#" className={classes.link}>
                    Ноутбуки
                </Typography>
                <Typography variant="button" color="textPrimary" href="#" className={classes.link}>
                    Моноблоки
                </Typography>
                <Typography variant="button" color="textPrimary" href="#" className={classes.link}>
                    Компьютеры
                </Typography>
                <Typography variant="button" color="textPrimary" href="#" className={classes.link}>
                    Телевизоры
                </Typography>
                <Typography variant="button" color="textPrimary" href="#" className={classes.link}>
                    Еще устройства
                </Typography>
            </Toolbar>
        </AppBar>
    )


}



export default TechnicalPart;