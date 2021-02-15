import { makeStyles, Typography } from "@material-ui/core";
import img from "../../../static/images/collage-left-01.png";

const useStyle = makeStyles(() => ({
  body: {
    marginTop: "10%",
  },
  h1: {
    fontSize: "3vh",
  },
  content: {
    display: "flex",
  },
  img: {
    float: "left",
  },
  text: {
    fontSize: "2vh",
    marginTop: "10%",
    textAlign:"left",
    marginLeft:"5%"
  },
}));

function BigBlock() {
  const styles = useStyle();
  return (
    <div className={styles.body}>
      <Typography className={styles.h1}>
        Самый лучший в мире сервисный центр
      </Typography>
      <div className={styles.content}>
        <img className={styles.img} src={img} />
        <span className={styles.text}>
          Ремонт техники всегда проходит по слаженной схеме. <br/> Потенциальный
          клиент изучает предоставленную <br/>информацию и убеждается в том, что
          сотрудничество <br/>обещает быть успешным. Затем проводится бесплатная<br/>
          диагностика, после которой становится возможным <br/>быстрый ремонт. В
          обязательном порядке применяются<br/> качественные запчасти, которые
          придают оптимальную<br/> надежность используемой продукции. Такая слаженная<br/>
          схема гарантирует то, что сервисный центр может оказать<br/> помощь в
          устранении любых неисправностей, имеющих <br/>отношение к планшетам,
          компьютерам или другой технике.<br/> Мастера нашего сервисного центра
          проводят обслуживание<br/> и ремонт смартфонов, планшетов, ноутбуков,
          мобильной техники,<br/> персональных компьютеров независимо от бренда.
        </span>
      </div>
    </div>
  );
}

export default BigBlock;
