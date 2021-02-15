import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import CallForm from "../face-block/call-form/CallForm";
import img from "../../static/images/head-img.png";
import InfoBlock from "./InfoBlock";

const useStyle = makeStyles(() => ({
  background: {
    width: "60%",
    height: "40vh",
    backgroundColor: "white",
    margin: "0 auto",
    color: "black",
  },
  container: {
    display: "flex",
    alignContent: "space-between",
    textAlign: "center",
    paddingLeft: 50,
  },
  image: {
    paddingLeft: 50,
  },
  text: {
    marginTop: "10%",
    textAlign: "left",
  },
  bigText: {
    textAlign: "left",
    marginLeft: "20%",
    fontSize: "2vh",
  },
  button:{
      marginLeft:"20%",
      marginTop:"1.5%",
      float:"left"
  }
}));

function SharesBlock() {
  const styles = useStyle();

  return (
    <>
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.text}>
            <InfoBlock />
          </div>
          <div className={styles.image}>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.bigText}>
        Ремонт техники всегда проходит по слаженной схеме. Потенциальный клиент
        изучает предоставленную информацию <br /> и убеждается в том, что
        сотрудничество обещает быть успешным. Затем проводится бесплатная
        диагностика, после <br />
        которой становится возможным быстрый ремонт. В обязательном порядке
        применяются качественные запчасти,
        <br /> которые придают оптимальную надежность используемой продукции.
      </div>
      <Button className = {styles.button} variant="contained" color="primary" disableElevation>
        Оставить заявку
      </Button>
    </>
  );
}

export default SharesBlock;
