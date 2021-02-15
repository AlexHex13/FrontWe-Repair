import React from "react";
import InfoBlock from "./InfoBlock";
import Block from "./Block";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles(()=>({

    body:{
        marginLeft:"25em"
},
    box:{
        display:"flex",
        flexDirection:"row-reverse",
        justifyContent:"flex-end",
    }
}))

function MainBlock() {

    const styles = useStyle()

return (
    <div className={styles.body}>
        <div className={styles.box}>
            <InfoBlock/>
            <Block/>
        </div>
        <div className={styles.box}>
            <Block/>
            <InfoBlock/>

        </div>
    </div>
)

}


export default MainBlock;