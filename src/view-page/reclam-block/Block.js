import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles(()=>({

    box:{
        width:"40vh",
        height:"40vh",
        backgroundColor:"green"
    }


}))

function Block() {

    const styles = useStyle()

    return (
        <div className={styles.box}>
        </div>
    )
}

export default Block;