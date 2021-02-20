import {Breadcrumbs, makeStyles, Typography} from "@material-ui/core";
import React from "react";
import SharesBlock from "./SharesBlock";
import Link from "@material-ui/core/Link";
import HomeIcon from '@material-ui/icons/Home';

import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

const useStyle = makeStyles((theme) => ({
    body: {},
    text: {
        marginLeft: "20%",
        fontSize: "4vh",
        textAlign: "left",
    },
    block: {
        marginTop: "10%",
    },
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}));

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked.');
}

function Shares() {
    const styles = useStyle();

    return (
        <>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick} className={styles.link}>
                    <HomeIcon className={styles.icon}/>
                    Главная
                </Link>
                <Link
                    color="inherit"
                    href="/shares"
                    onClick={handleClick}
                    className={styles.link}
                >
                    Акции
                </Link>
            </Breadcrumbs>
            <div>
                <Typography className={styles.text}>Акции</Typography>
                <div className={styles.block}>
                    <SharesBlock/>
                </div>
                <div className={styles.block}>
                    <SharesBlock/>
                </div>
            </div>
        </>
    );
}

export default Shares;
