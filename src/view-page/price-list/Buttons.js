import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles(() => ({
  body: {
    marginTop: "5%",
  },
  group: {},

  text: {
    fontSize: "3vh",
    textAlign: "left",
    marginLeft: "20%",
  },
  h2:{
    fontSize: "2vh",
    float:"left",
    textAlign: "left",
    marginLeft: "20%",
      
  }
}));

function Buttons() {
  const styles = useStyle();

  return (
    <div className={styles.body}>
      <div className={styles.group}>
        <Button variant="outlined" color="primary">
          Смартфоны
        </Button>
        <Button variant="outlined" color="primary">
          Планшеты
        </Button>
        <Button variant="outlined" color="primary">
          Ноутбуки
        </Button>
        <Button variant="outlined" color="primary">
          Моноблоки
        </Button>
        <Button variant="outlined" color="primary">
          Компьютеры
        </Button>
      </div>

      <div className={styles.group}>
        <Button variant="outlined" color="primary">
          Телевизоры
        </Button>
        <Button variant="outlined" color="primary">
          Мониторы
        </Button>
        <Button variant="outlined" color="primary">
          Фотоаппараты
        </Button>
        <Button variant="outlined" color="primary">
          Кофемашины
        </Button>
        <Button variant="outlined" color="primary">
          Проекторы
        </Button>
      </div>

      <Typography className={styles.text}>Заголовок</Typography>

      <span className={styles.h2}>
        Ремонт техники всегда проходит по слаженной схеме. Потенциальный клиент
        изучает предоставленную информацию и убеждается <br/> в том, что
        сотрудничество обещает быть успешным. Затем проводится бесплатная
        диагностика, после которой становится возможным  <br/> быстрый ремонт. В
        обязательном порядке применяются качественные запчасти, которые придают
        оптимальную надежность<br/> используемой продукции.
      </span>
    </div>
  );
}

export default Buttons;
