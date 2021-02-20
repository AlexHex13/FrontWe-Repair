import {makeStyles} from "@material-ui/core";
import React from "react";
import Button from "@material-ui/core/Button";
import img from "../../../static/images/radioman.png";

const useStyle = makeStyles((theme) => ({
    body: {
        background: `url(${img}) center no-repeat`,
        width: "100%",
        height: "50vh",
        backgroundSize: "cover",
        objectPosition: "center",
        objectFit: "none",
    },
    afterBack: {
        content: "",
        height: "50vh",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,.5)",
        zIndex: 2,
        color: "white",
    },
    headText: {
        fontSize: "4vh",
    },
    preText: {
        fontSize: "2vh",
    },
    formControl: {
        fontSize:"2vh"
    },
    content: {
        paddingTop: "5%"
    },
    button: {
        marginTop: '0.5%'
    }
}));

function ProblemBlock() {
    const styles = useStyle();

    return (
        <div className={styles.body}>
            <div className={styles.afterBack}>
                <div className={styles.content}>
        <span className={styles.text}>
          <span className={styles.headText}>Работаем лучше всех. Только посмотрите!</span>
          <br/>
          <br/>
          <div className={styles.formControl}>
             Наш сервисный центр в Санкт-Петербурге занимается проведением <br/> качественного ремонта,
              а также восстановлением программного <br/>обеспечения планшетов и компьютеров,
              ноутбуков и нетбуков, айфонов и<br/> остальных переносных устройств.

          </div>
        </span>
                    <Button className={styles.button} variant="contained" color="primary" size="large">
                        Оставить заявку
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProblemBlock;
