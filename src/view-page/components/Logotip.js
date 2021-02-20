import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles(()=>({

    body:{
        height:"130px",
        width:"250px"
    }


}))


export default function LogoTip(props){

    const styles = useStyle();

    return (
        <div className={styles.body}>
            <img src={props.image} alt="brand"/>
        </div>
    )
}