import {List, ListItem, makeStyles} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import CropLandscapeIcon from '@material-ui/icons/CropLandscape';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import ComputerIcon from '@material-ui/icons/Computer';
import TvIcon from '@material-ui/icons/Tv';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import React from "react";
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';


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
        backgroundColor: "black",
        color: "white"
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        marginLeft: "4%"

    },
    link: {
        flexGrow: 0.15,
        fontSize: 15,
        display: "flex",
        textDecoration: "none"

    },
    border: {
        marginLeft: "1%"
    },
    inbox: {
        color: "white"
    },
    button: {
        color: "white"
    },
    nested: {
        color: "white"
    }

}));


function TechnicalPart() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (


        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Link variant="button"
                      color="textPrimary"
                      to="/components/smartphone"
                      className={classes.link}>
                    <Typography variant="button" color="textPrimary">
                        <Button className={classes.button}>
                            <SmartphoneIcon/>
                            <div className={classes.border}>
                                Смартфоны
                            </div>
                        </Button>
                    </Typography>
                </Link>
                <Link variant="button"
                      color="textPrimary"
                      to="/components/book"
                      className={classes.link}>
                    <Typography variant="button" color="textPrimary" href="#" className={classes.link}>
                        <Button className={classes.button}>
                            <CropLandscapeIcon/>
                            <div className={classes.border}>
                                Планшеты
                            </div>
                        </Button>
                    </Typography>
                </Link>
                <Link variant="button"
                      color="textPrimary"
                      to="/components/notebook"
                      className={classes.link}>
                    <Typography variant="button" color="textPrimary" href="#" className={classes.link}>
                        <Button className={classes.button}>
                            <VideoLabelIcon/>
                            &nbsp;
                            <div className={classes.border}>
                                Ноутбуки
                            </div>
                        </Button>
                    </Typography>
                </Link>
                <Link variant="button"
                      color="textPrimary"
                      to="/components/monoblock"
                      className={classes.link}>
                    <Typography variant="button" color="textPrimary" href="#" className={classes.link}>
                        <Button className={classes.button}>
                            <ComputerIcon/>
                            &nbsp;
                            <div className={classes.border}>
                                Моноблоки
                            </div>
                        </Button>
                    </Typography>
                </Link>
                <Link variant="button"
                      color="textPrimary"
                      to="/components/computer"
                      className={classes.link}>
                    <Typography variant="button" color="textPrimary" href="#" className={classes.link}>
                        <Button className={classes.button}>
                            <ComputerIcon/>
                            &nbsp;
                            <div className={classes.border}>
                                Компьютеры
                            </div>
                        </Button>
                    </Typography>
                </Link>
                <Link variant="button"
                      color="textPrimary"
                      to="/components/tv"
                      className={classes.link}>
                    <Typography variant="button" color="textPrimary" href="#" className={classes.link}>
                        <Button className={classes.button}>
                            <TvIcon/>
                            &nbsp;
                            <div className={classes.border}>
                                Телевизоры
                            </div>
                        </Button>
                    </Typography>
                </Link>
                <Link variant="button"
                      color="textPrimary"
                      className={classes.link}>
                    <Typography variant="button" color="textPrimary" href="#" className={classes.inbox}>
                        <ListItem button onClick={handleClick}>
                            <DevicesOtherIcon/>
                            &nbsp;
                            <ListItemText primary="Еще устройства"/>
                            {open ? <ExpandLess/> : <ExpandMore/>}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <Link variant="button"
                                          color="textPrimary"
                                          to="/components/monitor"
                                          className={classes.link}>
                                        <DesktopMacIcon/>
                                        &nbsp;
                                        <ListItemText>Мониторы</ListItemText>
                                    </Link>
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <Link variant="button"
                                          color="textPrimary"
                                          to="/components/photo"
                                          className={classes.link}>
                                        <PhotoCameraIcon/>
                                        &nbsp;
                                        <ListItemText primary="Фотоаппараты"/>
                                    </Link>
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <Link variant="button"
                                          color="textPrimary"
                                          to="/components/coffeemachine"
                                          className={classes.link}>
                                        <LocalCafeIcon/>
                                        &nbsp;
                                        <ListItemText primary="Кофемашины"/>
                                    </Link>
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <Link variant="button"
                                          color="textPrimary"
                                          to="/components/projector"
                                          className={classes.link}>
                                        <ImportantDevicesIcon/>
                                        &nbsp;
                                        <ListItemText primary="Проекторы"/>
                                    </Link>
                                </ListItem>
                            </List>
                        </Collapse>
                    </Typography>

                </Link>

            </Toolbar>

        </AppBar>

    )


}


export default TechnicalPart;