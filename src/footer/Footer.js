import { makeStyles } from "@material-ui/core";
import React from "react";


const useStyle = makeStyles(()=>({

    body:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        fontSize:"2vh",
        backgroundColor:"black",
        color:"white",

    }

}))

function Footer(){

const styles = useStyle()

return (
    <div className = {styles.body}>
            <span>
            Компания © 2019 Все права защищены
            </span>
            <span>
            Политика конфиденциальности
            </span>
    </div>
)

}


export default Footer;