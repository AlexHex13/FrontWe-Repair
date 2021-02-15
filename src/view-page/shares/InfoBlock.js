import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "left",
  },
  h1: {
    fontSize: "3vh",
  },
  h2: {
    fontSize: "2vh",
  },
}));

export default function InfoBlock() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.text}>
        <span className={classes.h1}>
          Скидки 15% на все виды ремонта <br />
          до конца июля
        </span>
        <br />
        <span className={classes.h2}>
          Текст акции может быть здесь под заголовком <br /> и над красивой
          большой кнопкой
        </span>
      </span>
    </div>
  );
}
