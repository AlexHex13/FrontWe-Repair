import React from "react";
import {makeStyles} from "@material-ui/core/styles";


const useStyle = makeStyles(()=>({

    box:{
        width:"60vh",
        height:"60vh",
        backgroundColor:"yellow"
    }


}))


function InfoBlock() {

    const styles = useStyle()

    return (
        <div className={styles.box}>

        </div>
    )
}


export default InfoBlock;