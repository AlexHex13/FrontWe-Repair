import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import img from "../../../static/images/video.png";

const useStyle = makeStyles(() => ({
  body: {
    width: "100%",
    height: "60vh",
    color: "black",
  },
  h: {
    fontSize: "4vh",
  },
  h2: {
    fontSize: "2vh",
  },
  text: {
    textAlign: "left",
  },
  img: {
    width: "30%",
    height: "50%",
    marginLeft:"20px"
  },
  block:{
    display: "flex",
    marginTop:"10%",
    marginLeft:"30%",
  }
}));

function WorkBlock() {
  const styles = useStyle();
  return (
    <div className={styles.body}>
      <div className={styles.block}>
        <Typography className={styles.text}>
          <span className={styles.h}>
            Работаем лучше всех. <br /> Только посмотрите!
          </span>
          <br />
          <span className={styles.h2}>
            Наш сервисный центр в Санкт-Петербурге <br /> занимается проведением
            качественного ремонта <br /> также тако ремонта, а также еще многим
            чем
          </span>
          <br/>
          <br/>
          <Button variant="contained" color="primary" size="large">
                Оставить заявку
      </Button>
        </Typography>
        <img className={styles.img} src={img} />
      </div>
    </div>
  );
}

export default WorkBlock;
