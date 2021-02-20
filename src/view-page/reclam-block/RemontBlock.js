import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import img from "../../static/images/radioman.png";
import WorkBlock from "../face-block/help-component/WorkBlock";
import LongBlock from "../face-block/help-component/LongBlock";
import ProblemBlock from "../face-block/help-component/ProblemBlock";
import BigBlock from "../face-block/help-component/BigBlock";
import BlockInput from "../face-block/help-component/BlockInput";

const useStyle = makeStyles(() => ({

    body: {
        background: `url(${img}) center no-repeat`,
        width: "100%",
        height: "50vh",
        backgroundSize: "cover",
        objectPosition: "center",
        objectFit: "none"
    },
    afterBack: {
        content: '',
        height: "50vh",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,.5)",
        zIndex: 2,
        color: "white"
    },
    block:{
        marginTop:"10%"
    }

}))


function RemontBlock() {
    const styles = useStyle()


    return (
        <>
            <div className={styles.body}>
                <div className={styles.afterBack}>
                    <BlockInput/>
                </div>
            </div>
            <WorkBlock/>
            <div className={styles.block}><LongBlock/></div>

            <ProblemBlock/>
            <BigBlock/>
        </>

    )
}

export default RemontBlock;