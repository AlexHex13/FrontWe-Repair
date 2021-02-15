import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import imgOne from "../../static/images/b1.png";
import Typography from "@material-ui/core/Typography";


const useStyle = makeStyles(()=>({

    box:{
        width:"60vh",
        height:"60vh",
        backgroundColor:"blue",
        color:"white",
        justifyContent:"space-between"
},
    img:{
        height:"58vh",
        display: "flex",
        alignItems: "center",
    },
    text:{
        fontSize:"4rem"
    }


}))

function Block() {

    const styles = useStyle()

    return (
        <div className={styles.box}>
            <img className={styles.img} src={imgOne} alt="smartphones"/>
            <Typography>Смартфоны</Typography>
            <Typography className={styles.text}>Более 300 брендов, <br/> срочный ремонт от <br/> 30 минут.</Typography>
        </div>
    )
}

export default Block;