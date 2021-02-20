import { makeStyles, Typography } from "@material-ui/core"
import React from "react"
import imgA from "../../../static/images/faceone.png";
import imgB from "../../../static/images/facetwo.png";
import imgC from "../../../static/images/facethree.png";
import collage from "../../../static/images/collage.png";



const useStyles = makeStyles(()=>({

        h1:{
            fontSize:"3vh"
        },
        h2:{
            fontSize:"2vh",
            paddingTop:"5%"
        },
        block:{
            display: "flex",
            marginTop:"5%",
            marginLeft:"30%",
            textAlign:"left"
        },
        img: {
            marginLeft:"20px"
          },
}))


function LongBlock(){

    const styles = useStyles()

    return (
        <div className = {styles.body}>
            <Typography className = {styles.h1}>Самый лучший в мире сервисный центр</Typography>
        <div className = {styles.block}>
        <span className={styles.h2}>
        Ремонт техники всегда проходит по слаженной схеме. <br/>
        Потенциальный клиент изучает предоставленную <br/>
         информацию и убеждается в том, что сотрудничество<br/>
          обещает быть успешным. Затем проводится бесплатная <br/>
           диагностика, после которой становится возможным  <br/> 
           быстрый ремонт. 
          </span>
          <img className = {styles.img} src = {imgA}/>
        </div>
        <div className = {styles.block}>
        <span className={styles.h2}>
        В обязательном порядке применяются качественные <br/>
        запчасти, которые придают оптимальную надежность <br/>
         используемой продукции. Такая слаженная схема <br/>
         гарантирует то, что сервисный центр может оказать <br/>
         помощь в устранении любых неисправностей,<br/>
          имеющих отношение к планшетам, компьютерам<br/>
           или другой технике. 
           Мастера нашего сервисного<br/> центра проводят 
           обслуживание и ремонт <br/>
           смартфонов, планшетов, ноутбуков,<br/> мобильной техники, персональных<br/>
            компьютеров независимо от бренда. В нашу компанию  <br/>
            часто обращаются клиенты, которым требуется ремонт <br/>
             компьютерной техники. 
          </span>
          <img  className = {styles.img} src = {imgB} />
        </div>
        <div className = {styles.block}>
        <span className={styles.h2}>
        Мы предлагаем не только проведение ремонта, но и <br/>
        огромный выбор оригинальных запчастей. Благодаря<br/>
         наличию собственного склада есть возможность <br/>
          выбора наиболее редкой детали для замены по<br/>
           доступной стоимости. <br/>
           Мастера нашего сервисного центра проводят  <br/>
           обслуживание и ремонт смартфонов, планшетов,<br/> ноутбуков, мобильной техники, персональных<br/>
            компьютеров независимо от бренда.
          </span>
          <img   className = {styles.img} src = {imgC}/>
        </div>
        <br/>
        <img   className = {styles.img} src = {collage}/>
        
        </div>
    )
}


export default LongBlock